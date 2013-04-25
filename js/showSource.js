define(['jquery'], function($) {

    var showSource = function(selector) {
        window.alert($(selector).html());
    };


    return { showSource: showSource };

});