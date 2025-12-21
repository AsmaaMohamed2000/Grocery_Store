# Organic Grocery Store - React Project

## Project Overview
This is a modern *React* e-commerce application for an *organic grocery store*.  
Users can browse products, filter by categories, add items to the cart, manage their favorites, and handle authentication using *Firebase*.

---

## Features
- *Responsive Layout:* Optimized for mobile, tablet, and desktop.
- *Category Browsing:* Products can be filtered by Fruits, Vegetables, Dairy, Meat, and Seafood.
- *Product Listing:* Dynamic rendering of products with "View More / View Less".
- *Shopping Cart:* Add, remove, and adjust quantity with total price calculation.
- *Favorites List:* Add/remove products from favorites.
- *User Authentication:* Sign up, log in, password reset using Firebase.
- *Notifications:* SweetAlert2  notifications for actions.
- *Interactive UI:* Buttons, hover effects, and animations for better UX.

---

## Technologies
- *Frontend:* React.js, React Router, Tailwind CSS
- *State Management:* React Context + useReducer for Cart & Favorites
- *Authentication:* Firebase Auth
- *Icons:* React Icons 
- *Alerts:* SweetAlert2 

---

## Components Description

### 1. *Navbar*
- *Navigation Links:* Uses NavLink  from react-router-dom to navigate between pages  *Home, **About Us, **Process, **Contact*.
- *Search Bar:* Allows users to search products dynamically.
- *Authentication Buttons:*  
  - Shows *Login / SignUp* when logged out.  
  - Shows *Logout* when logged in.  
- *User Icons (Cart & Wishlist):*  
  - Cart icon shows number of items; clicking navigates to *Cart Page*.  
  - Wishlist icon shows number of favorites; clicking navigates to *Favorites Page*.  
- *Responsive Design:* Collapsible menu for mobile, icons adapt to screen size.

### 2. *Hero*
- Landing section with call-to-action "Shop Now".
- Includes promotional banners and main images.

### 3. *Category*
- Displays product categories (Fruits, Vegetables, Dairy, Meat & Seafood).
- Each category has an image, description, and "See All" link.

### 4. *Value*
- Highlights store values like *Trust, **Food Safety, **Always Fresh, and **100% Organic*.
- Uses icons and promotional images for visual appeal.

### 5. *Products*
- Lists all products dynamically from productList.
- Filter products by categories or show all.
- "View All" / "View Less" button to control display count.
- Uses *Cards* component for individual product display.

### 6. *Cards*
- Individual product card with:
  - Image, title, price
  - Add to Cart / Remove from Cart
  - Quantity adjustment (plus/minus)
  - Like / Unlike (favorites)
- Alerts users for actions using SweetAlert2.

### 7. *Cart*
- Displays all products in the cart.
- Increase/decrease quantity.
- Remove items from cart.
- Calculate total price with a popup modal.
### 8. *Favorites*
- Displays all favorite products.
- Remove items from favorites list.

### 9. *Authentication*
- Firebase Auth integration
- Pages: *SignUp, **Login,Logout, **Reset Password*
- Error handling for invalid inputs, weak password, or email already in use.

### 10. *CustomerReviews*
- Shows user testimonials and reviews using **Swiper.js**.
- Designed to improve trust and credibility.

### 11. *Contact*
- Contact form using react-hook-form and *EmailJS*.
- Fields: Name, Email, Phone (optional), Message.
- Displays status messages: sending, success, or failure.
- Contact info section: Email, Phone, Address.
- Social media links with icons

### 12. *About Us*
- Information about store mission, values, and services.
- Includes background image and "Learn More" button linking to *Process* page.

### 13. *Process*
- Explains store workflow: Sourcing → Manufacturing → Quality Control → Logistics.
- Each step has an icon and description.
- Visually styled cards with hover effects.

### 14. *Footer*
- Company info, navigation links, support links, newsletter subscription.


## How to Run

1. Clone the repository:  
```bash
git clone https://github.com/AsmaaMohamed2000/Grocery_Store.git

## Notes
- Firebase configuration is required for authentication.

- EmailJS setup is required for contact form functionality.

- Ensure React Router is properly configured for multi-page navigation
