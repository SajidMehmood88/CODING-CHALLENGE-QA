import "cypress-localstorage-commands"

beforeEach(()=>
{
    cy.restoreLocalStorage()
    cy.fixture('example').then(function(data)
    {
this.data=data
    })
});

afterEach(() => {
    cy.saveLocalStorage();
  });