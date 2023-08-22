//ping pong

let i=0;


let num= parseInt(prompt('Numero'))

if (num%2==0){
    console.log('El numeo es par')




    do{
        i++;
        
        if(i%3==0 && i%5==0){
            console.log(`${i}  ping_pong`)
        }

        else if (i%3==0){   
            console.log(`${i} ping`)
        }
        else if(i%5==0){   
            console.log(`${i}  pong`)
        }
            
        else{
            console.log(`${i}`);
            continue;
        }
        
    }while(i<=num);
  
}
else{
    console.log('El numero es impar')
}


    
    
