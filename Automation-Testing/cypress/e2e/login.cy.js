import LoginPage from '../support/pageObjects/loginPage';

describe('Login Page', () => {
  let username, password;

  beforeEach(() => {
    // Get credentials from env
    username = Cypress.env('username');
    password = Cypress.env('password');

    LoginPage.visit();
  });

  it('Login using valid credentials successfully', () => {
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.submit();

    // Expected result: RWA logo is visible
    LoginPage.getLogo().should('be.visible');
  });

  it('Failed to login using invalid password', () => {
    LoginPage.enterUsername(username);
    LoginPage.enterPassword('invalidPass123');
    LoginPage.submit();

    // Expected result: alert message is shown
    LoginPage.getAlertMessage()
      .should('be.visible')
      .and('contain.text', 'Username or password is invalid');
  });

  it('Input password less than 4 characters', () => {
    LoginPage.enterUsername(username);
    LoginPage.enterPassword('pas');
    cy.get('#username').click(); // trigger validation

    // Expected result: alert message is shown and submit button is disabled
    LoginPage.getSubmitButton()
      .should('exist')
      .and('be.disabled');

    LoginPage.getPasswordHelperText()
      .should('be.visible')
      .and('contain.text', 'Password must contain at least 4 characters');
  });
});