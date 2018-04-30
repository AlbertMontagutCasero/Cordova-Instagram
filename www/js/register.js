$(function () {
    enviarDatos();
});

function enviarDatos() {
    $("#frm").on("submit", function (e) { //e = objeto que ejecuta el evento
        e.preventDefault();
        if (!isCheckFormConditionsCorrect()) {
            return;
        }
        let frm = $(this).serialize(); //coge los datos de las cajas de texto
        $.ajax({
            "method": "POST",
            "url": "https://ajaxinstaalbert.000webhostapp.com/RegistrarUsuario.php",
            "data": frm
        }).done(function (info) {
            //mostrar respuesta del server
            $("#mensaje").html(info);
            setTimeout(function () {
                window.location.href = "index.html"; //Login
            }, 2000);
        });
    });
}

function isCheckFormConditionsCorrect() {
    let $nomUser = $("#reg_username").val();
    let $passwordUser = $("#reg_password").val();
    let $verifypasswordUser = $("#reg_password_confirm").val();
    // Check for passwords equals
    if ($verifypasswordUser !== $passwordUser) {
        alert("Las contraseñas no son iguales");
        return false;
    }
    // verify all camps are writted, verify pass don't need because if it's blank
    // then password user it will also be
    if ($nomUser === "" || $passwordUser === "") {
        alert("Debes llenar todos los campos");
        return false;
    }
    return true;
}

