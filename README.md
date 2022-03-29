# Talentspace Coding Challenge - QA

## The Goal
An automation testing framework for some end-to-end test for web application using Cypress


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for testing purposes.
### Prerequisites
- NodeJS

### Installation
1. Clone the repo
```
git clone https://github.com/SajidMehmood88/CODING-CHALLENGE-QA.git
```
2. Install NPM packages
```
$ npm install cypress --save-dev
```
### Running the tests
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
- Running the with recorded dashboard and mochawesome report
```
$ npm run recordDashBoardTest
```

## Technical questions
Please additionally answer the following questions in a markdown file called `Answers to technical questions.md`.

1. How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.
1. What do you think is the most interesting trend in test automation?
Answer: Behaviour Driven Development (BDD) Frameworks- Cucumber, JBehave are some of the popular open source BDD frameworks available. The main reason of using a BDD framework is that it enables a Non-tech users like (BA, Managers etc) to understand what the automation scripts does. Because of the simplicity it offers to the end users, many businesses are moving towards BDD.
3. How would you approach adding automated testing to an existing (web) application with no existing E2E tests? Have you ever had to do this?

