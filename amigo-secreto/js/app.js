let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if(lista.textContent == ''){
        lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigos.push(amigo.value);
    amigo.value = '';
}

function sortear() {
    embaralhar(amigos);
    
    let sorteio = document.getElementById('lista-sorteio');

    for(let indice = 0; indice < amigos.length; indice++) {

        if(indice == (amigos.length - 1)){
            sorteio.innerHTML = sorteio.innerHTML + amigos[indice] + ' >> ' + amigos[0] + "<br>";
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[indice] + ' >> ' + amigos[indice + 1] + "<br>";
        }
    }
}

function embaralhar(lista) {

    let indice = lista.length
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}
