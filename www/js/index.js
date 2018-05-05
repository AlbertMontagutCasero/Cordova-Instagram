$(function ()
{
    if (isLogged() == null)
    {
        window.location.href = "login.html";
    }
    goToExit();
    getAllHashtags();
    goToMyPhotoView();
    goUploadPhoto();
});

function isLogged()
{
    return localStorage.getItem("id_user");
}

function goToExit()
{
    $("#exit").on("click", function (e)
    {
        localStorage.removeItem("id_user");
        window.location.href = "login.html";
    });
}

function goUploadPhoto()
{
    $("#upload-photo").on("click", function (e)
    {
        window.location.href = "upload-photo.html";
    });
}

function goToMyPhotoView()
{
    $("#my-photo").on("click", function (e)
    {
        window.location.href = "my-photo.html";
    });
}

function getAllHashtags()
{

    $.ajax({
        "method": "POST",
        "url"   : "https://ajaxinstaalbert.000webhostapp.com/GetHashTag.php",
    }).done(function (info)
    {
        console.log(info);

        //mostrar respuesta del server

        var message = JSON.parse(info);
        var html = `<table><tr><th>HashTag</th>`;
        for (var i in message.data)
        {
            html += `<tr>
                <td><a href="hashtag.html?id=${message.data[i].id}">${message.data[i].hash_tag_name}</a></td>
                </tr>`;

        }
        html += `</table>`;
        $("#hashtag-list-table").html(html);

    });

}
