(function ($) {

    var doubleEncodeHTMLentities = function (text) {

        text = text.replace(/&/g, "_AMP_");
        text = text.replace(/</g, "_LT_");
        text = text.replace(/>/g, "_GT_");
        text = text.replace(/"/g, "_QUOT_");

        return text;
    };

    var replaceSection = function(section) {
        $(section).find('span[data-show-iframe-source]').each(function() {

            var target = $(this).data('show-iframe-source');
            var myOwnHtml = this.outerHTML;

            var iframeContent = $(target).contents().find('body').html();

            if (iframeContent) {
                iframeContent = doubleEncodeHTMLentities(iframeContent).trim();
            } else {
                iframeContent = "error while parsing HTML";
            }

            var text = section.innerHTML;
            text = text.replace(myOwnHtml, iframeContent);
            section.innerHTML = text;
        });
    };

    var showSource = function () {

        var sections = document.querySelectorAll( '[data-markdown]' );

        for (var i = 0, len = sections.length; i < len; i += 1) {
            var section = sections[i];
            replaceSection(section);
        }
    };

    showSource();

})(window.jQuery);