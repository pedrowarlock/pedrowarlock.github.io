window.alert("SEJA BEM-VINDO A CAMISARIA EDUCAFRO!")
var vnome   = window.prompt("Digite o nome do cliente ")
var vgender = window.prompt("Masculino ou feminino? ")
var vidade  = window.prompt("Digite a sua idade")

var program_idade = 28;
var program_nome = "Pedro";
temp = "a";

if (vgender.toUpperCase() == "M"){temp = "o";}
document.write("<h1>Olá " + vnome + ", seja bem-vind"+ temp +"!</h1>")


switch(true)
{
    case (vidade > program_idade):    
        document.write("<h1>Você é " + (vidade - program_idade).toString() + " anos mais velh" + temp + " que o programador " + program_nome +".</h1>")
        break;
    case (vidade < program_idade):
        document.write("<h1>Você é " + (program_idade - vidade).toString() + " anos mais nov" + temp + " que o programador " + program_nome +".</h1>")
        break;
    default:
    document.write("<h1>Você é tem a mesma idade que o programador" + program_nome +".</h1>")
}

