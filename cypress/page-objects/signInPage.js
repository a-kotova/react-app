import { BasePage } from './basePage';

class SignIn extends BasePage {

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

  get signInWithGoogle() {
    return cy.get('button').contains('Sign In with Google');
  }

  get signUpCTA() {
    return cy.get('button').contains('Sign Up');
  }

  navigateToSignInPage() {
    cy.visit('/signing');
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

  startGoogleSignIn() {
    this.signInWithGoogle.click();
  }
}

export default new SignIn();
