define(['jquery', 'knockout', 'knockout.mapping'], function($, ko, mapping) {

    $(function() {

        $.getJSON('http://search.twitter.com/search.json?q=%23dnc13&callback=?&callback=?').done(function(data) {
            var viewModel = mapping.fromJS(data);
            ko.applyBindings(viewModel, $('#tweets').get(0));
        });
    });

});