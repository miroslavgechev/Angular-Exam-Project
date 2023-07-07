# angular-exam-project
Angular Project

# Main Requirements:
* Backend service - Firebase;
* At least 3 different dynamic pages (pages like about, contacts, login, register do not count towards that figure). If your project doesn’t cover this condition you will not be graded.
* Use Angular for the client-side
* Communicate to a remote service (via REST, sockets, GraphQL, or a similar client-server technique).
* Implement authentication
* Use a source control system like GitHub, Bitbucket etc. Commit inside the repository for at least 3 days.
* Apply error handling and data validation to avoid crashes when invalid data is entered
* Brief documentation on the project and project architecture (as .md file)
* Good usability. Good UI and UX. (NGBootstrap, MDL, CSS Grids or another method of your choice)

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
Bidding system for products

## Public Pages
* Home -> Product Page
    - top 3 offers - based on number of bids

* Login 
    - email
    - password
    
* Register
    - email
    - password
    - repeat password

## Private Pages

* All Bids - Dynamic Page #1 
    - All bids;
    - excl. bids user is bidding on;
    - Sort by category;

* Placed Bids - Dynamic Page #2
    - Order by:
        - Time left of offer;
        - Current Highest Offer - is best offer user's or 3rd party;

* Place Bid Page - Dynamic #3
    - Field of information;
    - Current Best Offer;
    - Label showing your credit;
    - Field for bid;
    - Place bid;

* Create Offer Page:
    - Fields:
        - What are you selling;
        - Category /options list/;
        - Add Photos /links to dropbox accounts/;
        - Description;
        - Location;
        - Price - in EUR;
        - Offer duration;

* About Page

* Contacts Page

* User Settings Page
    - Change passwords;
    - Add Funds /in a field -> future integration with payment system/ 

* Logout Btn / Page

OPTIONAL:
* Bids Statistics - Dynamic Page #4:
    - Won bids;
    - Lost bids;
    - Some chart - won vs lost;