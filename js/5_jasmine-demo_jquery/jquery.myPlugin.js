describe('test with jasmine-jquery', function () {
    it('should load many fixtures into DOM', function () {
        loadFixtures('my_fixture_1.html', 'my_fixture_2.html');
        expect($('#jasmine-fixtures')).toSomething();
    });

    it('should only return fixture', function () {
        var fixture = readFixtures('my_fixture_3.html');
        expect(fixture).toSomethingElse();
    });
});