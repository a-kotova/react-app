import SignIn from '../../../page-objects/signInPage';
import Header from '../../../page-objects/homePage';
import credentials from '../../../fixtures/credentials.json';

describe('Sign In', () => {
  it('TA-1: User is able to log in with valid credentials', () => {
    SignIn.navigateToSignInPage();
    SignIn.typeSignInEmail(credentials.email);
    SignIn.typeSignInPassword(credentials.password);
    SignIn.clickSignInCTA();
    Header.getSignOutCTA().should('be.visible');
  });
});
