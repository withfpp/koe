'use strict';

angular.module('koeApp')
  .service('bookService', ['$http',function ($http) {
    var bookService = {};
    
    bookService.getBooks = function (){
      return $http.get('/api/books');
    }

    bookService.createBook = function (book){
      return $http.post('/api/books', book);
    }


    return bookService; 
  }])

  .filter("numToAlpha", function(){
    return function(input){
      var eng ='abcdefghijklmnopqrstuvwxyz'[input];
      return '(' + eng.toUpperCase() + ') ';
    }
  })
