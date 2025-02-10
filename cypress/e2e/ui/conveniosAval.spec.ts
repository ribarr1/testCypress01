describe('Convenios Aval process', () => {
    it('process convenios cancelling pasarela', () => {
      cy.visit('https://piloto.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/'); 
      cy.get('#search-input').type('Auteco Mobility Sas');
      cy.get('button.btn-primary').first().click({ force: true });
      
      //cy.url().should('include', 'logged-in-successfully/');
      cy.get('.title').should('contain.text', 'Auteco mobility sas');
      cy.contains('button', 'Pagar').click();

      cy.contains('.name_convenio', 'Auteco Mobility Sas').should('be.visible');
      cy.get('input[id="cedula o nit"]').type('123456789');
      cy.get('input[id="valor a pagar"]').type('235');
      cy.get('label.slider').click();
      cy.get('textarea#detallePago').type('Payment detail');
      cy.get('.checkbox-container input[type="checkbox"]').check();
      cy.contains('button', 'Pagar').click();

      cy.contains('button', 'Aceptar').click();
 
    });
  }); 