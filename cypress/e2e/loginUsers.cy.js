Cypress.Commands.add("loginUser", (email, password) => {
    cy.get("#user_email").type(email);
    cy.get("#user_password").type(password);
    cy.get('button[type="submit"]').click();
  });

  describe('User can login to GoIT page', () => {
    beforeEach('go to page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
    });
    it('succesfully login user 1 to the GoIT page', () => {
        cy.fixture('user1.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            cy.loginUser(useremail, password);
            });
    });

    it('succesfully login user 2 to the GoIT page', () => {
        cy.fixture('user2.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            cy.loginUser(useremail, password);
            });
    });
});