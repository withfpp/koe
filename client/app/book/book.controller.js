'use strict';

angular.module('koeApp')
  .controller('BookListCtrl', function($scope, $state, $window, Book){
    $scope.books = Book.query();  
    //fetch all books. Issues a GET to /api/books
  })


  .controller('BookViewCtrl', function($scope, $stateParams, Book){
    var rightAnswer = [];
    var wrongAnswer = [];
    var usersAnswer = [];

    Book.get({id: $stateParams.id }, function(data){
      //$resource method needs callback..
      init(data);
    });

    function init(data){
      $scope.book = data;
      setAnswers(data);
    }

    function setAnswers(data){
      var quizzes = data.quiz;
      var len = quizzes.length;
      var i;
      for(var i=0; i < len; i++){
        rightAnswer.push(quizzes[i]['answer']);
      }
    }



    $scope.answer = function(book,num){
      book.choose = num;
    }

    $scope.clicked = function (book,val,index){
      book.activeValue = val;
      usersAnswer[index] = val;
      console.log(usersAnswer);
    }

    $scope.submitBook = function (id){

      console.log($scope.book);
    }

    function assessment(book){

    }

  })


  .controller('BookCreateCtrl', function($scope, $state, $stateParams, Book){
    $scope.book = new Book(); 
    // create new book instance.

    $scope.addBook = function(){
      $scope.book.$save(function(){
        $state.go('books'); 
        // on success go back to home
      });
    };
  })