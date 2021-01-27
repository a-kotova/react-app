import SignIn from '../../../page-objects/signInPage';
import credentials from '../../../fixtures/credentials.json';

describe('Sign In', () => {

  it('TA-1: User is able to sign in with valid credentials', () => {
    SignIn.open('/signing');
    SignIn.enterSignInEmail(credentials.emailValid);
    SignIn.enterSignInPassword(credentials.passwordValid);
    SignIn.submitSignInForm();
    SignIn.signOutIcon.should('be.visible');
  });

  it('TA-2: User unable to sign in with a wrong password', () => {
    SignIn.open('/signing');
    SignIn.enterSignInEmail(credentials.emailValid);
    SignIn.enterSignInPassword(credentials.passwordInvalid);
    SignIn.submitSignInForm();
    SignIn.signInError.should('contain.text', 'The password is invalid or the user does not have a password.');
  });

  it('TA-3: User unable to sign in with an unregistered email', () => {
    SignIn.open('/signing');
    SignIn.enterSignInEmail(credentials.emailUnregistered);
    SignIn.enterSignInPassword(credentials.passwordValid);
    SignIn.submitSignInForm();
    SignIn.signInError.should('contain.text', 'There is no user record corresponding to this identifier. The user may have been deleted.');
  });

  it('TA-4: User unable to sign in with missing email', () => {
    SignIn.open('/signing');
    SignIn.enterSignInPassword(credentials.passwordValid);
    SignIn.submitSignInForm();
    SignIn.signInIcon.should('be.visible');
    cy.url().then((url) => {
      expect(url).to.include('/signing');
    });
  });

  it('TA-5: User unable to sign in with missing password', () => {
    SignIn.open('/signing');
    SignIn.enterSignInEmail(credentials.emailValid);
    SignIn.submitSignInForm();
    SignIn.signInIcon.should('be.visible');
    cy.url().then((url) => {
      expect(url).to.include('/signing');
    });
  });

  it('TA-7: User is able to Sign Out', () => {
    SignIn.open('/signing');
    SignIn.enterSignInEmail(credentials.emailValid);
    SignIn.enterSignInPassword(credentials.passwordValid);
    SignIn.submitSignInForm();
    SignIn.signOut();
    SignIn.signInIcon.should('be.visible');
  });
});
