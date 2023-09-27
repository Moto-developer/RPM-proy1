//PING - PONG
let i = 0;
while (i < 1) {
 let numero = prompt('Digite un numero')
    if (numero%2 == 0) {
        i++;
        console.log('Usted digito un numero entero')
        let a;
        for (a=1; a<numero; a++) {
            console.log(`Numero es ${a}`)
            if (a%5 == 0 && a%3 == 0) {
                console.log('Ping PONG')
            }
            else if (a%5 == 0) {
                console.log('PONG')
            }
            else if (a%3 == 0) {
                console.log('PING')
            }
        }
    }
    else if (numero%2 != 0){
        console.log('Usted ingreso un Float')
    } 
    else {
        console.log('Usted no digito nada')
    }
}