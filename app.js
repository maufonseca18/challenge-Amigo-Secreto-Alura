// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    //Se llama a la función y se guarda por ID
    let nombreDeAmigos = document.getElementById('amigo').value.trim();
    console.log(nombreDeAmigos); 
    if (nombreDeAmigos === ''){
        alert("Por favor indique un nombre");
        return;
    } else{
     amigos.push(nombreDeAmigos);
     document.getElementById("amigo").value ="";
        console.log(amigos);
    }
} 