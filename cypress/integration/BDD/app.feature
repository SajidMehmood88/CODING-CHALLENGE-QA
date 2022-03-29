Feature: End-to-end test

    Feature Description

    Scenario: Valid user registeration
    Given User on app page
    When User click on register button
    And User fill the username and password fields and click on register button
    Then User see dashboard and message display Welcome to your reading list 

    Scenario: User can't register with an already existing username
    Given User on app page
    When User click on register button 
    And User fill the username and password fields and click on register button
    Then User see error message

    Scenario: Checks the flow for adding a book to the personal reading list and verifies that it's working correctly
    Given User on app page
    When User click on login button
    And User fill the username and password fields and click on login button
    And User add book and go to reading list



 
