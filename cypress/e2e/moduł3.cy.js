Cypress.Commands.add("loginUser", (email, password) => {
    cy.get("#user_email").type(email);
    cy.get("#user_password").type(password);
    cy.get('button[type="submit"]').click();
  });

  describe('Check Login', () => {
    beforeEach('go to page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
    });

    it('succesfully login user 1 to the GoIT page', () => {
        cy.fixture('user1.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            cy.loginUser(useremail,password);

            cy.get('button[data-element-type="burger-menu"]').click();
            cy.get(':nth-child(8) > .next-bve2vl').click();
        })

    });

    it('succesfully login user 2 to the GoIT page', () => {
        cy.fixture('user2.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            cy.loginUser(useremail,password);
            cy.get('button[data-element-type="burger-menu"]').click();
            cy.get(':nth-child(8) > .next-bve2vl').click();
        });
    });
});