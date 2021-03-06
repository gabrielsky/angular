var testUtil = require('../../e2e_test_lib/e2e_test/test_util');

describe('ng2 selector benchmark', function () {

  var URL = 'benchmarks/web/compiler/selector_benchmark.html';

  afterEach(testUtil.verifyNoBrowserErrors);

  it('should not throw errors', function() {
    browser.get(URL);
    testUtil.clickAll(['#parse', '#addSelectable', '#match']);
  });

});
