# Multi Step Survey Challenge

## Installation

Clone the project and install dependencies. This project uses node version `v16.15.0`.

````
  $ git clone git@github.com:bergmannlucas/multi-step-survey-module.git
  $ cd multi-step-survey-module
  $ npm ci
````

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## About the project

The purpose of this challenge is to create a multi-step survey module that can be integrated into any website. This survey contains four steps, and there are some rules that must be respected in order to have a good user experience. The rules are:
- The survey should load in a pop-up, 2 seconds after the page has loaded.
- The survey should contain 4 steps and have 'Next' and 'Previous' buttons on the steps which
need them.
- The survey should have a 'Submit' button on the last step, which on click should set the survey
as submitted and close the popup.
- The survey steps should contain the following steps (note that some fields are required):

| Step    | Description      | Fields                                                         | required |
|---------|------------------|----------------------------------------------------------------|----------|
| 1       | Identity         | Name (input), Email (input)                                    |    no    |
| 2       | Details          | Age (select), Gender (radio input)                             |    yes   |
| 3       | Favorites        | Favorite Book (input), Favorite Colors (multi-input checkbox)  |    yes   |
| 4       | Summary          | Table with all of the data collected in the survey             |    yes   |

### Also, some other bonus rules:
- If the browser tab was closed before the survey was submitted and subsequently re-opened,
the script should re-open the survey and continue from where the user left of.
- The survey should not re-open if it was already submitted.
- The survey should work by including a single JS file in any HTML.

## Solution

Due to the size of the project being considerably small, I didn't use any libraries to manage the application's state. To persist the changes made in the survey, I used the browser's local storage.
There are 3 keys created in localStorage:
- SURVEY-MODULE_survey: responsible for storing the survey data
- SURVEY-MODULE_lastStep: responsible for saving the last step accessed by the user, so that if the page is accessed again, it will open in this step.
- SURVEY-MODULE_submitted: responsible for controlling whether the survey has already been submitted or not.

To restart the survey if it has been answered, just change the submitted key to false and it will render again.

## Improvements for the future

- Create a responsive interface
- Use redux to manage state and make the application scalable
- Apply accessibility improvements