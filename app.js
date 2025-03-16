// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo');
    let nombre = nombreIngresado.value;

    if (nombre === '') {
        alert('Indica un nombre, por favor.');
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    nombreIngresado.value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    
    resultado =document.getElementById('resultado');
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    let cantidadAmigosIngresados = amigos.length;

    if( amigos == 0){
       alert('No hay nombres ingresados');
    } else { 
        let amigoSorteado = Math.floor(Math.random()* cantidadAmigosIngresados);
        resultado.innerHTML = (amigos[amigoSorteado]);
        amigos.splice(amigoSorteado, 1);
    }
}

//Creo que lo logré :D