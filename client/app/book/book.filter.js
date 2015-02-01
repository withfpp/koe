angular.module('koeApp') 
  .filter("numToAlpha", function(){
    return function(input){
      var eng ='abcdefghijklmnopqrstuvwxyz'[input];
      return '(' + eng.toUpperCase() + ') ';
    }
  })
