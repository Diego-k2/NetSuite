/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define([],

    function (dialog) {

        /**
         * Function to be executed after page is initialized.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
         *
         * @since 2015.2
         */
        function pageInit(scriptContext) {
            

            var moedaPrincipal = scriptContext.currentRecord.getValue({ fieldId: "currency" }); //pegando o id de um campo
            var textMoedaPrincipal = scriptContext.currentRecord.getText({fieldId: "currency"}); //pega o valor em String da lista 

            scriptContext.currentRecord.setValue({
                fieldId: "custentity_esc_annual_revenue",
                value: moedaPrincipal
            }) //Passa valor para o field 


            // alert(moedaPrincipal + " " + textMoedaPrincipal);


        } 

        return {
            pageInit: pageInit
        };

    });
