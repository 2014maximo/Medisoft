function administrador() {

    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    if((nombre == 'ADMINISTRADOR') && (password == 'asd123')){
        window.open("vistas/administrador.html");
    }else if ((nombre == 'RECEPCIONISTA') && (password == 'asd123')){
        window.open("vistas/recepcionista.html");
    }
}

