'use strict';

describe('Service: bookService', function () {

  // load the service's module
  beforeEach(module('koeApp'));

  // instantiate service
  var bookService;
  beforeEach(inject(function (_bookService_) {
    bookService = _bookService_;
  }));

  it('should do something', function () {
    expect(!!bookService).toBe(true);
  });

});
