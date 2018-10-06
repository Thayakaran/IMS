const mongoose = require('./DBConnection');

const  Schema = mongoose.Schema;

const Form5Schema = new Schema({
        studentId: String,
        studentName: String,
        employeerName: String,
        SupervisorName: String,
        contractVariation: String,
        performance: {
            volumeOfWork: {
                                status:String,
                                note:String
                            },
            qualityOfWork: {
                                status:String,
                                note:String
                            },
            analyticalAbility: {
                                status:String,
                                note:String
                            },
            abilityToResolveProblems: {
                                status:String,
                                note:String
                            },
            accuracyAndThroughness: {
                                status:String,
                                note:String
                            },
            abilityToWorkUnderPressure: {
                                status:String,
                                note:String
                            },
            oralCommunications: {
                                status:String,
                                note:String
                            },
            writtenCommunications: {
                                status:String,
                                note:String
                            },
            originalAndCriticalThinking: {
                                status:String,
                                note:String
                            },
            abilityToLearn: {
                                status:String,
                                note:String
                            }				        
        },
        workHabbit:{
            effectiveInOrganizingWork: {
                                status:String,
                                note:String
                            },
            takesTheInitiative: {
                                status:String,
                                note:String
                            },
            flexibleToNonRoutineWork: {
                                status:String,
                                note:String
                            },
            activeAndAlert: {
                                status:String,
                                note:String
                            },
            attitudeTwardOrganization: {
                                status:String,
                                note:String
                            },
            teamPlayer: {
                                status:String,
                                note:String
                            },
            diligenceAndPerseverance: {
                                status:String,
                                note:String
                            },
            acceptsResponsibility: {
                                status:String,
                                note:String
                            }    
        },
        personalCharacter: String,
        professionalCharacter: String,
        effectivenessOfInternship: String,
        internshipSuggestion: String,
        accadamicSuggestion: String,
        otherComments: String,
        overallPerformance: String,
        externalSupervisorName: String,
        date: String

});

mongoose.model('form5' , Form5Schema);
module.exports = mongoose;