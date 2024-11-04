var form = document.getElementById('form');
var name = document.getElementById('name');
var last = document.getElementById('last'); 
var psw = document.getElementById('pass');
var rpsw = document.getElementById('rpass');
var user = document.getElementById('user');
var pais = document.getElementById('pais');


form.addEventListener('submit', (event)=>{    
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated')
});

// Verificación para comprobar que las contraseñas sean iguales
function validatePassword() {
    
    if (psw.value !== rpsw.value) {
        rpsw.classList.add('is-invalid');
        rpsw.classList.remove('is-valid');
        return false;
    } else {
        rpsw.classList.remove('is-invalid');
        rpsw.classList.add('is-valid');
        return true;
    }
}

rpsw.addEventListener('change', validatePassword);
