let btnLogin = document.querySelector(".subbt");
btnLogin.addEventListener("click", ingresar);

let usuario = {
    "email": "olfa22@grupo4.com",
    "password": "mipassword"
};

async function ingresar() {
    console.log("Funcion ingresar");
    // let container = document.querySelector(".form");
    // voy a buscar los valores cargados en los inputs
    let correo = document.querySelector('.mail').value;
    let password = document.querySelector('.pwd').value;

    //observo los valores con los q intenta ingresar
    // console.log(correo);
    // console.log(password);
    
     //VERSION PRUEBA FRONT
        // if (correo === usuario.email && password === usuario.password){
        //     container.innerHTML = `<h2>Bienvenido ${correo}</h2>`
        // }
        // else{
        //     alert();
        // }
    

    // if(correo === "" && password === ""){
    //     correo = "micorreo@yo.com";
    //     password = "mipassword";
    // }
    
    let respuesta = await fetch('http://localhost:3000/login/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (await respuesta.json()) {
        console.log("Bienvenido/a ",users[0].email);
        setTimeout ("redireccionar()", 5000); //tiempo expresado en milisegundos
    }

    ///////////////////////////// codigo mock //////////////////////////////
    // try {
    //     let response = await fetch("http://localhost:3000/mock/mockUsr.json");
    //     if (response.ok) {
    //         let t = await response.json();
    //         let users = t.usuarios;
    //         console.log();
    //         if (correo === users[0].email && password === users[0].password) {
    //             console.log("ingreso al sistema");
    //             console.log("Bienvenido/a ",users[0].email);
    //             setTimeout ("redireccionar()", 5000); //tiempo expresado en milisegundos
    //         }
    //         else {
    //             console.log("DATOS INCORRECTOS");
    //         }
    //     }
    //     else
    //         container.innerHTML = `<h2>Error al cargar la pagina</h2>`
    // }
    // catch (response) {
    //     container.innerHTML = `<h2>${response}</h2>`;
    // };
}

function redireccionar(){
    // guardo datos de la sesion de usuario
    window.sessionStorage.setItem("userLogged", true);
    window.sessionStorage.setItem("user", user);
    window.locationf="http://localhost:3000";
  } 
  

ingresar();