alert("s.O.C.O.R.R.O")

const idade =96

if (idade <=13){
    console.log("Criança")
}else if (idade > 13 && idade < 18) {
    console.log("adolescente")
}else if (idade > 18 && idade < 60 ) {
    console.log("Adulto")
}else {
    console.log("Veio")
}

let nota = 60

if (nota < 60) {
    console.log("rEPROVADO")
} else if (nota >= 60 && nota <= 90) {
    console.log("aPROVADO")
} else {
    console.log("sLA")
}

let dia = "sab"

switch (dia) {
    case "seg" :
            console.log("Triste ne")
            break;
        case "ter" : 
            console.log("Triste ainda ne")
            break;
        case "sab" :
            console.log("tris...")
            break;
        default:
            console.log("depressão")
}