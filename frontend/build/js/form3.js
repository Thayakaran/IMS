$(document).ready(function () {

    var stu_ID = "it16015654";

    $("#sId").val(stu_ID);

    ajaxGetStudentDetails(stu_ID);

    loadTableData();

    checkMonth1();

    checkMonth2();

    //get student internship details using by student id
    $("#searchBtn").click(function (event) {
        event.preventDefault();
        id = $("#sId").val();

        stu_ID = id;

        reset();

        $("#sId").val(id);

        loadTableData();

        ajaxGetStudentDetails(id);

        checkMonth1();

        checkMonth2();
    });

    // DO GET
    function ajaxGetStudentDetails(id) {
        $.ajax({
            type: "GET",
            url: "/form3/InternshipInfo/" + id,
            success: function (result) {
                var data = result["data"][0];
                console.log(data);
                if (data) {
                    $("#sName").val(data["st_name"]);
                    $("#sAddress").val(data["st_address"]);
                    $("#sPhoNum").val(data["st_m_phone"]);
                    $("#sEmail").val(data["st_emails"]);
                    $("#jTitle").val(data["su_title"]);
                    $("#Jspecifice").val(data["su_title"]);
                    $("#JperiodFrom").val(data["int_start_date"]);
                    $("#JperiodTo").val(data["int_end_date"]);
                    $("#SuName").val(data["su_name"]);
                }
            }
        });
    }

    $('#TraningAdd').click(function (event) {
        event.preventDefault();

        var studentID = stu_ID;
        var trainingParty = $("#Tparty");
        var description = $("#Tdescription");
        var from = $("#Tfrom");
        var to = $("#Tto");

        var trainingInformation = {
            studentID: studentID,
            trainingParty: trainingParty.val(),
            trainingDescription: description.val(),
            dateFrom: from.val(),
            dateTo: to.val()
        };

        $.ajax({
            url: "/form3/InternalTrainingInfo/",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(trainingInformation),
            success: function (response) {
                console.log(response);
                loadTableData();
            }
        });
    });

    $("#month1Button").click(function (event) {
        event.preventDefault();

        var month1Info = {
            monthNo: 1,
            studentID: stu_ID,
            taskSummary: $("#taskSummary1").val(),
            detailedDescription: $("#detDesc1").val(),
            remarksAndCretification: $("#remarks1").val(),
            isCertified: $('#chkSup1').is(":checked")
        };

        $.ajax({
            url: "/form3/task/",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(month1Info),
            success: function (response) {
                console.log(response);
            }
        });
    });

    $("#month2Button").click(function (event) {
        event.preventDefault();

        var month1Info = {
            monthNo: 2,
            studentID: stu_ID,
            taskSummary: $("#taskSummary2").val(),
            detailedDescription: $("#detDesc2").val(),
            remarksAndCretification: $("#remarks2").val(),
            isCertified: $('#chkSup2').is(":checked")
        };

        $.ajax({
            url: "/form3/task/",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(month1Info),
            success: function (response) {
                console.log(response);
            }
        });
    });

    function loadTableData() {
        $.ajax({
            url: "/form3/InternalTrainingInfo/" + stu_ID,
            type: "GET",
            contentType: "application/json",
            success: function (response) {

                var tbody = $("#trainingTable");

                tbody.html("");

                response["data"].forEach(function (trainingInfo) {
                    // console.log(trainingInfo["trainingParty"]);
                    tbody.append("<tr>\
                                   <td class='id'>"+ trainingInfo["trainingParty"] + "</td>\
                           <td>"+ trainingInfo["trainingDescription"] + "</td>\
                           <td>"+ trainingInfo["dateFrom"] + "</td>\
                           <td>"+ trainingInfo["dateTo"] + "</td>\
                       </tr>")
                });
            }
        });

    }

    function checkMonth1() {

        $.ajax({
            url: "/form3/tasks/" + stu_ID,
            type: "GET",
            contentType: "application/json",
            success: function (response) {

                var data = response["data"];

                data.forEach(function (taskData) {

                    if (taskData["monthNo"] == 1) {

                        $('#taskSummary1').val(taskData["taskSummary"]);
                        $('#detDesc1').val(taskData["detailedDescription"]);
                        $('#remarks1').val(taskData["remarksAndCretification"]);
                        $('#chkSup1').attr('checked', true);

                        $("#taskSummary1").attr("readonly", "readonly");
                        $("#detDesc1").attr("readonly", "readonly");
                        $("#remarks1").attr("readonly", "readonly");
                        $("#chkSup1").attr("disabled", true);
                        $("#month1Button").attr("disabled", "disabled");
                    }

                });
            }

        });

    }


    function checkMonth2() {

        var status1 = true;

        $.ajax({
            url: "/form3/tasks/" + stu_ID,
            type: "GET",
            contentType: "application/json",
            success: function (response) {

                var data = response["data"];

                data.forEach(function (taskData) {

                    if (taskData["monthNo"] == 2) {

                        $('#taskSummary2').val(taskData["taskSummary"]);
                        $('#detDesc2').val(taskData["detailedDescription"]);
                        $('#remarks2').val(taskData["remarksAndCretification"]);
                        $('#chkSup2').attr('checked', true);

                        $("#taskSummary2").attr("readonly", "readonly");
                        $("#detDesc2").attr("readonly", "readonly");
                        $("#remarks2").attr("readonly", "readonly");
                        $("#chkSup2").attr("disabled", true);
                        $("#month2Button").attr("disabled", "disabled");

                    }

                });
            }

        });

    }

    function reset() {

        $('#demo-form2')[0].reset();

        $("#taskSummary1").removeAttr("readonly");
        $("#detDesc1").removeAttr("readonly");
        $("#remarks1").removeAttr("readonly");
        $("#chkSup1").removeAttr("disabled");
        $("#month1Button").removeAttr("disabled");

        $("#taskSummary2").removeAttr("readonly");
        $("#detDesc2").removeAttr("readonly");
        $("#remarks2").removeAttr("readonly");
        $("#chkSup2").removeAttr("disabled");
        $("#month2Button").removeAttr("disabled");

    }


});