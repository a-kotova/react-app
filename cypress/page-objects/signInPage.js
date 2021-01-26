import { BasePage } from './basePage';

class SignIn extends BasePage {

  navigateToSignInPage() {
    cy.visit('/signing');
  }

  get signInEmailField() {
    return cy.get('input[data-test="sign-in-email"]');
  }

  enterSignInEmail(email) {
    this.signInEmailField.type(email);
  }

  get signInPasswordField() {
    return cy.get('input[data-test="sign-in-password"]');
  }

  enterSignInPassword(password) {
    this.signInPasswordField.type(password);
  }

  get signInCTA() {
    return cy.get('button').contains('Sign In');
  }

  submitSignInForm() {
    this.signInCTA.click();
  }

  get signUpNameField() {
    return cy.get('.sc-citwmv input[type="text"]');
  }

  enterSignUpName(name) {
    this.signUpNameField.type(name);
  }

  get signUpEmailField() {
    return cy.get('.sc-citwmv input[type="email"]');
  }

  enterSignUpEmail(email) {
    this.signUpEmailField.type(email);
  }

  get signUpPassword() {
    return cy.get('.sc-citwmv input[name="password"]');
  }

  enterSignUpPassword(password) {
    this.signUpPassword.type(password);
  }

  get confirmSignUpPassword() {
    return cy.get('.sc-citwmv input[name="confirmPassword"]');
  }

  enterConfirmSignUpPassword(confirmPassword) {
    this.confirmSignUpPassword.type(confirmPassword);
  }

  get signUpCTA() {
    return cy.get('button').contains('Sign Up');
  }

  submitSignUpForm() {
    this.signUpCTA.click();
  }

  get signInWithGoogle() {
    return cy.get('button').contains('Sign In with Google');
  }

  startGoogleSignIn() {
    this.signInWithGoogle.click();
  }
}

export default new SignIn();
