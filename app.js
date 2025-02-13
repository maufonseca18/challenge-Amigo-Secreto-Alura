// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    function verificadorDeTexto(){
        //Se llama a la función y se guarda por ID, se añade otra una función adicional para verificar que se ingrese un nombre válido
        let nombreDeAmigos = document.getElementById('amigo').value.trim();
        if (isNaN(nombreDeAmigos)) {
            console.log ("Texto = letras");
        }else {
            console.log ("Texto = num");
        }
        if (nombreDeAmigos === ""){
            alert("Por favor indicar un nombre válido");
            return;
        }else {
         amigos.push(nombreDeAmigos);
         document.getElementById("amigo").value = "";
         console.log(amigos);
        }
    }
     verificadorDeTexto();    
    }
        
    