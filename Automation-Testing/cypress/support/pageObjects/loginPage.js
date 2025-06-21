class LoginPage {
  visit() {
    cy.visit('/signin');
  }

  enterUsername(username) {
    cy.get('#username').type(username);
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  getAlertMessage() {
    return cy.get('.MuiAlert-message');
  }

  getPasswordHelperText() {
    return cy.get('#password-helper-text');
  }

  getSubmitButton() {
    return cy.get('button[type="submit"]');
  }

  getLogo() {
    return cy.get('svg.NavBar-logo');
  }
}

export default new LoginPage();
