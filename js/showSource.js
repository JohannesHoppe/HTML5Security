define(['jquery'], function() {

    var showSource = function(selector) {
        alert($(selector).html());
    };


    return { showSource: showSource };

});

window.r = window.require;