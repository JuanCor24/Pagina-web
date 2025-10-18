let menuVisible = false;

/*funcion para mostrar y desaparecer el menu */


function mostrarOcultarMenu(){
    if(menuVisible == true){
        /* Esto busca en el HTML siempre con document y class list devuelve la
         lista de ese elemento en este caso se eliminan todas*/
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else{
        // es como un cambio de clases osea se agrega la palabra responsive para que se 
        // vuelva
        //otra clase y adquiera ese comportamiento
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu cuando se selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distance = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss"); 
        habilidades[2].classList.add("cmasmas"); 
        habilidades[3].classList.add("gsap"); 
        habilidades[4].classList.add("kotlin");
        habilidades[5].classList.add("python");  
        habilidades[6].classList.add("teamwork");  
        habilidades[7].classList.add("scrummaster");    
    }
}


// animaciones de las habilidades 

//deteccion de scrolling

window.onscroll = function(){
    efectoHabilidades();
}
