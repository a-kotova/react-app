class signIn {
    navigateToSignInPage() {
        cy.visit('/signing')
    }
    typeSignInEmail(email) {
        return cy.get('.sc-iJuUWI input[type="email"]').type(email)
    }
    typeSignInPassword(password) {
        return cy.get('.sc-iJuUWI input[type="password"]').type(password)
    }
    clickSignInCTA() {
        return cy.get("button").contains("Sign In").click()
    }
}
export default new signIn()