# Project Name
#CuratedPurifiers Store

## Description

#CuratedPurifiers is an online store that offers a curated range of indoor air purifiers to enhance the indoor air quality and provide a healthy living environment. The platform allows users to signuo and signin, providing a personalized shopping experience. Users can browse through the curated collection of purifiers, view detailed product information, add items to their cart, checkout, and see placed orders.

## Features

- User Authentication: Registration and login functionality for personalized access to the store.
- Product Catalog: A well-curated selection of indoor air purifiers.
- Product Details: Detailed information and specifications and image for each purifier.
- Shopping Cart: Users can add multiple items to their cart and review their selections before checkout.
- Checkout Process: dummy checkout process, ready made for integration with a payment gateway.
- Order History: Users can view a list of all their placed orders with order details and statuses.

## Screenshots

(Screenshots - to add)

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `ng serve` for a dev server.
4. Navigate to `http://localhost:4200/` in your browser.

## Technologies Used
- Angular 16
- TypeScript
- HTML/CSS
- Firebase Realtime Database (with REST API)
- Third-party librarires

## Code Structure

Core Module
|__ Header Component
|__ Footer Component
|__ PageNotFound Component

app/
The app directory contains the main components and features of the application.

auth/: Contains authentication-related components and logic.

sign-in/: Contains the sign-in component and related files.
sign-up/: Contains the sign-up component and related files.
validators/: Contains custom form validators.
core/: Holds the core components that are used throughout the application.

footer/: Contains the footer component.
header/: Contains the header component.
page-not-found/: Contains the page-not-found component for handling 404 errors.
feature/: Contains different features of the application.

about/: Contains the about feature component and files.
cart/: Contains the cart feature component and files.
catalog/: Contains the catalog feature component and files.
details/: Contains the details feature component and files.
profile/: Contains the profile feature component and files.
shared/: Contains shared modules, services, and utilities.

guards/: Contains route guards for protecting routes.
interceptors/: Contains HTTP interceptors for handling requests and responses.
loader/: Contains the loader component for displaying loading indicators.
loader-small/: Contains a smaller version of the loader component.
pipes/: Contains custom pipes for data transformation.
services/: Contains shared services used across different components.
types/: Contains TypeScript type definitions and interfaces.

assets/
The assets directory holds static assets like images, fonts, etc. (Note: This folder is empty as indicated by .gitkeep.)

css/
The css directory contains global CSS files for styling the application.

The project structure provides a clear organization of components, services, and utilities into their respective directories. It also includes specific directories for authentication, core components, features, shared functionalities, and TypeScript types. The assets and css directories contain global resources used throughout the application.

# Bonus Requirements:
* Deploy the application in a cloud environment
* Use a file storage cloud API, e.g. Dropbox, Google Drive or other for storing the files.
* Use of features of HTML 5 like Geolocation, SVG, Canvas, etc.
* Use Angular Animations somewhere in your application
* Write unit tests for your components
* Use RxJS powered state management for Angular applications, inspired by Redux (ngRx store)
* Anything that is not described in the assignment is a bonus if it has some practical use.

# Applicaton

## Application Type
Store for Curated Air Purifiers

## Public Pages
* Home - Catalog Page - Dynamic #1
    - All Products;
    - Product Name;
    - Product Price;

* Login
    - email
    - password
    
* Register
    - email
    - password
    - repeat password

* About Page

## Private Pages

* Product Details Page - Dynamic #2
    - Product Name;
    - Product Description;
    - Product Price;
    - Add-to-cart Button;

* Shopping Cart - Dynamic #3
    - All added to cart products;
    - Product Name (with link to product);
    - Product Q-ty (update field);
    - Total Price;
    - Del;

* Profile Page - Dynamic #4
    - add delivery address;
    - add funds;
    - order history
