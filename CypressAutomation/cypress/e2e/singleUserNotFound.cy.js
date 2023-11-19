describe('Testing Single User API', () => {
  it('should handle a 404 response', () => {
    cy.request({
      url: '/users/23',
      failOnStatusCode: false, // Allow non-2xx status codes
    }).then((response) => {
      // Verify the status code is 404
      expect(response.status).to.equal(404);

      // For example, check that the response body is empty
      expect(response.body).to.deep.equal({});
    });
  });
});