import SignInPage from '../../../page-objects/signInPage';
import credentials from '../../../fixtures/credentials.json';
import { errorMessages } from '../../../fixtures/informationalMessages';

describe('Sign In', () => {
  beforeEach(() => {
    SignInPage.open('/signing');
  });

  it('TA-1: User is able to sign in with valid credentials', () => {
    SignInPage.signIn(credentials.email.valid, credentials.password.valid);
    SignInPage.signOutIcon.should('be.visible');
  });

  it('TA-2: User unable to sign in with a wrong password', () => {
    SignInPage.signIn(credentials.email.valid, credentials.password.invalid);
    SignInPage.signInError.should('contain', errorMessages.invalidOrMissingPassword);
  });

  it('TA-3: User unable to sign in with an unregistered email', () => {
    SignInPage.signIn(credentials.email.unregistered, credentials.password.valid);
    SignInPage.signInError.should('contain', errorMessages.unregisteredEmail);
  });

  it('TA-4: User unable to sign in with missing email', () => {
    SignInPage.signIn(' ', credentials.password.valid);
    SignInPage.signInIcon.should('be.visible');
    SignInPage.emptySignInEmailField.should('have.length', 1);
    SignInPage.emptySignInEmailField.then(($input) => {
      expect($input[0].validationMessage).to.eq(errorMessages.emptyEmailOrPasswordField);
    });
  });

  it('TA-5: User unable to sign in with missing password', () => {
    SignInPage.enterSignInEmail(credentials.email.valid);
    SignInPage.submitSignInForm();
    SignInPage.signInIcon.should('be.visible');
    SignInPage.emptySignInPasswordField.should('have.length', 1);
    SignInPage.emptySignInPasswordField.then(($input) => {
      expect($input[0].validationMessage).to.eq(errorMessages.emptyEmailOrPasswordField);
    });
  });

  it('TA-7: User is able to Sign Out', () => {
    SignInPage.signIn(credentials.email.valid, credentials.password.valid);
    SignInPage.signOut();
    SignInPage.signInIcon.should('be.visible');
  });
});
