// Perguntar qual nome do usuário
var nome=prompt ("Qual seu nome?")
// Personalizar boas vindas + nome do usuário 
 document.write( "Olá, ", nome)
function verificarRespostas() {
    var total = 4;
    var pontos = 0;

    var myForm = document.forms["quizAnimals"];
    var respostas = ["a", "c", "b", "b"];

    for(var i = 1; i <= total; i++) {
        if(myForm["p" + i]. value === "" ){
            alert("Por favor responda todas as perguntas");
            return false;
        }else{
            if(myForm["p" + i].value === respostas[i - 1]){
                ++pontos;

            }
        }
    }
    var results = document.getElementById("resultado").innerHTML = '<h3> Você obteve '+ pontos +' de '+ total +' pontos, as alternativas corretas são: " a , c , b , b " </h3>' ;
   
    return false;
}
