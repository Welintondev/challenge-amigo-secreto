let amigos = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let resultadoSorteio = document.getElementById('resultado');

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo.trim() === '') {
        alert('Digite um nome válido para adicionar.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = '';
    exibirListaDeAmigos();
}

function exibirListaDeAmigos() {
    listaDeAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        li.setAttribute('role', 'listitem');
        listaDeAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    const amigoSorteado = amigos[indiceSorteado];

    resultadoSorteio.innerHTML = '';
    let li = document.createElement('li');
    li.innerHTML = `O amigo secreto sorteado é: <b>${amigoSorteado}</b>`;
    li.setAttribute('role', 'listitem');
    resultadoSorteio.appendChild(li);
}