'use strict';

angular.module('koeApp')
  .controller('BookListCtrl', function($scope, $state, $window, Book){
    Book.query(function(data){
      init(data);
    });  

    function init(data){
      $scope.books = data;
    }
    //fetch all books. Issues a GET to /api/books
  })


  .controller('BookViewCtrl', function($scope, $stateParams, Book){
    var answer = [];
    var wrongAnswer = [];
    var usersAnswer = [];
    var rightAnswer = [];
    var hits = 0;

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
        answer.push(quizzes[i]['answer']);
      }
    }

    $scope.answer = function(book,num){
      book.choose = num;
    }

    $scope.clicked = function (book, val, quizIndex, choiceIndex){
      // push the user answers array. index equals to index of quiz.
      book.activeValue = val;
      usersAnswer[quizIndex] = choiceIndex;
    }

    $scope.submitBook = function (book){
      assessment(book);
      // after assess and submit data to DB, reset the hits count.
      hits = 0;
    }

    function assessment(book){
      var i,
          len = answer.length;

      //save the quiz index    
      for(i = 0; i< len; i++){
        if(usersAnswer[i] === answer[i]){
          rightAnswer.push(i)
          hits++;
        }else{
          wrongAnswer.push(i)
        }
      }

      saveResultToUser(wrongAnswer);
    }

    
    function saveResultToUser(wrongAnswer){
      console.log("맞은 개수 " +hits);
      //save wrong answer book data.
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