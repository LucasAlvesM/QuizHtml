function loadRecord(){
    let campoRecord = document.getElementById("score");
    campoRecord.textContent = 0;
    if( localStorage.getItem("score") != null ||
        localStorage.getItem("score") != undefined ){

        let ranking = JSON.parse(localStorage.getItem("score"))
        campoRecord.textContent = ranking[0].score
    }
}

function novoRecord(){
    let pontuacaoAtual = document.getElementById("pontuacaoAtual").value
    let nome = prompt("Qual o Seu Nome?");
    let agora = Date.now();

    let novoRecord = {
        timestamp : agora,
        nomeDoJogador: nome,
        record: pontuacaoAtual
    }
    
    let ranking = JSON.parse(localStorage.getItem("score"))
    ranking.unshift(novoRecord)

    localStorage.setItem("score",JSON.stringify(ranking))
    loadRecord()
}


var ranking = [
,
    {
        timestamp : "13/01/2021",
        nomeDoJogador: "Alves",
        record: 400
    },
    {
        timestamp : "10/01/2021",
        nomeDoJogador: "Lucas",
        record: 350
    },
]

    loadRecord()
// }
