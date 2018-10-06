$(document).ready(function(){
    var username = localStorage.getItem('name');
    document.getElementById("userwelcome").innerHTML = username;
    document.getElementById("username").innerHTML = username;

    $("#logout1, #logout2").click(function () {
        localStorage.clear();
        location.href = "/";
      });
    //form 1
    $('.form_I_1').click(function () {
        $("#forms").load('form1.html', function() {
            $.getScript('/build/js/form1.js');
        });
      });

    // form 3 
    // $('.form_I_3').click(function () {
    //     $("#forms").load('form3.html', function() {
    //         $.getScript('/build/js/form3.js');
    //     });
    //   });

    //form 5
    $('.form_I_5').click(function () {
        $("#forms").load('form5.html', function() {
            $.getScript('/build/js/form5.js');
        });
      });
});