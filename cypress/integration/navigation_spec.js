const dataSet = require('../test-data/data.json');

dataSet.forEach(data => {
    describe('Navigation test', function () {
        it('Checks the navigation links matches expected', function () {
            cy.visit('https://mkcafe.pl')
            cy.get(':nth-child(1) > .main-menu-link > div').should('have.text', data.menu_1.title)
            cy.get(':nth-child(2) > .main-menu-link > div').should('have.text', data.menu_2.title)
            cy.get(':nth-child(3) > .main-menu-link > div').should('have.text', data.menu_3.title)
            cy.get(':nth-child(4) > .main-menu-link > div').should('have.text', data.menu_4.title)
            cy.get(':nth-child(5) > .main-menu-link > div').should('have.text', data.menu_5.title)
            cy.get(':nth-child(6) > .main-menu-link > div').should('have.text', data.menu_6.title)
        });
        it('Checks the navigation hovers matches expected', function () {
            cy.visit('https://mkcafe.pl')
            cy.contains('Kawy').trigger('mouseover')
            cy.get('.show-me > div > div.category-list-wrap').then((el) => {
                assert.include(el.text(), data.menu_1.expandedLeftListInner.el1)
                assert.include(el.text(), data.menu_1.expandedLeftListInner.el2)
                assert.include(el.text(), data.menu_1.expandedLeftListInner.el3)
                assert.include(el.text(), data.menu_1.expandedLeftListInner.el4)
            })
            cy.contains('Słodkości').trigger('mouseover')
            cy.get('.show-me > div > div.category-list-wrap').then((el) => {
                assert.include(el.text(), data.menu_2.expandedLeftListInner.el1)
                assert.include(el.text(), data.menu_2.expandedLeftListInner.el2)
                assert.include(el.text(), data.menu_2.expandedLeftListInner.el3)
            })
            cy.contains('Akcesoria').trigger('mouseover')
            cy.get('.show-me > div > div.category-list-wrap').then((el) => {
                assert.include(el.text(), data.menu_3.expandedLeftListInner.el1)
                assert.include(el.text(), data.menu_3.expandedLeftListInner.el2)
                assert.include(el.text(), data.menu_3.expandedLeftListInner.el3)
                assert.include(el.text(), data.menu_3.expandedLeftListInner.el4)
                assert.include(el.text(), data.menu_3.expandedLeftListInner.el5)
                assert.include(el.text(), data.menu_3.expandedLeftListInner.el6)
                assert.include(el.text(), data.menu_3.expandedLeftListInner.el7)
            })
        });
    });
})
