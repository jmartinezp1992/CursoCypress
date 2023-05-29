describe('Validaciones implícitas y explicitas', () => {
    beforeEach(() => {  
        cy.visit('https://the-internet.herokuapp.com/')
    })

   /* it('Validaciones implícitas', ()=>{
        cy.contains("Inputs")
        .click()
        cy.get('h3')
        .should('have.text','Inputs')
        .and('be.visible')

    })

    it('Validaciones explícitas', ()=>{
        cy.contains("Inputs").click()
        cy.get('h3')
        expect('Inputs').to.equals('Inputs')
    })*/

    it('Espera que las primesas se resuelvan',()=>{
    let waited = false

    function waitOneSecond(){
        //Devuelve una promesa que se da por resuelta al pasar 1 segundo
        return new Cypress.Promise((resolve, reject) =>{
            setTimeout(()=>{
                waited=true
                resolve('foo')
            },1000)
        })
    }

    cy.wrap(null).then(()=>{
        return waitOneSecond().then((str) =>{
            expect(str).to.eq('foo')
            expect(waited).to.be.true
            
        })
    })

})

    







})