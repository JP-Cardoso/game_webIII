const url = 'https://tankgame-10e77-default-rtdb.firebaseio.com/ranking.json';


function criaLinha(linha) {
    let tr = document.createElement("tr");
    let Nome = document.createElement("td");
    let Pontos = document.createElement("td");
    Nome.innerHTML = linha.name;
    Pontos.innerHTML = linha.score;
    tr.appendChild(Nome);
    tr.appendChild(Pontos);
    return tr;
}

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data)

        let players = Object.entries(data).map(([key, value]) => ({
            name: key,
            score: value
        }));

        let tabela = document.getElementById('table');
        players.forEach(dados => {
            let linha = criaLinha(dados);
            tabela.appendChild(linha);
        })
            
    })
    .catch((error) => {
        console.log('Ooops! ' + error)
    })