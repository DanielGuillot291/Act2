function toggleText(){
    const texto = document.getElementsByClassName("additional");
    const link = document.getElementsByTagName("a");
    
    if(texto[0].classList.contains("hidden")){
        link[0].innerHTML = "Ocultar exeso de texto";
        texto[0].classList.remove("hidden");
        texto[0].classList.add("visible");
    }
    else{
        link[0].innerHTML = "Seguir leyendo";
        texto[0].classList.remove("visible");
        texto[0].classList.add("hidden");
    }   
}