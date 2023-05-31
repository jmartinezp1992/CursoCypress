/*describe("Ejemplo con Fixtures",()=>{
    let credenciales // Declare the variable at the top level of the describe block

before(()=>{
    cy.visit('https://the-internet.herokuapp.com/login') //Solo lo hace una vez, no siempre antes de cada test
    cy.fixture('credenciales').then(function(testdata){ //Cy.fixture devuelve el json, se crea el objeto testdata y se asigna a this.testdata
        credenciales = testdata
        console.log(credenciales) // Check if the test data is loaded correctly

    })
})

it('Validate succesful Login',()=>{
        cy.get('#username').type(credenciales.username)
        cy.get('#password').type(credenciales.password)
        cy.get('form').contains('Login').click()
        cy.url().should('contain','/secure')
    })

})*/

const testData = require('../../fixtures/titulos.json')

testData.forEach((testData)=>{
    describe('El título es el correcto para subpágina en Free Range Testers',()=>{
       
        it('Valida que el' + testData.Title + 'sea el titulo'+testData.Location, ()=>{
            cy.visit(testData.Location)
            cy.title().should('include',testData.Title)
        })
    })
})