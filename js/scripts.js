// Scripts
// 
const logo = document.querySelector('.logo')
console.log(logo)
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            logo.src="logos/LogoColor.png"
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            logo.src="logos/Negativo1.png"

        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// validacion

const user=document.getElementById("username")
console.log(user)



const pass=document.getElementById("password")



const formulario=document.querySelector('.login')
console.log(formulario)



const boton=document.getElementById("ingresar")
console.log(boton)


// variables de registro
const registrou=document.getElementById('regis-user')
const registrop=document.getElementById('pass-user')
console.log(registrop)
console.log(registrou)

boton.addEventListener('click', ()=>{

if(user.value.includes(" ")){
    alert('No se permiten espacios en blanco')
}

else if (registrou.value==="" || registrop.value===""){
    alert('che dale no seas boludo y poné algo al menos la re concha tuya ndea se re enojaba era bait papu tkm <3')
}
    
else if (user.value==="adso2556678" && pass.value==="adso2023"){
    alert(`Bienvenido, ${user.value}`)
    formulario.action="usuario/index.html"

}

else if (user.value===registrou.value && pass.value===registrop.value ){
    formulario.action="usuario/index.html" 
    alert(`Bienvenido, ${user.value}`)
}


else if (user.value==="motoposada" && pass.value==="adso2023"){
    alert(`Bienvenido, ${user.value}`)
    formulario.action="motoposada/index.html"

}
else if (user.value==="administrador" && pass.value==="adso2023"){
    alert(`Bienvenido, ${user.value}`)
    formulario.action="admin/index.html"

}

else{
    alert("Credenciales incorrectas. Por favor, verifique sus datos.")
}
})



