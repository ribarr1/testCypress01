describe('Convenios Aval process', () => {
    it('process convenios cancelling pasarela', () => {
      cy.visit('https://piloto.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/'); 
      cy.get('#search-input').type('Auteco Mobility Sas');
      cy.get('.btn-primary').click();
      
      //cy.url().should('include', 'logged-in-successfully/');
      cy.get('name_convenio', { timeout: 5000 }).should('be.visible').and('have.text', 'Auteco Mobility Sas'); 
    });
  });