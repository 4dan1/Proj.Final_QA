/// <reference types="cypress" />

const el = require("../8 Central de Atendimento (2)/Elements4").TESOURO
import acessar from "../8 Central de Atendimento (2)/Index4"

describe('Palavra válida com aspas', () =>{
    
             
    it('Acessar Pagina',() =>{
     acessar.visitarpagina()
   
    })
   
    it('Pesquisar',() =>{
     acessar.PALAVRACOMASPAS()
   
    })
       
})

//DEVERÁ RETORNAR "NÃO ENCONTROU RESULTADOS"