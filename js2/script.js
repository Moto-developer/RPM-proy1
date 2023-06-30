// const usuario=document.getElementById("usuario")
// const contraseña=document.getElementById("exampleInputPassword1");

// console.log(usuario)
// console.log(contraseña)
function iniciarSesion() {
    var usuarioInput = document.getElementById('usuario');
    var passwordInput = document.getElementById('password');
    var usuario = usuarioInput.value.trim();
    var password = passwordInput.value.trim();
  
    if (usuario === "adso2556678" && password === "adso2023") {
      
      $('#myModal').modal('hide'); // Cerrar el modal
      window.location.href = "http://127.0.0.1:5500/Rpm/index.html#Home";      // Aquí puedes realizar más acciones, como redirigir a otra página
    } else {
      alert("Has ingresado un dato incorrecto.");
      // Aquí puedes realizar más acciones, como limpiar los campos del formulario
    }
    
    
  }
  