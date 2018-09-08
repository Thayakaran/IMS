/**
 * Created by Suganya on 9/7/2018.
 */

    $("#register").click(function (event) {
        event.preventDefault();
        var data = {};
        data.name = $("#username").val();
        data.type = $("input[type='radio'].flat:checked").val();
        data.email = $("#email").val();
        data.password = $("#password").val();

        if (data.email.trim() == "" || data.password == "") {
            swal({title:"Error", text:"Email and Password are Required!", type:"error"});
            return;
        }
        $.ajax({
            url: '/register',
            contentType:"application/json; charset=utf-8",
            data:JSON.stringify(data),
            type:'POST',
            success:function (res) {
                if (res.error){
                    swal({title:"Error", text:res.error, type:"error"});
                }
                else{
                    swal({title:"Success", text:"Your Account Has Been Created. Please Login", type:"success"}).then(function () {
                        location.href = "/";
                    });;
                }
            }
        });
    });
