function htmlEncode(input) {
    return ($('<div/>').text(input).html());
}

var saveFormat = function (txt) {

    $.each(arguments, function (i, item) {
        if (i > 0) {
            item = htmlEncode(item);
            txt = txt.replace("{" + (i - 1) + "}", item);
        }
    });
    return txt;
};