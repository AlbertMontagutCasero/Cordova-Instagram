$(function ()
{
    if (isLogged() == null)
    {
        window.location.href = "login.html";
    }
    exit();

    $("#form-upload-image").on('submit', (function (e)
    {
        e.preventDefault();
        $.ajax({
            url        : "https://ajaxinstaalbert.000webhostapp.com/UploadImage.php", // Url to which the request is
                                                                                      // send
            type       : "POST",             // Type of request to be send, called as method
            data       : new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and
                                             // values)
            contentType: false,       // The content type used when sending data to the server.
            cache      : false,             // To unable request pages to be cached
            processData: false        // To send DOMDocument or non processed data file it is set to false
        }).done(function (info)
        {
            console.log(info);
        });
    }));
});

function isLogged()
{
    return localStorage.getItem("id_user");
}

function exit()
{
    $("#exit").on("click", function (e)
    {
        e.preventDefault();
        localStorage.removeItem("id_user");
        window.location.href = "login.html";
    });
}

function changeImage()
{
    $("#file").on("change", function ()
    {
        $("#message").empty(); // To remove the previous error message
        var file = this.files[0];
        var imagefile = file.type;
        var match = ["image/jpeg", "image/png", "image/jpg"];
        if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2])))
        {
            $("#message").html("<p id='error'>Please Select A valid Image File</p>" + "<h4>Note</h4>" + "<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
            return false;
        }
    });
}
