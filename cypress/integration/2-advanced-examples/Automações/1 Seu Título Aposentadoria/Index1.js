const el = require("../1 Seu Título Aposentadoria/Elements1").TESOURO

class acessar{

    visitarpagina(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false})

    cy.visit(el.SITE)
    cy.get(el.COOKIE).click();

    }

    APOSENTADORIACOMPRAZO(){
        cy.get(el.MENU).click()
        cy.get(el.TITULO).click({force: true})
        cy.get(el.SUBTITULO).click({force: true})
        cy.get(el.COMECO).click({force: true})
        cy.get(el.OBJETIVO).click({force: true})        
        cy.get(el.PRAZO).click({force: true})
        cy.get(el.RETORNO).click({force: true})
        cy.get(el.RESULTADO).click({force: true})
        cy.get(el.COOKIE).click()
       }
   
       //RETORNAR EM TELA RESULTADOS
   
   
   }


export default new acessar