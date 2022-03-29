# Talentspace Coding Challenge - QA

## The Goal
An automation testing framework for some end-to-end test for web application using Cypress based on page object model.


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for testing purposes.
### Prerequisites
- NodeJS

### Installation
1. Download or clone the repo into your local machine.
```
https://github.com/SajidMehmood88/CODING-CHALLENGE-QA.git
```
OR
```
git clone https://github.com/SajidMehmood88/CODING-CHALLENGE-QA.git
```
2. Install NPM packages
```
$ npm install cypress --save-dev
```
### Running the tests
Navigate to the folder where your project is located. Run below commands in Terminal.

- Open Cypress:
```
$ npm run cy:open
```
- Running the tests in headed mode
```
$ npm run headTest
```
- Running the tests in headless mode with chrome
```
$ npm run chromeTest
```
- Running the tests dashboard feature with Video recording & Screenshots and mochawesome report
```
$ npm run recordDashBoardTest
```

## Built With

* [Cucumber](https://github.com/cucumber) - BDD Testing
* [Mochawesome](https://www.npmjs.com/package/mochawesome-report-generator) - Report generator
