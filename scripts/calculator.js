/**
 * Created by Eric on 11/1/2015.
 */

$(document).ready(function(){
    var model = {
        values: {
            gas: 0,
            water: 0,
            electricity: 0,
            total: 0,
            monthlySavings: 0,
            annualSavings: 0,
            percentageSavings: 0,
            hersScoreOffset: 2635
        }
    };


    var view = rivets.bind($("body"), model);

    watch(model, "values", function(){
       model.values.total = parseInt(model.values.gas) + parseInt(model.values.water) + parseInt(model.values.electricity);
        calculate_Savings()
    });

    $('#hersScore').change(function(){
        model.values.hersScoreOffset = $(this).val();
    });

    function calculate_Savings() {
        var anValue = $('#annualTotal').text().substring(1);
        var moneyBenefit = '0.00';
        var moneyBenefitMonth = '0.00';
        var interestBenefit = '0';
        var delta = parseFloat(anValue) - parseFloat(model.values.hersScoreOffset);
        if(delta > 0) {
            moneyBenefit = delta;
            moneyBenefitMonth = Math.round(moneyBenefit/12);
            interestBenefit = parseInt((delta/parseFloat(anValue))*100);
        }
        model.values.percentageSavings = interestBenefit;
        model.values.monthlySavings = moneyBenefitMonth;
        model.values.annualSavings = moneyBenefit;
    }
});

