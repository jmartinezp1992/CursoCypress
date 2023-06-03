describe('Loguear - Basic Auth y Auth con Forms', ()=>{
    it('Sin loguear',()=>{
         cy.visit('https://the-internet.herokuapp.com/basic_auth')
         cy.get('p').should('include.text','Congratulations')
    })


    it('Loguea usando auth de Cypress',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            auth:{
                username:'admin',
                password:'admin'
            }
        })
        cy.get('p').should('include.text','Congratulations')

    })

    

})