$(function () {
    if(isLogged() == null){
      window.location.href = "login.html";
    }
    exit();

});

function isLogged(){
    return localStorage.getItem("username");
}

function exit() {
    $("#exit").on("click", function (e){
        localStorage.removeItem("username");
        window.location.href = "login.html";
    });
}

