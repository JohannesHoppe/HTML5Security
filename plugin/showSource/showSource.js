(function ($) {

    var startSnip = "<!--START-->";
    var stopSnip = "<!--STOP-->";

    var extractSnippet = function(data) {
        var match = data.match(startSnip + "([^]*?)" + stopSnip);
                  
        if (match !== null) {
            return match[1].trim();
        }

        // fallback, if no snippet was placed
        return data;
    };

    var httpRequest = function(url) {
        return $.ajax({
            url: url,
            dataType: "text"
        });
    };

    var replaceCode = function() {
        $(document.body).find('code[data-show-source]').each(function () {

            var code = this;
            var url = $(this).data('show-source');
            
            httpRequest(url).done(function (data) {

                var snippet = extractSnippet(data);
                var snippetEncoded = $('<div />').text(snippet).html();
                code.innerHTML = snippetEncoded;
                
                // re-render syntax highlighting
                if (typeof window.hljs == "object") {
                    window.hljs.highlightBlock(code);
                }
            });
        });
    };
    
    var insertHtml = function () {
        $(document.body).find('div[data-insert-source]').each(function () {

            var code = this;
            var url = $(this).data('insert-source');

            httpRequest(url).done(function (data) {

                var snippet = extractSnippet(data).trim();
                code.innerHTML = snippet;
            });
        });
    };

    $(function() {
        replaceCode();
        insertHtml();
    });

})(window.jQuery);