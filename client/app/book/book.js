'use strict';

angular.module('koeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('books', {
        url: '/books',
        templateUrl: 'app/book/book.html',
        controller: 'BookListCtrl'
      })
      .state('viewBook', {
        url: '/books/:id/view',
        templateUrl: 'app/book/book-view.html',
        controller: 'BookViewCtrl'
      })
      .state('newBook', {
        url: 'books/new',
        templateUrl: 'app/book/book-add.html',
        controller: 'BookCreateCtrl'
      })
      .state('editBook', {
        url: 'books/:id/edit',
        templateUrl: 'partials/book-edit.html',
        controller: 'BookEditCtrl'
      })
  });