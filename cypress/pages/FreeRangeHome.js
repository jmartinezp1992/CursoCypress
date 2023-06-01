class FreeRangeHome {

    //Navegaciones
    navigateHome(){
        cy.visit('https://www.freerangetesters.com/')
    }

    //Locators
    empezarButton(){
        return cy.get('#comp-krjarw4p > [data-testid="linkElement"] > ._1Qjd7') //Necesita el return para poder encadenar
    }

   
    //Acciones
    clickBotonEmpezar(){
        this.empezarButton().click()
    }
}

export default FreeRangeHome //Hace la clase exportable