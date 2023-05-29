describe('Pruebas sobre UI', () => {
    beforeEach(() => {  
        cy.visit('https://the-internet.herokuapp.com/')
    })

   /* it("Ejemplo de click", () => {
        cy.contains("Add/Remove Elements").click()
        cy.get('button').click()
        cy.get('.added-manually').click()
    })*/

   /*it("Ejemplo de escritura", ()=> {
        cy.contains("Form Authentication").click()
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.fa').click()
    })*/

    /*it("Ejemplo de checkboxes", ()=>{
        cy.contains("Checkboxes").click()
        cy.get('#checkboxes > :nth-child(1)').check()

    })*/

   /* it("Elegir de un dropdown", ()=> {

        cy.contains("Dropdown").click()
        cy.get('#dropdown').select("Option 2")

    })*/


   /* it("Ejemplo de hover", ()=>{
        cy.contains("Hovers").click()
        cy.get('#content > div > div:nth-child(4) > div > a').click({force:true})
    })*/
    it("Click derecho", ()=>{
        cy.contains("Context Menu").click()
        cy.get('#hot-spot').rightclick()
        //cy.get('#hot-spot').invoke("trigger","contextmenu")
        cy.on("window:alert",(alert)=>{
            expect(alert).to.equal("You selected a context menu") // Valida una alerta
        })
        })

   

})