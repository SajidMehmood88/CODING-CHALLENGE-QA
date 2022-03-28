class FirstPage
{
    getLoginButton()
    {
        return cy.get('.css-1350wxy')
    }
    getRegisterButton(){
        return cy.get('.css-hf8lg3')
    }
}

export default FirstPage;
