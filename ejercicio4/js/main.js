function toggleText(){
    const texto = document.getElementsByClassName("additional");
    const link = document.getElementById('txt');
    
    if(texto[0].classList.contains("hidden")){
        link.innerHTML = "Ocultar exeso de texto";
        texto[0].classList.remove("hidden");
        texto[0].classList.add("visible");
    }
    else{
        link.innerHTML = "Seguir leyendo";
        texto[0].classList.remove("visible");
        texto[0].classList.add("hidden");
    }   
}
