# License Plate Check

I have created a basic License Plate Check, just to view which car you are looking at based on the license plate.
This license plate input consists out of three DIV's (contenteditable), because of the shadow dom I couldn't get the
simple flexbox grow function not to work while with DIV's there isn't any problem with it.
The separated values are combined in the state tunnel of StencilJS, so it will be accessible all over the app. Next tot
this it make use of a Regex to check the pattern of the license plate, which also functions as a simple validation.

The app is based on the StencilJS starter app configuration.


## Getting Started

Just clone the repo and run:

### Install dependencies
npm i

### Run project
npm start

### Test project
npm test