function htmlEncode(input) {
    return ($('<div/>').text(input).html());
}

var saveFormat = function () {

    var args = Array.prototype.slice.call(arguments);
    var txt = args.shift();

    $.each(args, function (i, item) {
        item = htmlEncode(item);
        txt = txt.replace("{" + i + "}", item);
    });
    return txt;
};