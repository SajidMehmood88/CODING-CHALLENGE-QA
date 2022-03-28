class RegisterPage
{
    getUsernameField()
    {
        return cy.get('#username')
    }
    getPasswordField(){
        return cy.get('#password')
    }

    getRegisterButton(){
       return cy.get('.css-xascgg > :nth-child(3) > .css-hf8lg3')
    }

    getErrorMessage()
    {
        return cy.get('.css-1633ev8')
    }

    getAlert()
    {
       return cy.get('.css-tgv0nm')
    }
}

export default RegisterPage;
