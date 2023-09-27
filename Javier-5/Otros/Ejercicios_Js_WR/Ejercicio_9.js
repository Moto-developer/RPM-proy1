//Apuestas
alert('Bienvenido a casino ADSO');
alert('Que empiece el juego');
let efectivo = 5000;
do{
    let numero = parseInt(prompt('Elige un número del 1 al 9'));
    let apuesta = parseFloat(prompt('¿Cuánto dinero deseas apostar? (mínimo 2000/máximo 5000)'));
 
    if (apuesta < 2000 || apuesta > 5000 ) {
      alert('acabas de romper las reglas,asi que perderas todo tu dinero');
      break;
    }
 
    let actual = apuesta * 3;
    let gano = efectivo + actual;
    let perdida = efectivo - apuesta;
 
    let random = Math.floor(Math.random() * 11);
    alert(`El número generado por la máquina es ${random}`);
 
    if (numero === random) {
      alert('¡Ganaste! :D');
      efectivo = gano;
      alert(`Tu efectivo actual es de ${efectivo}`);
    }
    else {
      alert('¡Perdiste! D":');
      efectivo = perdida;
      alert(`Tu efectivo actual es de ${efectivo}`);
    }
    if(efectivo===1000 || efectivo<0){
      alert('no cuentas con los fondos suficientes para seguir jugando(pobre)')
      break;
    }
    if(efectivo >= 10000){
      alert('has llegado a la cantidad maxima de dinero(felicidades)')
 
      break;
    }
}
while(efectivo > 0);
alert('game over')