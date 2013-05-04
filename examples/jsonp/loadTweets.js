define(['jquery', 'knockout', 'knockout.mapping', 'domReady!'], function ($, ko, mapping) {

  var url = 'http://search.twitter.com/search.json?q=%23xss&callback=?';
  
  $.getJSON(url).done(function (data) {
      var viewModel = mapping.fromJS(data);
      ko.applyBindings(viewModel, $('#tweets').get(0));
  });
});