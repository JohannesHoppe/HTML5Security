// From https://gist.github.com/1343518
// Modified by Hakim to handle Markdown indented with tabs
(function() {

    if( typeof Showdown === 'undefined' ) {
        throw 'The reveal.js Markdown plugin requires Showdown to be loaded';
    }

    var sections = document.querySelectorAll( '[data-markdown]' );

    for( var i = 0, len = sections.length; i < len; i++ ) {
        var section = sections[i];
        var notes = section.querySelector( 'aside.notes' );

        var template = section.querySelector( 'script' );

        // strip leading whitespace so it isn't evaluated as code
        var text = ( template || section ).innerHTML;

        var leadingWs = text.match(/^\n?(\s*)/)[1].length,
            leadingTabs = text.match(/^\n?(\t*)/)[1].length;

        if( leadingTabs > 0 ) {
            text = text.replace( new RegExp('\\n?\\t{' + leadingTabs + '}','g'), '\n' );
        }
        else if( leadingWs > 1 ) {
            text = text.replace( new RegExp('\\n? {' + leadingWs + '}','g'), '\n' );
        }

        // TODO: HACKED
        // remove double-encoded HTML entities
        text = text.replace(/_AMP_/g, "&");
        text = text.replace(/_LT_/g, "<");
        text = text.replace(/_GT_/g, ">");
        text = text.replace(/_QUOT_/g, "\"");

        section.innerHTML = (new Showdown.converter()).makeHtml(text);

        if( notes ) {
            section.appendChild( notes );
        }
        
        $("code[fragment]").addClass("fragment");
        $("code[small]").addClass("small");
    }
})();