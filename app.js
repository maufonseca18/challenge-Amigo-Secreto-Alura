// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    function verificadorDeTexto(){
        //Se llama a la función y se guarda por ID, se añade otra una función adicional para verificar que se ingrese un nombre válido
        let nombreDeAmigos = document.getElementById("amigo").value.trim();

        if (nombreDeAmigos === ""){
            alert("Por favor ingrese un nombre válido"); //si el valor ingresado es nulo se genera una alerta al usuario 
            return;
        }else if (isNaN(nombreDeAmigos)){ //si el valor ingresado es válido entonces es alamcenado
            amigos.push(nombreDeAmigos);
            document.getElementById("amigo").value="";
            console.log(amigos);
        }else{
            alert("Por favor indique un nombre válido");//en caso de ingresar un número se generara un alerta al usuario 
            return;
        }
    }
    verificadorDeTexto();
}