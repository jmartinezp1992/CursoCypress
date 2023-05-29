describe('Tablas estáticas y dinámicas',()=>{

   /* it('Validamos texto en una tabla estática', ()=>{
        //Navegando a la web
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1 > tbody>tr>td:nth-child(1)').each((elemento,index,$list)=>{//Iterar sobre los elementos de esa columna
            const texto = elemento.text(); //Agarramos el texto de cada elemento
            if(texto.includes('Bach')){
                //Se va al elemento que le sigue en el DOM
                cy.get('#table1 > tbody>tr>td:nth-child(1)').eq(index).next().then(function(p){
                    //Se toma el texto del elemento próximo
                    const r = p.text()
                    //Se valida el texto sobre este elemento
                    expect(r).to.contains('Frank')
                })
            }


        })
    })*/
   /* it('Validamos tabla dinámica', ()=>{
        cy.visit('https://chercher.tech/practice/dynamic-table')
        cy.contains('td', 'facebook.com')
        .prev()
        .find('input')
        .check()
    })*/
    it('Validamos tabla dinámica', ()=>{
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.contains('td', 'Bach')
        .next()
        .should('have.text','Frank')
    })
})