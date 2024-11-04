const boton = document.getElementsByTagName('input');
const lista = document.getElementsByTagName('ul');

boton[0].addEventListener('click', ()=>{
    var nuevoElemento = document.createElement('li');
    const X = lista[1].children.length + 1;
    nuevoElemento.textContent = `Elemento ${X}`;

    if(lista[1].children[X-2].classList.contains('bg-dark')){
        nuevoElemento.classList.add('list-group-item');
        nuevoElemento.classList.add('col-12');
        nuevoElemento.classList.add('col-md-6');
        nuevoElemento.classList.add('bg-light');
        nuevoElemento.classList.add('text-dark');
    }
    else{
        nuevoElemento.classList.add('list-group-item');
        nuevoElemento.classList.add('col-12');
        nuevoElemento.classList.add('col-md-6');
        nuevoElemento.classList.add('bg-dark');
        nuevoElemento.classList.add('text-light');
    }

    lista[1].appendChild(nuevoElemento);
})

/*
    Entiendo que los primeros 5 elementos también cuentan, por ello parto de dicha posición y no de 0.
*/
