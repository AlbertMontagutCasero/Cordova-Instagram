$(function () {
    if(isLogged() != null){
        window.location.href = "index.html";
    }
    enviarDatos();
});

function isLogged(){
    return localStorage.getItem("username");
}

function enviarDatos() {
    $("#login-form").on("submit", function (e)
    {
        e.preventDefault();
        if(isEmptyFiles()){
            return;
        }

        var frm = $(this).serialize(); //coge los datos de las cajas de texto
        console.log(frm);
        $.ajax({
            "method": "POST",
            "url": "https://ajaxinstaalbert.000webhostapp.com/LogIn.php",
            "data": frm
        }).done(function (info) {
            console.log(info);
            //mostrar respuesta del server
            if (info == 1) {
                localStorage.setItem("username", $("#lg_username").val());
                window.location.href = "index.html";

            } else {
                alert("incorrect Username or password");
            }
        });
    });
}


function isEmptyFiles() {
    var $nomUser = $("#lg_username").val();
    var $passwordUser = $("#lg_password").val();

    if ($passwordUser == "" || $nomUser == "") {
        alert("Debes llenar todos los campos");
        return true;
    }
    return false;
}
