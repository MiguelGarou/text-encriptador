function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

 if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "El texto fue encriptado con éxito";
    parrafo.textContent = "";
 }  else {
    tituloMensaje.textContent = "¡Oh no! El mensaje no fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("¡Hubo un error! Ingresa el texto", "warning");
 }
}

function desencriptar(){
   let texto = document.getElementById("texto").value;
   tituloMensaje = document.getElementById("titulo-mensaje");
   let parrafo = document.getElementById("parrafo");

   let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
      
      if (texto.length != 0){
         document.getElementById("texto").value = textoCifrado;
         tituloMensaje.textContent = "El texto fue desencriptado con éxito";
         parrafo.textContent = "";
      } else {
         tituloMensaje.textContent = "¡Oh no! El mensaje no fue encontrado";
         parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
         swal("¡Hubo un error! Ingresa el texto", "warning");
      }
}
let toggle=document.getElementById('toggle');
let labelToggle=document.getElementById('labelToggle');
toggle.addEventListener('change', (event)=>{
   let checked=event.target.checked;
   document.body.classList.toggle('dark')
   if (checked==true){
      labelToggle.innerHTML='<i class="fa-solid fa-sun"></i>';
      labelToggle.style.color="white";
   } else {
      labelToggle.innerHTML='<i class="fa-solid fa-moon"></i>';
      labelToggle.style.color="#102C54"
   }
})