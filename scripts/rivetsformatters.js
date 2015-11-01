/**
 * Created by Eric on 11/1/2015.
 */
rivets.formatters.annual = function(input){
    var num = parseInt(input);
    if(!isNaN(num))return num * 12;

    return 0;
};

rivets.formatters.usd = function(input){
    return '$' + input;
};

rivets.formatters.percentage = function(input){
    return input + "%";
};