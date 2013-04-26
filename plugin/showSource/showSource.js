(function ($) {

    var startSnip = "<!--START-->";
    var stopSnip = "<!--STOP-->";

    var extractSnippet = function(data) {
        var match = data.match(startSnip + "([^]*?)" + stopSnip);
        return match[1].trim();
    };

    var replaceCode = function() {
        $(document.body).find('code[data-show-source]').each(function () {

            var code = this;
            var target = $(this).data('show-source');
            
            $.get(target).done(function (data) {

                var snippet = extractSnippet(data);
                var snippetEncoded = $('<div />').text(snippet).html();
                code.innerHTML = snippetEncoded;
            });
        });
    };

    $(function() {
        replaceCode();
    });

})(window.jQuery);