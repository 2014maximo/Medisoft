function administrador() {

    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    if((usuario == 'ADMINISTRADOR') && (password == 'asd123')){
        window.open("vistas/administrador.html");
    }else if ((usuario == 'RECEPCIONISTA') && (password == 'asd123')){
        window.open("vistas/recepcionista.html");
    }
}

function web(){
    window.open("vistas/web.html");
}
function web_intro(){
    window.open("vistas/web.html");
}
function login(){
    window.open("../index.html");
}

