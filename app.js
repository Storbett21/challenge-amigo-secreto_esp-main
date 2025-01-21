// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    // Agregar el nombre al arreglo y mostrarlo en la lista
    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = ''; // Limpiar el campo de texto
    input.focus(); // Devolver el foco al campo de texto
}

// Función para actualizar la lista visible en la página
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista actual

    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        item.className = 'name-item';
        lista.appendChild(item);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar el resultado anterior
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `🎉 El amigo secreto es: ${amigoSeleccionado} 🎉`;
    itemResultado.className = 'result-item';
    resultado.appendChild(itemResultado);
}
