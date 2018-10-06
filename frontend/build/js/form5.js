$(document).ready(function() {

$("#submit_form5").click(function (event) {
    event.preventDefault();
    var formdata = {
        studentId : $("#studentId").val(),
        studentName : $("#studentname").val(),
        employeerName : $("#employername").val(),
        SupervisorName : $("#supervisorname").val(),
        contractVariation : $("#contractVariation").val(),
        performance: {
            volumeOfWork: {
                                status : $("input:checkbox[name='table1[1][]']:checked").val(),
                                note : $("#t1CEO1").val()
                            },
            qualityOfWork: {
                                status : $("input:checkbox[name='table1[2][]']:checked").val(),
                                note : $("#t1CEO2").val()
                            },
            analyticalAbility: {
                                status : $("input:checkbox[name='table1[3][]']:checked").val(),
                                note : $("#t1CEO3").val()
                            },
            abilityToResolveProblems: {
                                status : $("input:checkbox[name='table1[4][]']:checked").val(),
                                note : $("#t1CEO4").val()
                            },
            accuracyAndThroughness: {
                                status : $("input:checkbox[name='table1[5][]']:checked").val(),
                                note : $("#t1CEO5").val()
                            },
            abilityToWorkUnderPressure: {
                                status : $("input:checkbox[name='table1[6][]']:checked").val(),
                                note : $("#t1CEO6").val()
                            },
            oralCommunications: {
                                status : $("input:checkbox[name='table1[7][]']:checked").val(),
                                note : $("#t1CEO7").val()
                            },
            writtenCommunications: {
                                status : $("input:checkbox[name='table1[8][]']:checked").val(),
                                note : $("#t1CEO8").val()
                            },
            originalAndCriticalThinking: {
                                status : $("input:checkbox[name='table1[9][]']:checked").val(),
                                note : $("#t1CEO9").val()
                            },
            abilityToLearn: {
                                status : $("input:checkbox[name='table1[10][]']:checked").val(),
                                note : $("#t1CEO10").val()
                            }				        
        },
        workHabbit:{
            effectiveInOrganizingWork: {
                                status : $("input:checkbox[name='table2[1][]']:checked").val(),
                                note : $("#t2CEO1").val()
                            },
            takesTheInitiative: {
                                status : $("input:checkbox[name='table2[2][]']:checked").val(),
                                note : $("#t2CEO2").val()
                            },
            flexibleToNonRoutineWork: {
                                status : $("input:checkbox[name='table2[3][]']:checked").val(),
                                note : $("#t2CEO3").val()
                            },
            activeAndAlert: {
                                status : $("input:checkbox[name='table2[4][]']:checked").val(),
                                note : $("#t2CEO4").val()
                            },
            attitudeTwardOrganization: {
                                status : $("input:checkbox[name='table2[5][]']:checked").val(),
                                note : $("#t2CEO5").val()
                            },
            teamPlayer: {
                                status : $("input:checkbox[name='table2[6][]']:checked").val(),
                                note : $("#t2CEO6").val()
                            },
            diligenceAndPerseverance: {
                                status : $("input:checkbox[name='table2[7][]']:checked").val(),
                                note : $("#t2CEO7").val()
                            },
            acceptsResponsibility: {
                                status : $("input:checkbox[name='table2[8][]']:checked").val(),
                                note : $("#t2CEO8").val(),
                            }    
        },
        personalCharacter : $("#personalCharacter").val(),
        professionalCharacter : $("#professionalCharacter").val(),
        effectivenessOfInternship : $("#effectivenessOfInternship").val(),
        internshipSuggestion : $("#internshipSuggestion").val(),
        accadamicSuggestion : $("#accadamicSuggestion").val(),
        otherComments : $("#otherComments").val(),
        overallPerformance : $("input:checkbox[name='overall']:checked").val(),
        externalSupervisorName : $("#externalSupervisorName").val(),
        date : $("#date").val()
    };
    
    $.ajax({
        url: '/form5',
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