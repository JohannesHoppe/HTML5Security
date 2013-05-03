describe("saveFormat", function () {

    var original = '<a title="{0}">Test</a>';

    it("should replace quotes", function () {
        var expected = '<a title="&quot;">Test</a>';
        var formated = saveFormat(original, '"');
        expect(formated).toEqual(expected);
    });
});