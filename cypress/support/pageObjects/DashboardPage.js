class DashboardPage
{
    getWelcomeText()
    {
        return cy.get('p')
    }
    getUsernameTextFromDashboard()
    {
        return cy.get('.css-k0qcqu')
    }
    getLogoutButton()
    {
        return cy.get('.css-18dcnxc')
    }
    getDiscover()
    {
        return cy.get(':nth-child(3) > .css-11gax2f')
    }
    getBookList()
    {
        return cy.get('li[aria-label]')
    }
    getAddButton()
    {
        return cy.get('button[aria-label]')
    }
    getReadingListButton()
        {
            return cy.get(':nth-child(1) > .css-11gax2f')
        }
    
}

export default DashboardPage;
