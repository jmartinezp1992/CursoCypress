describe('JQuery y Cypress',()=>{

    it('Haciendo una operación con JQuery',()=>{
        const elemento = $('elemento') //FUnciona, pero con get no, poruqe es una promesa y es asíncrona
       // elemento.click();

        if(elemento.length){
            hacemosAlgo(elemento)
        }
    })
})