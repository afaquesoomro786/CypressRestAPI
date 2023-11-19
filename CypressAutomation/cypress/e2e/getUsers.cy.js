describe('Testing Reqres.in REST API', () => {
  it('should list users', () => {
    cy.request('/users')
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.be.an('array');
      });
  });
});

describe('API Test Suite', () => {
  let apiResponse;

  before(() => {
    // Assuming you have the response data in a file named apiResponse.json
    cy.fixture('apiResponse').then((data) => {
      apiResponse = data;
    });
  });

  it('should have the correct page number', () => {
    expect(apiResponse.page).to.equal(2);
  });

  it('should have the correct number of items per page', () => {
    expect(apiResponse.per_page).to.equal(6);
  });

  it('should have the correct total number of items', () => {
    expect(apiResponse.total).to.equal(12);
  });

  it('should have the correct total number of pages', () => {
    expect(apiResponse.total_pages).to.equal(2);
  });

  it('should have data array with the correct number of items', () => {
    expect(apiResponse.data).to.have.lengthOf(6);
  });

  it('should have correct data for each user', () => {
    apiResponse.data.forEach((user, index) => {
      expect(user.id).to.equal(index + 7);
      expect(user.email).to.match(/^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/);
      expect(user.first_name).to.be.a('string');
      expect(user.last_name).to.be.a('string');
      expect(user.avatar).to.match(/^https:\/\/reqres\.in\/img\/faces\/\d+-image\.jpg$/);
    });
  });

  it('should have correct support information', () => {
    expect(apiResponse.support.url).to.equal('https://reqres.in/#support-heading');
    expect(apiResponse.support.text).to.equal('To keep ReqRes free, contributions towards server costs are appreciated!');
  });
});
