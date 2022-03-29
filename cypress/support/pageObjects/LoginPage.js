class LoginPage
{
    getUsernameField()
    {
        return cy.get('#username')
    }
    getPasswordField(){
        return cy.get('#password')
    }

    getLoginButton(){
       return cy.get('.css-xascgg > :nth-child(3) > .css-1350wxy')
    }
}

export default LoginPage;
