import BasePage from './basePage';

class SignInPage extends BasePage {

  get signInEmailField() {
    return cy.get('input[data-test="sign-in-email"]');
  }

  get signInPasswordField() {
    return cy.get('input[data-test="sign-in-password"]');
  }

  get signInCTA() {
    return cy.get('button').contains('Sign In');
  }

  get signUpNameField() {
    return cy.get('.sc-citwmv input[type="text"]');
  }

  get signUpEmailField() {
    return cy.get('.sc-citwmv input[type="email"]');
  }

  get signUpPassword() {
    return cy.get('.sc-citwmv input[name="password"]');
  }

  get confirmSignUpPassword() {
    return cy.get('.sc-citwmv input[name="confirmPassword"]');
  }

  get signUpCTA() {
    return cy.get('button').contains('Sign Up');
  }

  get signInError() {
    return cy.get('[data-test="sign-in-error"]');
  }

  get emptySignInEmailField() {
    return cy.get('input[data-test="sign-in-email"]:invalid');
  }

  get emptySignInPasswordField() {
    return cy.get('input[data-test="sign-in-password"]:invalid');
  }

  enterSignInEmail(email) {
    this.signInEmailField.type(email);
  }

  enterSignInPassword(password) {
    this.signInPasswordField.type(password);
  }

  submitSignInForm() {
    this.signInCTA.click();
  }

  enterSignUpName(name) {
    this.signUpNameField.type(name);
  }

  enterSignUpEmail(email) {
    this.signUpEmailField.type(email);
  }

  enterSignUpPassword(password) {
    this.signUpPassword.type(password);
  }

  enterConfirmSignUpPassword(confirmPassword) {
    this.confirmSignUpPassword.type(confirmPassword);
  }

  submitSignUpForm() {
    this.signUpCTA.click();
  }

  signIn(email, password) {
    this.enterSignInEmail(email);
    this.enterSignInPassword(password);
    this.submitSignInForm();
  }
}

export default new SignInPage();
