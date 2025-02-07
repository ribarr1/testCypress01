describe('Users API', () => {
    it('should return a list of users', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/berry/1').then((response) => {
        expect(response.status).to.eq(200);
        //expect(response.body[0]).to.have.property('firmness'); 
      });
    });
  });