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

## Modules & Components 
Folder PATH listing
Volume serial number is BCC2-09AC
D:.
│   constants.ts
│   favicon.ico
│   faviconAngular.ico
│   index.html
│   main.ts
│   project_structure.txt
│   styles.css
│   
├───app
│   │   app-routing.module.ts
│   │   app.component.css
│   │   app.component.html
│   │   app.component.spec.ts
│   │   app.component.ts
│   │   app.module.ts
│   │   
│   ├───auth
│   │   │   auth-routing.module.ts
│   │   │   auth.module.ts
│   │   │   auth.service.spec.ts
│   │   │   auth.service.ts
│   │   │   sign-out.service.spec.ts
│   │   │   sign-out.service.ts
│   │   │   
│   │   ├───sign-in
│   │   │       sign-in.component.css
│   │   │       sign-in.component.html
│   │   │       sign-in.component.spec.ts
│   │   │       sign-in.component.ts
│   │   │       
│   │   ├───sign-up
│   │   │       sign-up.component.css
│   │   │       sign-up.component.html
│   │   │       sign-up.component.spec.ts
│   │   │       sign-up.component.ts
│   │   │       
│   │   └───validators
│   │           email-validator.ts
│   │           password-match-validator.ts
│   │           
│   ├───core
│   │   │   core.module.ts
│   │   │   
│   │   ├───footer
│   │   │       footer.component.css
│   │   │       footer.component.html
│   │   │       footer.component.spec.ts
│   │   │       footer.component.ts
│   │   │       
│   │   ├───header
│   │   │       header.component.css
│   │   │       header.component.html
│   │   │       header.component.spec.ts
│   │   │       header.component.ts
│   │   │       
│   │   └───page-not-found
│   │           page-not-found.component.css
│   │           page-not-found.component.html
│   │           page-not-found.component.spec.ts
│   │           page-not-found.component.ts
│   │           
│   ├───feature
│   │   │   cart-data.service.spec.ts
│   │   │   cart-data.service.ts
│   │   │   feature-routing.module.ts
│   │   │   feature.module.ts
│   │   │   on-mouse-hover.directive.spec.ts
│   │   │   on-mouse-hover.directive.ts
│   │   │   order-data.service.spec.ts
│   │   │   order-data.service.ts
│   │   │   
│   │   ├───about
│   │   │       about.component.css
│   │   │       about.component.html
│   │   │       about.component.spec.ts
│   │   │       about.component.ts
│   │   │       
│   │   ├───cart
│   │   │       cart.component.css
│   │   │       cart.component.html
│   │   │       cart.component.spec.ts
│   │   │       cart.component.ts
│   │   │       
│   │   ├───catalog
│   │   │       catalog.component.css
│   │   │       catalog.component.html
│   │   │       catalog.component.spec.ts
│   │   │       catalog.component.ts
│   │   │       
│   │   ├───details
│   │   │       details.component.css
│   │   │       details.component.html
│   │   │       details.component.spec.ts
│   │   │       details.component.ts
│   │   │       
│   │   └───profile
│   │           profile.component.css
│   │           profile.component.html
│   │           profile.component.spec.ts
│   │           profile.component.ts
│   │           
│   ├───shared
│   │   │   shared.module.ts
│   │   │   
│   │   ├───guards
│   │   │       auth.guard.spec.ts
│   │   │       auth.guard.ts
│   │   │       not-auth.guard.spec.ts
│   │   │       not-auth.guard.ts
│   │   │       
│   │   ├───interceptors
│   │   │       api.interceptor.spec.ts
│   │   │       api.interceptor.ts
│   │   │       
│   │   ├───loader
│   │   │       loader.component.css
│   │   │       loader.component.html
│   │   │       loader.component.spec.ts
│   │   │       loader.component.ts
│   │   │       
│   │   ├───loader-small
│   │   │       loader-small.component.css
│   │   │       loader-small.component.html
│   │   │       loader-small.component.spec.ts
│   │   │       loader-small.component.ts
│   │   │       
│   │   ├───pipes
│   │   │       elapsed-time.pipe.spec.ts
│   │   │       elapsed-time.pipe.ts
│   │   │       
│   │   └───services
│   │           api.service.spec.ts
│   │           api.service.ts
│   │           global-error-handler.service.spec.ts
│   │           global-error-handler.service.ts
│   │           is-cart-empty.service.spec.ts
│   │           is-cart-empty.service.ts
│   │           is-user-logged-in.service.spec.ts
│   │           is-user-logged-in.service.ts
│   │           previous-url.service.spec.ts
│   │           previous-url.service.ts
│   │           utility.service.spec.ts
│   │           utility.service.ts
│   │           
│   └───types
│           card.ts
│           cardDetailed.ts
│           cardDetailedSpecs.ts
│           order.ts
│           orderItem.ts
│           user.ts
│           userAddress.ts
│           
├───assets
│       .gitkeep
│       
└───css
        layout.css
        reset.css
        responsive.css
        typography.css
        


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
