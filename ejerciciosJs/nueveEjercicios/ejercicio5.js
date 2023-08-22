// const aprendices=[];

// const aprendiz1={
//     nombre: "luis",
//     materia: "mate"
// }

// const aprendiz2={
//     nombre: "yesmir",
//     materia: "dormir"
// }

// const aprendiz3={
//     nombre: "alvaro",
//     materia: "cantar"
// }



// resultado =[...aprendices,aprendiz1];
// resultado=[...resultado, aprendiz2];
// resultado=[aprendiz3, ...resultado];


// console.log(resultado)
// console.table(resultado)

// const meses=['enero','febrero','marzo','abril'];

// const [mes1,mes2,mes3]= meses;  //destructuri

// console.log(mes3, mes1 )



// const libros=[
//     {nombre: 'la iliada', precio: 3500 , pasta: 'dura' },
//     {nombre: 'la odisea', precio: 3500 , pasta: 'plastificada' },
//     {nombre: 'la iliada', precio: 3500 , pasta: 'dura' }

// ];

// for(let x=0; x < libros.length ; x++){
//     console.table(libros[x].nombre)


// }



// libros.forEach(function(libreria){
//     console.table(`${libreria.nombre} - precio: ${libreria.precio}`)
// });



const datos=[];



for (let x=0; x<=2; x++){
    let uno={
        nombre: prompt("Tu nombre: "),
        apellido: prompt("Tu apellido:"),
        placa: prompt("Tu placa:")
    
        
    }

    datos.push(uno);

}

console.table(datos);




