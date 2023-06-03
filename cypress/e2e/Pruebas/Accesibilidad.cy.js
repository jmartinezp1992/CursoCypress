import 'cypress-axe';

describe('Pruebas de accesibilidad',()=>{
    it('Deberia cumplir con los estándares de accesibilidad',()=>{
        cy.visit('https://www.freerangetesters.com')
        cy.injectAxe()
        cy.checkA11y('head')// CHeuqea toda la página, si se le pasa el locator solo valida el elemento.


    })
})