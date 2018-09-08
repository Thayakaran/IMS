$(document).ready(function () {
    if (localStorage.getItem('token')) {
        window.location.href = "frontend/home.html";
        return;
    }

    $("#login").click(function (event) {
        event.preventDefault();
        var data = {};

        data.type = $("input[type='radio'].flat:checked").val();

        data.email = $("#email").val();
        data.password = $("#password").val();

        if (data.email.trim() == "" || data.password == "") {

                swal({title: "Error", text: " Email and Password are Required!" , type: "error"});

            return;
        }
        $.ajax({
            url: 'http://localhost:3000/login',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            type: 'POST',
            success: function (res) {
                console.log(res)
                if (res.error) {
                    swal({title: "Error", text: res.error, type: "error"});
                }
                else {
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('name', res.name);
                    localStorage.setItem('type', res.type);
                    // if(data.type == "student")
                    // {
                        location.href = "frontend/home.html";
                    // }

                }
            }
        });
    });
})