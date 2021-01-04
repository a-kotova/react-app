class Header {
    getSignOutCTA() {
        return cy.get('div').contains('SIGN OUT')
    }
}
export default new Header()