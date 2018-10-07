$(document).ready(function() {

    $("#submit_form1").click(function (event) {
        event.preventDefault();
        var formdata = {};

        formdata.studentId= $("#st_Name").val();
        formdata.studentName= $("#st_id").val();
        formdata.studentEmail= $("#st_Email").val();
        formdata.studentPhone= $("#st_phone").val();
        formdata.employerName= $("#emp_name").val();
        formdata.supervisorName= $("#su_name").val();
        formdata.degreeTitle= $("#degeree_tittle").val();
        formdata.specialization= $("#specialition").val();
        formdata.duration= $("#internship_duration").val();
        formdata.credits= $("#num_credit").val();
        formdata.title= $("#internshi_tittle").val();
        formdata.commentsBenefits= $("#internship_benifits").val();
        formdata.commentsPerformance= $("#stu_performance").val();
        formdata.monthlyProgress= $("#Monthly_progress").val();
        formdata.internshipReport= $("#internshi_report").val();
        formdata.viva= $("#viva").val();
        formdata.total= $("#total").val();
        formdata.grade= $("#final_grade").val();
        formdata.examminer= $("#exa_name").val();

        $.ajax({
            url: '/form7',
            contentType:"application/json; charset=utf-8",
            data:JSON.stringify(formdata),
            type:'POST',
            success:function (res) {
                console.log(res.error);
                if (res.success){
                    swal({title:"Success", text:"Your Form 7 Submitted successfully.", type:"success"}).then(function () {
                        location.href = "home.html";
                    });;
                }
                if (res.error){
                    if (res.error){
                        swal({title:"Error", text:res.error.message, type:"error"});
                    }
                    else if (res.error){
                        swal({title:"Error", text:res.error, type:"error"});
                    }
                }
            }
        });
    });

    $("#cancelbutton").click(function (event) {
        location.href = "home.html";
    });

});