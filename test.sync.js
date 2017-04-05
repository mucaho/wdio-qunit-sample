QUnit.module("Test module - sync");

QUnit.test("Verify title - sync", function(assert) {
    browser.url('test.html');
    var title = browser.getTitle();
    assert.strictEqual(title, 'Title', 'Title should be correctly retrieved.');
});
