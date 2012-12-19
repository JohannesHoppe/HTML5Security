describe('my jQuery plugin', function () {

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = './';
        jasmine.getFixtures().load('jquery.myPlugin.spec.html');
    });

    it('should do something', function() {

        var $div = $('#helloWorld').myPlugin();
        expect($div).toHaveClass("newClass");
    });
});
