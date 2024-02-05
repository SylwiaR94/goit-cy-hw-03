class HomePage {
    get burgerMenuButton() {
        return cy.get('button[data-element-type="burger-menu"]');
    }

    get logOutButton() {
        return cy.get('button:contains("Log out")');
    }

    logout() {
        this.burgerMenuButton.click();
        this.logOutButton.click();
    }

}

export default HomePage