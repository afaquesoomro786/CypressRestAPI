describe('Testing Single User', () => {
    it('should show single user', () => {
      cy.request('/users/2')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.be.an('object');;
        });
    });
  });

describe('Single User Test', () => {
    let apiResponseSingleUser;
  
    before(() => {
      // Assuming you have the response data in a file named apiResponseSingleUser.json
      cy.fixture('apiResponseSingleUser').then((data) => {
        apiResponseSingleUser = data;
      });
    });
  
    it('should have correct data for the user', () => {
      const user = apiResponseSingleUser.data;
  
      // Check if the 'id' property is present and is a number
      expect(user.id).to.exist.and.to.be.a('number');
  
      // Check if the 'email' property is present and is a string
      expect(user.email).to.exist.and.to.be.a('string');
  
      // Check if the 'first_name' property is present and is a string
      expect(user.first_name).to.exist.and.to.be.a('string');
  
      // Check if the 'last_name' property is present and is a string
      expect(user.last_name).to.exist.and.to.be.a('string');
  
      // Check if the 'avatar' property is present and is a string with a specific format
      expect(user.avatar).to.exist.and.to.be.a('string').and.to.match(/^https:\/\/reqres\.in\/img\/faces\/\d+-image\.jpg$/);
    });
  
    it('should have correct support information', () => {
      const support = apiResponseSingleUser.support;
  
      // Check if the 'url' property is present and is a string
      expect(support.url).to.exist.and.to.be.a('string');
  
      // Check if the 'text' property is present and is a string
      expect(support.text).to.exist.and.to.be.a('string');
    });
  });
  