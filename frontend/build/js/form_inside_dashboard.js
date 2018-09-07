$(document).ready(function(){
    //form 1
    $('#form_I_1a').click(function () {
        $("#forms").load('frontend/form1.html', function() {
            $.getScript('frontend/build/js/form1.js');
        });
    }); 
    $('#form_I_1b').click(function () { 
        $("#forms").load('frontend/form1.html', function() {
            $.getScript('frontend/build/js/form1.js');
        });
    }); 

    // form 3
    // $('#form_I_3a').click(function () { 
    //     $("#forms").load('frontend/form_validation.html'); 
    // }); 
    // $('#form_I_3b').click(function () { 
    //     $("#forms").load('frontend/form_validation.html'); 
    // }); 
});