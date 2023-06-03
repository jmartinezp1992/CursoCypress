describe('Pruebas en API con Cypress',()=>{

// Enviar request del tipo GET

/*it('El endpoint "posts" responde con status 200',()=>{
    cy.request({
        url:'https://jsonplaceholder.typicode.com/posts'  
    }).then((respuesta)=>{
        expect(respuesta.status).to.eq(200)
    })
})*/


/*
it('El endpoint "posts" tiene 100 entradas',()=>{
    cy.visit('https://jsonplaceholder.typicode.com')
    cy.request('/posts')
    .its('body')
    .should('have.length',100)
    
})*/

/*it('El post número 1, tiene por título sunt aut facere repellat provident occaecati excepturi optio reprehenderit',()=>{
    cy.request({
        url:'https://jsonplaceholder.typicode.com/posts/1'  
    }).its('body').should('have.property','title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
})*/


// Enviar request del tipo POST

/*it('El POST request funciona',()=>{
    cy.request('POST','https://jsonplaceholder.typicode.com/posts',{
        userId:1,
        id: 101,
        title:'Relatos Salvajes',
        body: 'Una película top'
    }).then((respuesta)=>{
        expect(respuesta.body).to.have.property('title','Relatos Salvajes')
    })
})*/

// Enviar request del tipo PUT

/*it('El PUT request funciona',()=>{
    cy.request('PUT','https://jsonplaceholder.typicode.com/posts/2',{
        title:'Relatos Salvajes',
        body: 'Una película top'
    }).then((respuesta)=>{
        expect(respuesta.body).to.have.property('title','Relatos Salvajes')
    })
})*/

// Enviar request del tipo DELETE

/*it('El DELETE funciona',()=>{
    cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1')
})*/

    it('Test login con comando personalizado',()=>{
        cy.login()
        cy.get('.subheader').should('include.text','Welcome to the Secure Area')
    })
})