# MphasisAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

# Requirements
• Build a single page application with a sign-up form.
• The form should allow users to enter first name, last name, email, and password.
• All fields are required.
• The full name of the user should be shown in the UI outside of the form. It should use a single variable that is 
updated whenever the input values are changed.
• Password validation:
o Should be a minimum of eight characters
o Should contain lower and uppercase letters
o Should not contain the user's first or last name
• Email should be validated but there are various ways of accomplishing this. So, show us what you consider as 
a proper email validation.
• When submitting the form, two requests must be made:
o First request: HTTP GET to https://jsonplaceholder.typicode.com/photos/{last_name_length}
▪ Example request in case of name "Thomas Shelby": GET /photos/6
▪ The “thumbnailUrl” parameter from the response needs to be passed to the second request
o Second request: HTTP POST to https://jsonplaceholder.typicode.com/users
▪ The POST body includes the form values and the image url from the previous request
▪ Example request body:
 { 
 "firstName": "Thomas", 
 "lastName": "Shelby", 
 "email": "thomas@shelby.co.uk",
 "thumbnailUrl": "url-from-request-1"
 }

## Development server
Clone the repo and install node module using `npm install`.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## SCSS Library used

Bootstrap is used as scss library and all the bootstrap classed are used to implement the style.
