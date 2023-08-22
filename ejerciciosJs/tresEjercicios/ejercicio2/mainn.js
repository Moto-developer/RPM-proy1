const form= document.getElementById('form');

function datosMotoviajero(){
    
        const cedula= document.getElementById('cedula').value;
        const nombre= document.getElementById('nombre').value;
        const apellido=document.getElementById('apellido').value;
        const correo= document.getElementById('cedula').value;
        const fechaNacimiento=document.getElementById('fechaNacimiento').value;    
        const datos1= {cedula, nombre, apellido, correo, fechaNacimiento}
        return datos1;
}


function datosMoto(){
    const placa= document.getElementById('placa').value;
    const cilindraje= document.getElementById('cilindraje').value;
    const datos2= {placa, cilindraje}
    return datos2
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(fechaNacimiento.value<= ''){
        alert('pene pene pene')

    }
    
    else if(fechaNacimiento.value<= '2005-01-01'){
        alert('es mayor')
        const recibidos= datosMotoviajero();
        const recibidos2= datosMoto();

        console.log('Datos del motoviajero');
        console.log(`cedula: ${recibidos.cedula} `);
        console.log(`nombre: ${recibidos.nombre} `)
        console.log(`apellido: ${recibidos.apellido} `)
        console.log(`correo: ${recibidos.correo} `)
        console.log(`Fecha de nacimiento: ${recibidos.fechaNacimiento} `)
        console.log('Datos de la moto');

        console.log(`placa: ${recibidos2.placa} `);
        console.log(`cilindraje: ${recibidos2.cilindraje} `)


        const alerta= document.getElementById('alerta')
        alerta.innerHTML=`Datos del motoviajero <br>
        cedula: ${recibidos.cedula} <br>
        nombre: ${recibidos.nombre} <br>
        apellido: ${recibidos.apellido} <br>
        correo: ${recibidos.correo} <br>
        Fecha de nacimiento: ${recibidos.fechaNacimiento} <br>
        Datos de la moto <br>
        placa: ${recibidos2.placa} <br>
        cilindraje: ${recibidos2.cilindraje} <br>
        `;
        
       
    }
    else{
        alert('es un menor, no se puede enviar')
    }

    



    



    


    
});

localStorage.setItem('nombre', 'luis')
sessionStorage.setItem('name', 'luis')