import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";

const loginPage = new LoginPage();
const homepage = new HomePage();

describe('User can login to GoIT page', () => {
    it('succesfully login user 1 to the GoIT page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
        cy.fixture('user1.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            loginPage.loginUser(useremail,password);

            cy.wait(1000);
            homepage.logout();
        });
    });
});

describe('User can login to GoIT page', () => {
    it('succesfully login user 2 to the GoIT page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
        cy.fixture('user2.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            loginPage.loginUser(useremail,password);
            
            cy.wait(1000);
            homepage.logout();
        });
    });
});