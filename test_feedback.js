// ========================================
// Feedback Form Testing Script
// ========================================

// Mock localStorage for testing
const mockLocalStorage = {};
global.localStorage = {
    getItem: (key) => mockLocalStorage[key] || null,
    setItem: (key, value) => { mockLocalStorage[key] = value; },
    removeItem: (key) => { delete mockLocalStorage[key]; },
    clear: () => { Object.keys(mockLocalStorage).forEach(key => delete mockLocalStorage[key]); }
};

// Mock DOM elements
const mockDOM = {
    feedbackForm: { addEventListener: jest.fn(), reset: jest.fn() },
    emailInput: { value: '', focus: jest.fn() },
    emailError: { textContent: '' },
    downloadBtn: { addEventListener: jest.fn() },
    body: { appendChild: jest.fn(), removeChild: jest.fn() }
};

global.document = {
    getElementById: (id) => {
        switch(id) {
            case 'feedback-form': return mockDOM.feedbackForm;
            case 'feedback-email': return mockDOM.emailInput;
            case 'email-error': return mockDOM.emailError;
            case 'download-feedback-btn': return mockDOM.downloadBtn;
            default: return null;
        }
    },
    createElement: () => ({ href: '', download: '', click: jest.fn() }),
    body: mockDOM.body
};

// Mock URL and Blob
global.URL = {
    createObjectURL: jest.fn(() => 'mock-url'),
    revokeObjectURL: jest.fn()
};
global.Blob = jest.fn((content) => ({ content }));

// Mock showNotification
global.showNotification = jest.fn();

// Import the functions to test
const {
    validateEmail,
    saveFeedback,
    downloadFeedback,
    initFeedbackForm
} = require('./js/script.js');

describe('Feedback Form Tests', () => {
    beforeEach(() => {
        // Clear localStorage and reset mocks
        localStorage.clear();
        jest.clearAllMocks();
        mockDOM.emailInput.value = '';
        mockDOM.emailError.textContent = '';
    });

    test('validateEmail - valid email', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true);
    });

    test('validateEmail - invalid email', () => {
        expect(validateEmail('invalid-email')).toBe(false);
        expect(validateEmail('test@')).toBe(false);
        expect(validateEmail('@example.com')).toBe(false);
        expect(validateEmail('')).toBe(false);
    });

    test('saveFeedback - saves to localStorage', () => {
        const email = 'test@example.com';
        const message = 'Great website!';

        saveFeedback(email, message);

        const stored = JSON.parse(localStorage.getItem('nearnest_feedback'));
        expect(stored).toHaveLength(1);
        expect(stored[0].email).toBe(email);
        expect(stored[0].message).toBe(message);
        expect(stored[0]).toHaveProperty('timestamp');
        expect(stored[0]).toHaveProperty('id');
    });

    test('saveFeedback - appends to existing feedback', () => {
        // First feedback
        saveFeedback('first@example.com', 'First message');
        // Second feedback
        saveFeedback('second@example.com', 'Second message');

        const stored = JSON.parse(localStorage.getItem('nearnest_feedback'));
        expect(stored).toHaveLength(2);
        expect(stored[0].email).toBe('first@example.com');
        expect(stored[1].email).toBe('second@example.com');
    });

    test('downloadFeedback - no feedback shows error', () => {
        downloadFeedback();
        expect(showNotification).toHaveBeenCalledWith('No feedback to download', 'error');
    });

    test('downloadFeedback - creates download link', () => {
        // Add some feedback
        saveFeedback('test@example.com', 'Test message');

        downloadFeedback();

        expect(showNotification).toHaveBeenCalledWith('Feedback downloaded successfully!', 'success');
        expect(URL.createObjectURL).toHaveBeenCalled();
        expect(URL.revokeObjectURL).toHaveBeenCalled();
    });

    test('initFeedbackForm - form submission with valid data', () => {
        mockDOM.emailInput.value = 'test@example.com';
        mockDOM.feedbackForm.querySelector = jest.fn(() => ({ value: 'Great feedback!' }));

        initFeedbackForm();

        // Simulate form submission
        const submitHandler = mockDOM.feedbackForm.addEventListener.mock.calls[0][1];
        const mockEvent = { preventDefault: jest.fn() };

        submitHandler(mockEvent);

        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(showNotification).toHaveBeenCalledWith('Thank you for your feedback!', 'success');
        expect(mockDOM.feedbackForm.reset).toHaveBeenCalled();
    });

    test('initFeedbackForm - form submission with invalid email', () => {
        mockDOM.emailInput.value = 'invalid-email';
        mockDOM.feedbackForm.querySelector = jest.fn(() => ({ value: 'Feedback message' }));

        initFeedbackForm();

        const submitHandler = mockDOM.feedbackForm.addEventListener.mock.calls[0][1];
        const mockEvent = { preventDefault: jest.fn() };

        submitHandler(mockEvent);

        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(mockDOM.emailError.textContent).toBe('Please enter a valid email address');
        expect(mockDOM.emailInput.focus).toHaveBeenCalled();
        expect(showNotification).not.toHaveBeenCalled();
    });

    test('initFeedbackForm - download button click', () => {
        initFeedbackForm();

        const clickHandler = mockDOM.downloadBtn.addEventListener.mock.calls[0][1];
        clickHandler();

        expect(showNotification).toHaveBeenCalledWith('No feedback to download', 'error');
    });
});

console.log('Feedback form tests completed successfully!');
