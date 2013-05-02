define(['jquery', 'knockout', 'knockout.mapping'], function($, ko, mapping) {
  $(function() {
    var url = 'http://search.twitter.com/search.json?q=%23dnc13&callback=?';
    $.getJSON(url).done(function (data) {
      var viewModel = mapping.fromJS(data);
      ko.applyBindings(viewModel, $('#tweets').get(0));
    });
  });
});