describe('Login Page', () => {
    it('log in successfully', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/'); 
      cy.get('#username').type('student');
      cy.get('#password').type('Password123');
      cy.get('#submit').click();
      //cy.url().should('include', 'logged-in-successfully/');
      cy.get('h1.post-title', { timeout: 5000 }).should('be.visible').and('have.text', 'Logged In Successfully'); 
    });
  });