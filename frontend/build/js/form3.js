$(document).ready(function() {

    //get student internship details using by student id
    $("#searchBtn").click(function(event){
        event.preventDefault();
         id = $("#sId").val();
        console.log(id);

        ajaxGetStudentDetails(id);
    });



    // DO GET
    function ajaxGetStudentDetails(id){
        $.ajax({
            type : "GET",
            url : "/form3/InternshipInfo/" + id,
            success: function(result){
                console.log("Success: ", result);
                if(result) {
                    $("#sName").val(result.st_name),
                        $("#sAddress").val(result.st_address),
                        $("#sPhoNum").val(result.st_m_phone),
                        $("#sEmail").val(result.st_emails),
                        $("#jTitle").val(result.su_title),
                        $("#Jspecifice").val(result.su_title),
                        $("#JperiodFrom").val(result.int_start_date),
                        $("#required").val(result.int_end_date),
                        $("#SuName").val(result.su_name)
            }
        }
    });
}


});