import SignIn from '../../../page-objects/signInPage';
import credentials from '../../../fixtures/credentials.json';

describe('Sign In', () => {
  it('TA-1: User is able to log in with valid credentials', () => {
    SignIn.navigateToSignInPage();
    SignIn.enterSignInEmail(credentials.email);
    SignIn.enterSignInPassword(credentials.password);
    SignIn.submitSignInForm();
    SignIn.signOutCTA.should('be.visible');
  });
});
