/// <reference types="Cypress" />
import FirstPage from '../../../support/pageObjects/FirstPage'
import RegisterPage from '../../../support/pageObjects/RegisterPage'
import DashboardPage from '../../../support/pageObjects/DashboardPage'
import LoginPage from '../../../support/pageObjects/LoginPage'


import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";


const firstPage = new FirstPage()
const registerPage = new RegisterPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

let name
Given('User on app page',()=>
{
    cy.visit(Cypress.env('url'))
    cy.wait(1000)
})
When('User click on register button',()=>
{
    firstPage.getRegisterButton().click()
})

    //When I fill the register fields
    And('User fill the username and password fields and click on register button',function()
    {
        
        registerPage.getUsernameField().type(this.data.username)
        registerPage.getPasswordField().type(this.data.password)
        registerPage.getRegisterButton().click()
    })

    Then('User see dashboard and message display Welcome to your reading list',function()
{
    dashboardPage.getWelcomeText().contains('Welcome to your reading list')
    dashboardPage.getUsernameTextFromDashboard().contains(this.data.username)
    dashboardPage.getLogoutButton().click()
})

Then('User see error message',function(done){
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include(this.data.alreadyRegisteredErrorMessage)
        return false
      })
    registerPage.getErrorMessage().contains(this.data.alreadyRegisteredErrorMessage+'"'+this.data.username+'"')
})

When('Click on book',function(){
})

When('User click on login button',function(){
    firstPage.getLoginButton().click()
})

And('User fill the username and password fields and click on login button',function(){
    loginPage.getUsernameField().type(this.data.username)
    loginPage.getPasswordField().type(this.data.password)
    loginPage.getLoginButton().click()
})

And('User add book and go to reading list',function(){
    dashboardPage.getDiscover().click()
    cy.wait(2000)
    dashboardPage.getBookList().eq(0).find('button[aria-label]').click()
    cy.wait(2000)
    dashboardPage.getReadingListButton().click()
})

