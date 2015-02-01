angular.module('koeApp')
  .service('bookService', function ($scope, $http){
    
    var bookService = {};
    
    bookService.getBooks = function (){
      $http.get('/api/books').success(function (books){
        return books;
      }).error(function (err){
        console.log(err);
      });
    }

    bookService.createBook = function (book){
      $http.post('/api/books', book).success(function (book){
        return book;
      }).error(function (err){
        console.log(err);
      })
    }


    return bookService;
    
  })
