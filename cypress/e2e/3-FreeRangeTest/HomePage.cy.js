describe('Home de www.freerangetesters.com', () => {
    beforeEach(() => {   // Se ejecuta antes de cada prueba del bloque

        cy.visit('https://www.freerangetesters.com') //Navega a esta página
    })

    it('should have a title',() => { //Cada elemento it sería una prueba
        cy.title().should('include', 'Free Range Testers')
        //cy.get('#comp-l02x1m8d2label').click() //Seleción mediante selector css
        cy.xpath('//*[@id="comp-l02x1m8d2label"]').click(); //Selección mediante xpath
        cy.contains('Iniciar');
    
    })
})