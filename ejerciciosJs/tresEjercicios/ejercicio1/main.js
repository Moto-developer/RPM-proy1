const form= document.getElementById('form');
const correo= document.getElementById('correo');
const contraseña= document.getElementById('contraseña');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(contraseña.value.length>8){
        console.log(contraseña.value);
        if (correo.value== 'luis@gmail.com'){
            alert('Bienvenido');
            document.body.style.backgroundColor='red';


        }
        else{
            alert('bienvenido');
            document.body.style.backgroundColor='green';
        }
       
    }

    else{
        alert('Contraseña no valida');
    }



});