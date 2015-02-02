/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Book = require('../api/book/book.model');


Book.find({}).remove(function(){
  Book.create({
    author: 'leon',
    author_id : 1,
    id: 1,
    title: 'leon toeic book',
    details: '토익 파트 5 12월 대비 문제 선별',
    quiz: [
     {
      genre: 'toeic',
      title: 'part5',
      body: 'yes, she ____.',
      answer: 1,
      point: 10,
      choice: {
        1:"does",
        2:"do",
        3:"don\'t",
        4:"have",
        5:"are"
        },
      id: 1,
      user_id:1

      },
      {
      genre: 'toeic',
      title: 'part5',
      body: '______ who want to apply for this position are requested to submit their performance.',
      answer: 2,
      point: 10,
      choice: {
        1:"You",
        2:"Those",
        3:"Another",
        4:"Some",
        5:"Other"
        },
      id: 2,
      user_id:2
      }
    ] 
  })
})


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});