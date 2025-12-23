# NearNest - Local Sellers E-commerce Platform

![NearNest Logo](assets/images/logo.png)

## 🌟 Discover What's Local

NearNest is a simple, elegant e-commerce website that connects you with local sellers in your community. Built with pure HTML, CSS, and vanilla JavaScript.

## ✨ Features

- 🏠 **Home Page** - Hero section with featured categories and products
- 📦 **Product Catalog** - Browse 20+ products from local sellers
- 🔍 **Smart Filtering** - Filter by category and price range
- 🛒 **Shopping Cart** - Full cart management with localStorage persistence
- 📱 **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- 🎨 **Modern Design** - Clean UI with smooth animations

## 🚀 Quick Start

1. **Open the website**
   ```
   Simply open index.html in your web browser
   ```

## 📁 Project Structure

```
nearnest/
├── index.html          # Home page
├── products.html       # Product listing page
├── product.html        # Product detail page
├── cart.html          # Shopping cart
├── css/
│   └── styles.css     # Complete styling (1000+ lines)
├── js/
│   └── script.js      # All functionality (600+ lines)
└── assets/
    └── images/
        └── logo.png   # NearNest logo
```

## 🎨 Design

**Brand Colors:**
- Primary: #2F855A (Green)
- Secondary: #EDF7F2 (Light Green)
- Accent: #F6AD55 (Orange)

**Typography:**
- Modern sans-serif stack with Inter/Poppins fallbacks

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid
- **Vanilla JavaScript** - No frameworks, no libraries
- **localStorage** - Client-side data persistence

## 📦 Features in Detail

### Home Page
- Sticky navigation with cart badge
- Hero section with gradient
- 6 featured categories
- Featured products showcase
- Why Choose NearNest section

### Products Page
- Dynamic product rendering
- Category filters (checkboxes)
- Price range filtering
- Responsive product grid
- 20 mock products

### Product Detail Page
- URL parameter-based routing
- Image and full description
- Seller information
- Quantity selector
- Add to cart functionality

### Shopping Cart
- View all cart items
- Adjust quantities
- Remove items
- Price calculations (subtotal + delivery)
- Empty cart state
- Persist across sessions
