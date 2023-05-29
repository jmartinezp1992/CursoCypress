describe("Sesiones y cookies",()=>{

    /*it('Sin sesión guardada',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('form').contains('Login').click()
        cy.url().should('contain','/secure')
    })*/


   /* it('Con sesión guardada',()=>{
        cy.session('Tom',()=>{ //La cachea y solo lo hace una vez.Guarda la sesion con el nombre TOm. 
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('form').contains('Login').click()
        cy.url().should('contain','/secure')
        cy.getCookies().should('have.length',5) //Valida el número de cookies
        .then((cookies)=>{
            expect(cookies[0]).to.have.property('name','optimizelyPendingLogEvents')
        })  
    
    })
    })*/
   
   /* it('Clear cookies',()=>{
        cy.session('Tom',()=>{ //La cachea y solo lo hace una vez.Guarda la sesion con el nombre TOm. 
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('form').contains('Login').click()
        cy.url().should('contain','/secure')
        cy.getCookies().should('have.length',5) //Valida el número de cookies
        .then((cookies)=>{
            expect(cookies[0]).to.have.property('name','optimizelyPendingLogEvents')
        })  
    
      })
        cy.clearCookies() //Borra todas las cookies
        cy.getCookies().should('have.length',5) 
    })*/

    it('Clear cookies',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('form').contains('Login').click()
        cy.url().should('contain','/secure')
        cy.getCookie('CookierLoca').should('not.exist') //Valida existencia cookie
        cy.setCookie('CookierLoca','Oreo') // Crea cookie
        cy.getCookie('CookierLoca').should('have.property','value','Oreo')

               
    })
})