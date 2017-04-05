QUnit.module("Test module - async");

QUnit.test("Verify title - async", function(assert) {
    return browser
        .url('test.html')
        .getTitle()
        .then(function(title) {
            assert.strictEqual(title, 'Title', 'Title should be correctly retrieved.');
        });
});
