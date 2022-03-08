// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5
function calcular(){
    var adultos = parseFloat(document.getElementById("adultos").value)
    var criancas = parseFloat(document.getElementById("criancas").value)
    var duracao = parseFloat(document.getElementById("duracao").value)
    
    let qtdCarne = (carnePP(duracao) * ( adultos + criancas / 2 )) / 1000
    let qtdCerveja = Math.ceil((cervejaPP(duracao) * adultos) / 350)
    let qtdBeb = Math.ceil( bebPP(duracao) * (adultos + criancas / 2) / 1000 )

    mostrar(qtdCarne, qtdCerveja, qtdBeb)
}
function carnePP(duracao){
    if (duracao >= 6){
        return 650
    }
    else{
        return 400
    }
}
function cervejaPP(duracao){
    if (duracao >=6){
        return 2000
    }
    else{
        return 1200
    }
}
function bebPP(duracao){
    if (duracao >=6){
        return 1500
    }
    else{
        return 1000
    }
}

function mostrar(qtdCarne, qtdCerveja, qtdBeb) {
    let resultContainer = document.getElementById("resultados")
    resultContainer.style.display = "block"

    document.getElementById("resultCarne").innerHTML = `${qtdCarne} kg de Carne`
    document.getElementById("resultCerveja").innerHTML = `${qtdCerveja} Latas de Cerveja`
    document.getElementById("resultBebidas").innerHTML = `${qtdBeb} litros de Refrigerante/Água`
    
    
}
