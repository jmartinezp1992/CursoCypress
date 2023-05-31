describe('Trabajando con plantillas modales',()=>{
    it('Valido el texto de un elemento dentro del iFrame',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        //cy.get().should() //No funciona el encontrar un elemento dentro de un frame
        cy.get('#frame')
        .iframe('body #button-find-out-more > b')
        .should('include.text','Find Out More!')
    })
})