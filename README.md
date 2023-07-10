# MphasisAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.<br>

# Requirements
• Build a single page application with a sign-up form.<br>
• The form should allow users to enter first name, last name, email, and password.<br>
• All fields are required.<br>
• The full name of the user should be shown in the UI outside of the form. It should use a single variable that is 
updated whenever the input values are changed.<br>
• Password validation:<br>
o Should be a minimum of eight characters<br>
o Should contain lower and uppercase letters<br>
o Should not contain the user's first or last name<br>
• Email should be validated but there are various ways of accomplishing this. So, show us what you consider as 
a proper email validation.<br>
• When submitting the form, two requests must be made:<br>
o First request: HTTP GET to https://jsonplaceholder.typicode.com/photos/{last_name_length}<br>
▪ Example request in case of name "Thomas Shelby": GET /photos/6<br>
▪ The “thumbnailUrl” parameter from the response needs to be passed to the second request<br>
o Second request: HTTP POST to https://jsonplaceholder.typicode.com/users<br>
▪ The POST body includes the form values and the image url from the previous request<br>
▪ Example request body:<br>
 { <br>
 "firstName": "Thomas", <br>
 "lastName": "Shelby", <br>
 "email": "thomas@shelby.co.uk",<br>
 "thumbnailUrl": "url-from-request-1"<br>
 }<br>

## Development server
Clone the repo and install node module using `npm install`.<br>
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.<br>

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## SCSS Library used

Bootstrap is used as scss library and all the bootstrap classes are used to implement the style.
