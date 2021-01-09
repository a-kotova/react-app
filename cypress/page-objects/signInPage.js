class SignIn {
  navigateToSignInPage() {
    cy.visit('/signing');
  }

  typeSignInEmail(email) {
    return cy.get('input[data-test="sign-in-email"]').type(email);
  }

  typeSignInPassword(password) {
    return cy.get('input[data-test="sign-in-password"]').type(password);
  }

  clickSignInCTA() {
    return cy.get('button').contains('Sign In').click();
  }

  typeSignUpName(name) {
    return cy.get('.sc-citwmv input[type="text"]').type(name);
  }

  typeSignUpEmail(email) {
    return cy.get('.sc-citwmv input[type="email"]').type(email);
  }

  typeSignUpPassword(password) {
    return cy.get('.sc-citwmv input[name="password"]').type(password);
  }

  confirmSignUpPassword(confirmPassword) {
    return cy.get('.sc-citwmv input[name="confirmPassword"]').type(confirmPassword);
  }

  clickSignUpCTA() {
    return cy.get('button').contains('Sign Up').click();
  }

  clickSignInWithGoogleCTA() {
    return cy.get('button').contains('Sign In with Google').click();
  }
}

export default new SignIn();
