'use strict';

angular.module('koeApp')
  .controller('BookRegisterCtrl', function ($scope, bookService) {
    $scope.books = bookService.getBooks();
    $scope.createBook = bookService.createBook();
  });
