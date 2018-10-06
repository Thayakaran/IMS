const mongoose = require('../Configs/DBSchema_form5');
const configs = require('../Configs/configs');

const Form5Schema = mongoose.model('form5');



module.exports.submit_form5 = function (form5, callback) {
    if (form5.studentId == undefined){
        callback(null, "All Fields Are Required");
        return;
    }
    let newForm5Schema = new Form5Schema({

        studentId: form5.studentId,
        studentName: form5.studentName,
        employeerName: form5.employeerName,
        SupervisorName: form5.SupervisorName,
        contractVariation: form5.contractVariation,
        performance: {
            volumeOfWork: {
                                status:form5.performance.volumeOfWork.status,
                                note:form5.performance.volumeOfWork.note
                            },
            qualityOfWork: {
                                status:form5.performance.qualityOfWork.status,
                                note:form5.performance.qualityOfWork.note
                            },
            analyticalAbility: {
                                status:form5.performance.analyticalAbility.status,
                                note:form5.performance.analyticalAbility.note
                            },
            abilityToResolveProblems: {
                                status:form5.performance.abilityToResolveProblems.status,
                                note:form5.performance.abilityToResolveProblems.note
                            },
            accuracyAndThroughness: {
                                status:form5.performance.accuracyAndThroughness.status,
                                note:form5.performance.accuracyAndThroughness.note
                            },
            abilityToWorkUnderPressure: {
                                status:form5.performance.abilityToWorkUnderPressure.status,
                                note:form5.performance.abilityToWorkUnderPressure.note
                            },
            oralCommunications: {
                                status:form5.performance.oralCommunications.status,
                                note:form5.performance.oralCommunications.note
                            },
            writtenCommunications: {
                                status:form5.performance.writtenCommunications.status,
                                note:form5.performance.writtenCommunications.note
                            },
            originalAndCriticalThinking: {
                                status:form5.performance.originalAndCriticalThinking.status,
                                note:form5.performance.originalAndCriticalThinking.note
                            },
            abilityToLearn: {
                                status:form5.performance.abilityToLearn.status,
                                note:form5.performance.abilityToLearn.note
                            }				        
        },
        workHabbit:{
            effectiveInOrganizingWork: {
                                status:form5.workHabbit.effectiveInOrganizingWork.status,
                                note:form5.workHabbit.effectiveInOrganizingWork.note
                            },
            takesTheInitiative: {
                                status:form5.workHabbit.takesTheInitiative.status,
                                note:form5.workHabbit.takesTheInitiative.note
                            },
            flexibleToNonRoutineWork: {
                                status:form5.workHabbit.flexibleToNonRoutineWork.status,
                                note:form5.workHabbit.flexibleToNonRoutineWork.note
                            },
            activeAndAlert: {
                                status:form5.workHabbit.activeAndAlert.status,
                                note:form5.workHabbit.activeAndAlert.note
                            },
            attitudeTwardOrganization: {
                                status:form5.workHabbit.attitudeTwardOrganization.status,
                                note:form5.workHabbit.attitudeTwardOrganization.note
                            },
            teamPlayer: {
                                status:form5.workHabbit.teamPlayer.status,
                                note:form5.workHabbit.teamPlayer.note
                            },
            diligenceAndPerseverance: {
                                status:form5.workHabbit.diligenceAndPerseverance.status,
                                note:form5.workHabbit.diligenceAndPerseverance.note
                            },
            acceptsResponsibility: {
                                status:form5.workHabbit.acceptsResponsibility.status,
                                note:form5.workHabbit.acceptsResponsibility.note
                            }    
        },
        personalCharacter: form5.personalCharacter,
        professionalCharacter: form5.professionalCharacter,
        effectivenessOfInternship: form5.effectivenessOfInternship,
        internshipSuggestion: form5.internshipSuggestion,
        accadamicSuggestion: form5.accadamicSuggestion,
        otherComments: form5.otherComments,
        overallPerformance: form5.overallPerformance,
        externalSupervisorName: form5.externalSupervisorName,
        date: form5.date

    });
    newForm5Schema.save(function (err, data) {
        if (err){
            callback(err);
            return;
        }
        callback(null, "Successfully Submited");
    });
}
