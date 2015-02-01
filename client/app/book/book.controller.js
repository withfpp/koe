'use strict';

angular.module('koeApp')
  .controller('BookCtrl', ['$scope', 'bookService', function ($scope, bookService) {

    $scope.books = [];
    $scope.convert = convert;

    bookService.getBooks().success(function (books){
      $scope.books = books;
    })

    function convert (choice){
      var eng ='abcdefghijklmnopqrstuvwxyz'[choice - 0];
      return eng.toUpperCase();
      // var c = choice;
      // var newObj = {};
      // var i;
      // var len = arr.length;
      // for(i = 0; i < len; i++ ){
      //   newObj[arr[i]] = c[i];
      // }
      // return newObj;
    }

  }])
