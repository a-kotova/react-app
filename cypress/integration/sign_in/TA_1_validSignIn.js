import signIn from '../../page-objects/signInPage'
import Header from '../../page-objects/homePage'
describe("TA-1", () => {
    it("User is able to log in with valid credentials", () => {
        cy.fixture('credentials.json').then(credentials => {
            signIn.navigateToSignInPage()
            signIn.typeSignInEmail(credentials.email)
            signIn.typeSignInPassword(credentials.password)
            signIn.clickSignInCTA()
            Header.getSignOutCTA().should('be.visible')
        })
    })
})