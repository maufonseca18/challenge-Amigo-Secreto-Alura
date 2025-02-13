// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    function verificadorDeTexto(){
        //Se llama a la función y se guarda por ID, se añade otra una función adicional para verificar que se ingrese un nombre válido
        let nombreDeAmigos = document.getElementById("amigo").value.trim(); //selecciona lista donde se mostrarán los amigos
        const soloLetras  = /^[a-zA-Z\s]+$/; // Expresión regular que verifica carácteres especiales
        if (nombreDeAmigos === ""){
            alert("Por favor ingrese un nombre válido"); //si el valor ingresado es nulo se genera una alerta al usuario 
            document.getElementById("amigo").value= "";
            return;
        }else if (isNaN(nombreDeAmigos) && soloLetras.test(nombreDeAmigos)) { //si el valor ingresado es válido entonces es alamcenado
            amigos.push(nombreDeAmigos);
            document.getElementById("amigo").value= "";
            console.log(amigos);
            mostrarAmigos(); //LLamar a la función para mostrar la lista. 
        }else {
            alert("Por favor indique un nombre válido");//en caso de ingresar un número se generara un alerta al usuario 
            document.getElementById("amigo").value= ""; //Limpiar la caja de texto después de un error o valor inválido.
            return;
        } 
    }
    verificadorDeTexto();
}
function mostrarAmigos(){
    //se obtiene el elemento de la lista de amigos
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";//limpiar la lista existente 
    //Itera sobre el arreglo y agrega os alementos a la lista
    for (let i = 0; i < amigos.length; i++){
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }
}