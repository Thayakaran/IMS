$(document).ready(function() {

$("#submit_form1").click(function (event) {
    event.preventDefault();
    var formdata = {};

    formdata.st_id = $("#sId").val();
    formdata.st_name = $("#sName").val();
    formdata.st_address = $("#Address").val();
    formdata.st_h_phone = $("#Home_Phone").val();
    formdata.st_m_phone = $("#Mobile_Phone").val();
    formdata.st_emails = $("#st_Email_Address").val();
    formdata.st_semester = $("#Semester").val();
    formdata.st_year = $("#Year").val();
    formdata.st_cgpa = $("#CGPA").val();
    formdata.e_name = $("#Employers_Name").val();
    formdata.e_address = $("#Employers_Address").val();
    formdata.su_name = $("#Supervisors_Name").val();
    formdata.su_phone = $("#Supervisors_Phone").val();
    formdata.su_title = $("#Supervisors_Title").val();
    formdata.su_email = $("#Supervisors_Email").val();
    formdata.int_start_date = $("#s_date").val();
    formdata.int_end_date = $("#e_date").val();
    formdata.hrs_per_week = $("#hrs").val();
    formdata.expected_task = $("#exp_task").val();
    formdata.learning_outcome = $("#loc").val();
    formdata.ext_su_name = $("#ext_su_name").val();
    formdata.date = $("#date").val();

    if (formdata.st_id == "" || formdata.st_name == "" || formdata.st_address == "" || formdata.st_h_phone == "" || formdata.st_m_phone == "" || formdata.st_emails == "" || formdata.st_semester == "" || formdata.st_year == "" || formdata.st_cgpa == "" || formdata.e_name == "" || formdata.e_address == "" || formdata.int_start_date == ""  || formdata.int_end_date == "" || formdata.hrs_per_week == "" || formdata.expected_task == "" || formdata.st_h_phone == "" || formdata.st_h_phone == "" || formdata.st_h_phone == "" || formdata.st_h_phone == "") {
        swal({title:"Error", text:"All field are required", type:"error"});
        return;
    }

    $.ajax({
        url: '/form1',
        contentType:"application/json; charset=utf-8",
        data:JSON.stringify(formdata),
        type:'POST',
        success:function (res) {
            if (res.error){
                swal({title:"Error", text:res.error, type:"error"});
            }
            else{
                swal({title:"Success", text:"Your Form 1 Submitted successfully.", type:"success"}).then(function () {
                    location.href = "home.html";
                });;
            }
        }
    });
});

$("#cancelbutton").click(function (event) {
    location.href = "home.html";
});

});