
// ========================================
// NearNest E-commerce - JavaScript
// ========================================

// Dark Mode Management
function initDarkMode() {
    const savedTheme = localStorage.getItem('nearnest_theme') || 'light';
    const isDark = savedTheme === 'dark';
    
    if (isDark) {
        document.body.classList.add('dark-mode');
        updateThemeToggle(true);
    }
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('nearnest_theme', isDark ? 'dark' : 'light');
    updateThemeToggle(isDark);
}

function updateThemeToggle(isDark) {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.textContent = isDark ? '☀️' : '🌙';
    }
}

// User Login Status Management
function updateLoginStatus() {
    const user = JSON.parse(localStorage.getItem('nearnest_user'));
    const loginLink = document.querySelector('.login-link');
    
    if (loginLink) {
        if (user && user.loggedIn) {
            // Extract email name (before @)
            const emailName = user.email.split('@')[0];
            loginLink.textContent = `👤 ${emailName}`;
            loginLink.href = '#';
            loginLink.onclick = (e) => {
                e.preventDefault();
                handleLogout();
            };
        } else {
            loginLink.textContent = '👤 Login';
            loginLink.href = 'login.html';
            loginLink.onclick = null;
        }
    }
}

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('nearnest_user');
        updateLoginStatus();
        showNotification('Logged out successfully!', 'success');
        window.location.href = 'index.html';
    }
}

// Mock Data
const MOCK_PRODUCTS = [
    {
        id: 1,
        name: "Organic Honey",
        price: 999.00,
        category: "Food & Beverages",
        location: "Downtown Market",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400",
        description: "Pure, locally sourced organic honey from local beekeepers. Rich in flavor and natural goodness."
    },
    {
        id: 2,
        name: "Handmade Ceramic Mug",
        price: 1450.00,
        category: "Home & Garden",
        location: "Artisan Quarter",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400",
        description: "Beautiful handcrafted ceramic mug perfect for your morning coffee. Unique design, locally made."
    },
    {
        id: 3,
        name: "Fresh Sourdough Bread",
        price: 550.00,
        category: "Food & Beverages",
        location: "Baker's Corner",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400",
        description: "Artisanal sourdough bread baked fresh daily using traditional methods and local ingredients."
    },
    {
        id: 4,
        name: "Vintage Desk Lamp",
        price: 3500.00,
        category: "Home & Garden",
        location: "Vintage Row",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400",
        description: "Beautifully restored vintage desk lamp. Perfect for adding character to your workspace."
    },
    {
        id: 5,
        name: "Organic Cotton T-Shirt",
        price: 1999.00,
        category: "Fashion",
        location: "Eco Boutique",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        description: "Soft, sustainable organic cotton t-shirt. Locally designed and ethically produced."
    },
    {
        id: 6,
        name: "Handcrafted Leather Wallet",
        price: 2999.00,
        category: "Fashion",
        location: "Leather Works",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
        description: "Premium handcrafted leather wallet made by local artisans. Built to last a lifetime."
    },
    {
        id: 7,
        name: "Succulent Plant Set",
        price: 1250.00,
        category: "Home & Garden",
        location: "Green Thumb Nursery",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400",
        description: "Set of 3 beautiful succulent plants. Low maintenance and perfect for any space."
    },
    {
        id: 8,
        name: "Artisan Coffee Beans",
        price: 1299.00,
        category: "Food & Beverages",
        location: "Coffee Roasters",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
        description: "Freshly roasted artisan coffee beans from local farms. Rich, bold flavor."
    },
    {
        id: 9,
        name: "Hand-Painted Canvas Art",
        price: 4999.00,
        category: "Art & Decor",
        location: "Art Studio",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=400",
        description: "Beautiful hand-painted canvas art by local artists. Perfect for decorating your home."
    },
    {
        id: 10,
        name: "Yoga Mat Premium",
        price: 2499.00,
        category: "Sports & Fitness",
        location: "Wellness Center",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400",
        description: "Eco-friendly premium yoga mat with superior grip and cushioning."
    },
    {
        id: 11,
        name: "Scented Candle Set",
        price: 1799.00,
        category: "Home & Garden",
        location: "Candle Corner",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400",
        description: "Set of 3 handpoured scented candles. Natural soy wax with essential oils."
    },
    {
        id: 12,
        name: "Books",
        price: 2199.00,
        category: "Stationery",
        location: "Local Library",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
        description: "Collection of bestselling books from local and international authors. Perfect for book lovers."
    },

    {
        id: 13,
        name: "Handmade Wooden Jewelry Box",
        price: 3499.00,
        category: "Home & Garden",
        location: "Woodcraft Workshop",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
        description: "Beautifully crafted wooden jewelry box with intricate carved details. Locally handmade."
    },
    {
        id: 14,
        name: "Handwoven Basket",
        price: 2699.00,
        category: "Home & Garden",
        location: "Craft Market",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400",
        description: "Beautiful handwoven basket perfect for storage or decor. Made by local artisans."
    },

    {
        id: 16,
        name: "Denim Jacket Vintage",
        price: 4599.00,
        category: "Fashion",
        location: "Retro Threads",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400",
        description: "Classic vintage denim jacket. Timeless style, perfect condition."
    },
    {
        id: 17,
        name: "Essential Oil Diffuser",
        price: 3299.00,
        category: "Home & Garden",
        location: "Aromatherapy Hub",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400",
        description: "Ultrasonic essential oil diffuser with LED lights. Create a relaxing atmosphere."
    },
    {
        id: 18,
        name: "Handcrafted Wooden Frame",
        price: 2299.00,
        category: "Art & Decor",
        location: "Frame Workshop",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400",
        description: "Elegant handcrafted wooden frame perfect for artwork or photos. Made by local craftsmen."
    },
    {
        id: 19,
        name: "Leather Journal",
        price: 2100.00,
        category: "Stationery",
        location: "Writer's Den",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
        description: "Hand-bound leather journal with premium paper. Perfect for writing and sketching."
    },
    {
        id: 20,
        name: "Herbal Tea Collection",
        price: 1199.00,
        category: "Food & Beverages",
        location: "Tea House",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400",
        description: "Curated collection of organic herbal teas. Relaxing and healthful blends."
    },
    {
        id: 21,
        name: "Organic Soap Set",
        price: 1599.00,
        category: "Food & Beverages",
        location: "Natural Bath Co",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400",
        description: "Handmade organic soap set with natural ingredients. Gentle on skin, made locally."
    }
];

const CATEGORIES = [
    { name: "Food & Beverages", icon: "🍯", image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=300" },
    { name: "Home & Garden", icon: "🏠", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=300" },
    { name: "Fashion", icon: "👕", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300" },
    { name: "Art & Decor", icon: "🎨", image: "https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=300" },
    { name: "Sports & Fitness", icon: "⚽", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300" },
    { name: "Stationery", icon: "✏️", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300" }
];

// ========================================
// Cart Management
// ========================================

function getCart() {
    const cart = localStorage.getItem('nearnest_cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('nearnest_cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }

    saveCart(cart);
    showNotification('Product added to cart!', 'success');
}

function updateCartQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.productId === productId);

    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart(cart);
    }
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.productId !== productId);
    saveCart(cart);
    showNotification('Product removed from cart', 'success');
}

function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        const product = getProductById(item.productId);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
}

function clearCart() {
    localStorage.removeItem('nearnest_cart');
    updateCartBadge();
}

// ========================================
// Product Functions
// ========================================

function getProductById(id) {
    return MOCK_PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
    if (!category || category === 'all') return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter(p => p.category === category);
}

function getProductsByPriceRange(min, max) {
    return MOCK_PRODUCTS.filter(p => p.price >= min && p.price <= max);
}

function filterProducts(selectedCategories, minPrice, maxPrice) {
    let filtered = MOCK_PRODUCTS;

    // Filter by categories
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by price
    if (minPrice || maxPrice) {
        const min = parseFloat(minPrice) || 0;
        const max = parseFloat(maxPrice) || Infinity;
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    return filtered;
}

// ========================================
// UI Rendering Functions
// ========================================

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    if (hasHalfStar) {
        stars += '⭐';
    }

    return stars;
}

function formatPrice(price) {
    // Use Indian Rupee symbol
    return `₹${price.toLocaleString('en-IN')}`;
}

function renderProductCard(product) {
    return `
    <div class="card product-card">
      <img src="${product.image}" alt="${product.name}" class="card-image">
      <div class="card-content">
        <h3 class="card-title">${product.name}</h3>
        <div class="product-location">📍 ${product.location}</div>
        <div class="product-rating">${renderStars(product.rating)} (${product.rating})</div>
        <p class="card-description">${product.description.substring(0, 80)}...</p>
        <div class="card-footer">
          <span class="product-price">${formatPrice(product.price)}</span>
          <a href="product.html?id=${product.id}" class="btn btn-primary btn-sm">View Details</a>
        </div>
      </div>
    </div>
  `;
}

function renderCategoryCard(category) {
    return `
    <div class="card category-card" onclick="filterByCategory('${category.name}')">
      <img src="${category.image}" alt="${category.name}" class="card-image">
      <div class="card-content">
        <div class="category-icon">${category.icon}</div>
        <h3 class="card-title">${category.name}</h3>
      </div>
    </div>
  `;
}

// ========================================
// Utility Functions
// ========================================

function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        const count = getCartItemCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'block' : 'none';
    }
}

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// Page Initialization Functions
// ========================================

function initHomePage() {
    // Render featured categories
    const categoriesContainer = document.getElementById('categories-grid');
    if (categoriesContainer) {
        categoriesContainer.innerHTML = CATEGORIES.map(cat => renderCategoryCard(cat)).join('');
    }

    // Render featured products (first 6)
    const productsContainer = document.getElementById('featured-products');
    if (productsContainer) {
        const featuredProducts = MOCK_PRODUCTS.slice(0, 6);
        productsContainer.innerHTML = featuredProducts.map(p => renderProductCard(p)).join('');
    }
}

function initProductsPage() {
    let selectedCategories = [];

    // Check if there's a category filter from URL
    const categoryParam = getUrlParameter('category');
    if (categoryParam) {
        selectedCategories = [categoryParam];
    }

    // Render category checkboxes
    const categoryFilters = document.getElementById('category-filters');
    if (categoryFilters) {
        categoryFilters.innerHTML = CATEGORIES.map(cat => `
      <div class="filter-option">
        <input type="checkbox" id="cat-${cat.name}" value="${cat.name}" ${selectedCategories.includes(cat.name) ? 'checked' : ''}>
        <label for="cat-${cat.name}">${cat.name}</label>
      </div>
    `).join('');

        // Add event listeners to checkboxes
        const checkboxes = categoryFilters.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                selectedCategories = Array.from(checkboxes)
                    .filter(cb => cb.checked)
                    .map(cb => cb.value);
                applyFilters();
            });
        });
    }

    // Price filter
    const applyPriceBtn = document.getElementById('apply-price-filter');
    if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', applyFilters);
    }

    // Clear filters
    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            selectedCategories = [];
            const checkboxes = document.querySelectorAll('#category-filters input[type="checkbox"]');
            checkboxes.forEach(cb => cb.checked = false);
            document.getElementById('min-price').value = '';
            document.getElementById('max-price').value = '';
            renderProducts(MOCK_PRODUCTS);
        });
    }

    function applyFilters() {
        const minPrice = document.getElementById('min-price').value;
        const maxPrice = document.getElementById('max-price').value;
        const filtered = filterProducts(selectedCategories, minPrice, maxPrice);
        renderProducts(filtered);
    }

    function renderProducts(products) {
        const container = document.getElementById('products-grid');
        if (container) {
            if (products.length === 0) {
                container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-gray-500);">No products found matching your filters.</p>';
            } else {
                container.innerHTML = products.map(p => renderProductCard(p)).join('');
            }
        }
    }

    // Render initial products
    if (categoryParam) {
        const filtered = filterProducts(selectedCategories, '', '');
        renderProducts(filtered);
    } else {
        renderProducts(MOCK_PRODUCTS);
    }
}

function initProductPage() {
    const productId = getUrlParameter('id');

    if (!productId) {
        window.location.href = 'products.html';
        return;
    }

    const product = getProductById(productId);

    if (!product) {
        window.location.href = 'products.html';
        return;
    }

    // Render product details
    const productImage = document.getElementById('product-image');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productRating = document.getElementById('product-rating');
    const productLocation = document.getElementById('product-location');
    const productDescription = document.getElementById('product-description');

    if (productImage) productImage.src = product.image;
    if (productImage) productImage.alt = product.name;
    if (productName) productName.textContent = product.name;
    if (productPrice) productPrice.textContent = formatPrice(product.price);
    if (productRating) productRating.innerHTML = `${renderStars(product.rating)} (${product.rating})`;
    if (productLocation) productLocation.textContent = product.location;
    if (productDescription) productDescription.textContent = product.description;

    // Quantity controls
    let quantity = 1;
    const quantityDisplay = document.getElementById('quantity-display');
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    const addToCartBtn = document.getElementById('add-to-cart');

    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });
    }

    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            quantity++;
            quantityDisplay.textContent = quantity;
        });
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            addToCart(product.id, quantity);
        });
    }
}

function initCartPage() {
    renderCart();

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const cart = getCart();
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'error');
                return;
            }
            showNotification('Checkout feature coming soon! Thank you for shopping at NearNest.', 'success');
        });
    }
    // Place order handling: clear form and show THANK YOU
    const placeOrderBtn = document.getElementById('place-order-btn');
    const checkoutForm = document.getElementById('checkout-form');
    const orderMessage = document.getElementById('order-message');
    if (placeOrderBtn && checkoutForm) {
        placeOrderBtn.addEventListener('click', () => {
            const fullname = (checkoutForm.querySelector('[name="fullname"]') || {}).value || '';
            const address = (checkoutForm.querySelector('[name="address"]') || {}).value || '';
            const phone = (checkoutForm.querySelector('[name="phone"]') || {}).value || '';
            if (!fullname.trim() || !address.trim() || !phone.trim()) {
                showNotification('Please fill out all shipping fields', 'error');
                return;
            }

            checkoutForm.reset();

            showNotification('THANK YOU', 'success');
        });
    }
}

function renderCart() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummaryContainer = document.getElementById('cart-summary-details');
    const emptyCartContainer = document.getElementById('empty-cart');
    const cartContentContainer = document.getElementById('cart-content');

    if (cart.length === 0) {
        if (emptyCartContainer) emptyCartContainer.style.display = 'block';
        if (cartContentContainer) cartContentContainer.style.display = 'none';
        return;
    }

    if (emptyCartContainer) emptyCartContainer.style.display = 'none';
    if (cartContentContainer) cartContentContainer.style.display = 'grid';

    // Render cart items
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = cart.map(item => {
            const product = getProductById(item.productId);
            if (!product) return '';

            return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" class="cart-item-image">
          <div class="cart-item-details">
            <h3>${product.name}</h3>
            <div class="product-location">📍 ${product.location}</div>
            <div class="cart-item-price">${formatPrice(product.price)}</div>
          </div>
          <div class="cart-item-actions">
            <div class="cart-item-quantity">
              <button onclick="changeQuantity(${product.id}, -1)">-</button>
              <span>${item.quantity}</span>
              <button onclick="changeQuantity(${product.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeItem(${product.id})">Remove</button>
          </div>
        </div>
      `;
        }).join('');
    }

    // Render summary
    const subtotal = getCartTotal();
    const delivery = 80.00; // Flat delivery fee in Rupees
    const total = subtotal + delivery;

    if (cartSummaryContainer) {
        cartSummaryContainer.innerHTML = `
      <div class="summary-row">
        <span>Subtotal:</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      <div class="summary-row">
        <span>Delivery:</span>
        <span>${formatPrice(delivery)}</span>
      </div>
      <div class="summary-row total">
        <span>Total:</span>
        <span>${formatPrice(total)}</span>
      </div>
    `;
    }
}

// Global functions for cart operations (called from HTML)
function changeQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(i => i.productId === productId);

    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        saveCart(cart);
        renderCart();
    }
}

function removeItem(productId) {
    removeFromCart(productId);
    renderCart();
}

// Category filter from home page
function filterByCategory(categoryName) {
    window.location.href = `products.html?category=${encodeURIComponent(categoryName)}`;
}



// ========================================
// Mobile Menu Toggle
// ========================================

function toggleMobileMenu() {
    const navLinks = document.querySelector('.navbar-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// ========================================
// Feedback Form Management
// ========================================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function saveFeedback(email, message) {
    const feedback = {
        email: email,
        message: message,
        timestamp: new Date().toISOString(),
        id: Date.now()
    };

    const existingFeedback = JSON.parse(localStorage.getItem('nearnest_feedback') || '[]');
    existingFeedback.push(feedback);
    localStorage.setItem('nearnest_feedback', JSON.stringify(existingFeedback));
}

function downloadFeedback() {
    const feedback = JSON.parse(localStorage.getItem('nearnest_feedback') || '[]');

    if (feedback.length === 0) {
        showNotification('No feedback to download', 'error');
        return;
    }

    let content = 'NearNest Feedback Report\n';
    content += '=' .repeat(50) + '\n\n';

    feedback.forEach((item, index) => {
        content += `Feedback #${index + 1}\n`;
        content += `Date: ${new Date(item.timestamp).toLocaleString()}\n`;
        content += `Email: ${item.email}\n`;
        content += `Message:\n${item.message}\n`;
        content += '-' .repeat(30) + '\n\n';
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nearnest_feedback_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showNotification('Feedback downloaded successfully!', 'success');
}

function initFeedbackForm() {
    const feedbackForm = document.getElementById('feedback-form');
    const emailInput = document.getElementById('feedback-email');
    const emailError = document.getElementById('email-error');
    const downloadBtn = document.getElementById('download-feedback-btn');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = emailInput.value.trim();
            const message = document.getElementById('feedback-message').value.trim();

            // Reset error message
            emailError.textContent = '';

            // Validate email
            if (!validateEmail(email)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.focus();
                return;
            }

            // Save feedback
            saveFeedback(email, message);

            // Reset form
            feedbackForm.reset();

            // Show success message
            showNotification('Thank you for your feedback!', 'success');
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadFeedback);
    }
}

// ========================================
// Page Load Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize dark mode
    initDarkMode();
    
    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Update login status on all pages
    updateLoginStatus();
    
    // Update cart badge on all pages
    updateCartBadge();

    // Set active nav link
    setActiveNavLink();

    // Initialize page-specific functionality
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'index.html' || currentPage === '') {
        initHomePage();
        initFeedbackForm();
    } else if (currentPage === 'products.html') {
        initProductsPage();
    } else if (currentPage === 'product.html') {
        initProductPage();
    } else if (currentPage === 'cart.html') {
        initCartPage();
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
});
