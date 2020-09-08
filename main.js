
function va(){
    let txtNombre=document.getElementById('txtNombre').value;
    let txtApellido=document.getElementById('txtApellido').value;
    let txtMensaje=document.getElementById('txtMensaje').value;

    
     
    
    
    if(txtNombre===""){
            alert("Ingrese Nombre");
            return false;
    }
    if(txtApellido===""){
            alert('Ingrese Apellido');
            return false;
    }
    if(txtMensaje===""){
            alert("Ingrese Mensaje");
            return false;
    }

    


    return true;

} 



function EnviarF()
{
    if(va()==true){
        alert('Su mensaje se ha mandado exitosamente')
    }
}





var intentos = 0;

    function Enviar() {

        var Correcta = "2004";
        event.preventDefault();

        if (intentos >= 3) {
            alert('ha perdido el descuento');
            
        }

        do {
            var txtRespuesta = document.getElementById("txtRespuesta").value;

            if (txtRespuesta === Correcta) {
                alert('Se ha ganado un 20% de descuento, su Codigo es: VP45');
            } else {
                intentos++;
            }
            if (intentos === 2) {
                alert("Intentá nuevamente, te quedan dos intentos...");
            } else if (intentos === 3) {
                alert("Intentá nuevamente, te quedan un intento...");
            }
            break;


        } while (intentos <= 3);


    }
        
        
          
   

    




