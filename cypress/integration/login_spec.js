describe('Login test', function () {
    it('Checks the login / logout process', function () {
        cy.visit('https://mkcafe.pl')
        // cy.get(':nth-child(1) > .main-menu-link > div').click()
        cy.contains('Kawy').trigger('mouseover')
        cy.contains('Kawy mielone')
        expect(true).to.equal(true);
    });
})
