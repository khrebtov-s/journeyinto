# journeyinto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# JOURNEY INTO RELATED NOTES

- Serve with live apis:
    **To serve using the stage api: `ng serve -o -c stage --host 0.0.0.0`**  
    **To serve using the dev api: `ng serve -o -c dev --host 0.0.0.0`**  

- The project makes use of Redux. The store is located in the `/src/app/store` folder. So when we make calls to the api we despatch actions from the components and the store handles them. We then subscribe to the various properties of the state we need to in order to manage the display of the data. 

- The services folder contains all of the api endpoints, which are used exclusively by the store, in the *.effects.ts* files. It also contains classes used as utils functions, sunch as the AudioRecordingService and the SpinnerOverlayService. 

- There is also a folder that contains helper functions, such as the function to reset a form.

