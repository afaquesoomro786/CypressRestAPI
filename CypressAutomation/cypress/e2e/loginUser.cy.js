describe('Login API Tests', () => {
    const apiUrl = '/login';
  
    it('should successfully log in a user', () => {
      cy.request('POST', apiUrl, {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token');
        expect(response.body.token).to.be.a('string');
      });
    });
  
    it('should validate response structure', () => {
      cy.request('POST', apiUrl, {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }).then((response) => {
        expect(response.body).to.have.all.keys('token');
      });
    });
  
    
    
  
    it('should handle missing password', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        failOnStatusCode: false,
        body: {
          email: 'eve.holt@reqres.in',
        },
      }).then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('error', 'Missing password');
      });
    });
  
    it('should handle invalid email', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        failOnStatusCode: false,
        body: {
          email: 'invalid-email',
          password: 'cityslicka',
        },
      }).then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('error', 'user not found');
      });
    });
  
   
  });