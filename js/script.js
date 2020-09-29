

//o document.getElementById, é um dos métodos que o Javascript disponibiliza para selecionar elementos do documento HTML. Pode ser selecionado por id ou classe.

//document.getElementById("nome"):
//document: objeto
//getElementById: método (função do objeto)
//("nome"): parâmetro

//“método” uma função específica de um objeto.

//objeto é uma coleção de propriedades;

document.getElementById("botaoEnviar").addEventListener("click", validaformulario)
//funções são um conjunto de instruções que realizam uma tarefa
function validaformulario(){

    if( document.getElementById("nome").value != "" && 
        document.getElementById("email").value != "" && 
        document.getElementById("tel").value != "") { 
      alert("Prontinho! Você receberá as novidades por email.")
    }else{
      alert("Por favor, preencha os campos nome e email.")
    }
}
