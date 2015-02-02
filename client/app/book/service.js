'use strict';

angular.module('koeApp')
  .service('Book', ['$resource',function ($resource) {
    return $resource('/api/books/:id')

  }])

