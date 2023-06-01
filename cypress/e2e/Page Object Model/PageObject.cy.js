import FreeRangeHome from "../../pages/FreeRangeHome"

const home = new FreeRangeHome

describe('Ejemplo de POM en la web Free Range Testers',()=>{

    it('El botón "Empezar a Aprende existe", existe',()=>{
        home.navigateHome()
        home.empezarButton().should('exist')

    })

})