const el = require("../3 Seu Título Estudante/Elements(3)").TESOURO

class acessar{
   
    
    visitarpagina(){
     Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from
     // failing the test
     return false})
              
     cy.visit(el.SITE);
     cy.get(el.COOKIE).click();
    }


    EntrarMenuDescubra(){
       cy.get(el.MENU).click({force: true})
       cy.get(el.SIMULADOR).click({force: true})
       cy.get(el.DESCUBRA).click({force: true})
       cy.get(el.COMEÇAR).click({force: true})
       cy.get(el.OBJETIVO).click({force: true})
       cy.get(el.PRAZO).click({force: true})
       cy.get(el.RETORNO).click({force: true})
       cy.get(el.RESULTADO).click({force: true})

    }

    SimulandoPrefixado2026(){
     cy.get(el.SIMULANDO2).click({force: true})
     cy.get(el.QTOINVESTIRHJ).click({force: true})
     cy.get(el.APORTEINICIAL).type(el.VALOR1)
     cy.get(el.CONFIRMAR1).click({force: true})
     cy.get(el.APORTEMES).type(el.VALOR2)
     cy.get(el.CONFIRMAR2).click()
     cy.get(el.ENVIAREMAIL).click()
     cy.get(el.DIGITAREMAIL).type(el.EMAIL)
     cy.get(el.ENVIAR).click({force: true})

    }

    SimulandoValorLimite(){
        cy.get(el.SIMULANDO2).click({force: true})
        cy.get(el.QTOINVESTIRHJ).click()
        cy.get(el.APORTEINICIAL).type(el.VALOR3)
        cy.get(el.CONFIRMAR1).click()
        cy.get(el.FECHARERRO).click()
        cy.get(el.APORTEINICIAL).clear()
        cy.get(el.APORTEINICIAL).type(el.VALOR4)
        cy.get(el.CONFIRMAR1).click()
        cy.get(el.FECHARERRO).click()
        cy.get(el.APORTEINICIAL).clear()
        cy.get(el.APORTEINICIAL).type(el.VALOR5)
        cy.get(el.CONFIRMAR1).click()
        cy.get(el.APORTEMES).type(el.VALOR6)
        cy.get(el.CONFIRMAR2).click()
   
    }
}
export default new acessar