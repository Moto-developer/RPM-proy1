//Dia mes año
let mes = parseInt(prompt("ingresa el numero de mes:", 0));

switch(mes){
    case 1: 
    alert(`el ${mes} mes es Enero y tiene 31 dias`);
    console.log(`el ${mes} mes es Enero y tiene 31 dias`);
        invierno();
    break;

    case 2: 
    alert(`el ${mes} mes es febrero y tiene 28 dias`);
    console.log(`el ${mes} mes es febrero y tiene 28 dias`);
        invierno();
    break;

    case 3: 
    alert(`el ${mes} mes es marzo y tiene 31 dias`);
    console.log(`el ${mes} mes es marzo y tiene 31 dias`);
        invierno();
    break;

    case 4: 
    alert(`el ${mes} mes es abril y tiene 30 dias`);
    console.log(`el ${mes} mes es abril y tiene 30 dias`);
        primavera();
    break;

    case 5: 
    alert(`el ${mes} mes es mayo y tiene 31 dias`);
    console.log(`el ${mes} mes es mayo y tiene 31 dias`);
        primavera();
    break;

    case 6: 
    alert(`el ${mes} mes es junio y tiene 30 dias`);
    console.log(`el${mes} mes es junio y tiene 30 dias`);
        verano();
    break;

    case 7: 
    alert(`el ${mes} mes es julio y tiene 31 dias`);
    console.log(`el ${mes} mes es julio y tiene 31 dias`);
        verano();
    break;

    case 8: 
    alert(`el ${mes} mes es agosto y tiene 31 dias`);
    console.log(`el ${mes} mes es agosto y tiene 31 dias`);
        verano();
    break;

    case 9: 
    alert(`el ${mes} mes es septiembre y tiene 30 dias`);
    console.log(`el ${mes} mes es septiembre y tiene 30 dias`);
        otoño();
    break;

    case 10: 
    alert(`el ${mes} mes es octubre y tiene 31 dias`);
    console.log(`el ${mes} mes es octubre y tiene 31 dias`);
        otoño();
    break;

    case 11: 
    alert(`el ${mes} mes es noviembre y tiene 30 dias`);
    console.log(`el ${mes} mes es noviembre y tiene 30 dias`);
        otoño();
    break;

    case 12: 
    alert(`el ${mes} mes es diciembre y tiene 31 dias Feliz navidad`);
    console.log(`el ${mes} mes es diciembre y tiene 31 dias Feliz navidad`);
        otoño();
        
    break;

    default:
        alert("no hay numero para ese mes boliviano");
        console.log("no hay numero para ese mes boliviano");
}

function invierno (){
    console.table(`Esta en Invierno, Enero, Febrero, Marzo`);
}

function primavera(){
    console.log(`Esta en Primavera, Abril, Mayo`);
}

function verano(){
    console.log(`Esta en Verano, Junio, Julio, Agosto`);
}

function otoño(){
    console.log(`Esta en Otoño, septiembre, octubre, noviembre, diciembre`);
}