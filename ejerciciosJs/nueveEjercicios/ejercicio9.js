

//casino


let saldo= 5000;

while(saldo>1){
    if(saldo<=5000){
        let apuesta= parseInt(prompt('Digite la cantidad de pesos que quiere apostar'));
        let prediccion= parseInt(prompt('Digite la prediccion del numero 1-10'));
        let aleatorio= Math.floor( Math.random()*(0,10));
 
       if (apuesta==0){
        alert(`Usted perdio su saldo es ${saldo}`)
       }

       else if(apuesta>saldo){
        alert('No puede apostar')
        break;
       }

       else{

        if(prediccion==aleatorio){
    
            saldo= saldo+(apuesta*3);
            alert(`Usted gano!! Su nuevo saldo es ${saldo}       El numero fue${aleatorio} `)

    
        }
    
        else {
    
             saldo= (saldo-apuesta)
            alert(`Usted perdio su nuevo saldo es: ${saldo}    ${aleatorio}`)
    
    
        }

       }   
    }

}

//  1 hora:03

    

