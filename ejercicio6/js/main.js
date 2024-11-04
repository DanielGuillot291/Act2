const texto = document.getElementsByTagName("p");
const link = document.getElementsByClassName("enlaces");

for(let i = 0; i<texto.length; i++){
    link[i].addEventListener('click', ()=>{
        if(link[i].text == "Ocultar contenidos"){
            link[i].innerHTML = "Mostrar contenidos";
            texto[i].style.visibility = "hidden";
    
        }
        else{
            link[i].innerHTML = "Ocultar contenidos";
            texto[i].style.visibility = "visible";
        }   
    })
}

