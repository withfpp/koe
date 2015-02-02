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
      explanation: "해설입니다..",    
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
      explanation: "Those who 는 짝입니다..",    
      id: 2,
      user_id:2
      }
    ] 
  },{
    author: 'Danny',
    author_id : 2,
    id: 2,
    title: '대니의 모질게 토익',
    details: '2015년 주요 예상 출제 문제',
    quiz: [
     {
      genre: 'toeic',
      title: '빈칸에 알맞은 것을 고르시오.',
      body: 'If the members had actively participated, last year\'s seminar could _____ more efficeintly.',
      answer: 4,
      point: 10,
      choice: {
        1:"organized",
        2:"be organize",
        3:"have organized",
        4:"have been organized",
        5:""
        },
      explanation: 
        "if절의 시제가 had p.p인것으로 보아 이어지는 주절의 시제는 조동사과거형과 현재완료라는 것을 알 수 있다.\n하지만 바로 c)를 고르면 안되는 것은 주절의 주어가 세미나이므로 조직되어야 한다.\n즉, 현재완료이면서 수동태를 나타내 주는 것은 d)이다.",  
      id: 3,
      user_id:2
      },
      {
      genre: 'toeic',
      title: 'part5',
      body: ' If the participant _____ that she was hired by another company, she could have called that company earlier.',
      answer: 1,
      point: 10,
      choice: {
        1:"had been told",
        2:"had told",
        3:"is told",
        4:"told",
        5:""
        },
      explanation: "주절의 시제가 조동사과거형+현재완료이므로 if절의 시제는 과거완료임을 알 수 있다.하지만 a와 b 모두 과거완료이므로 능동, 수동 관계를 파악해야 하는데, told는 4형식 타동사로 목적어로 사람을 먼저 써야하나 빈칸이후에 바로 that절만 따라오므로 수동태로 보아야 한다.",
      id: 4,
      user_id:2
      }
    ] 
  }
  )
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
    password: 'test',
    seen: [],
    bookmark: [],
    quizBookmark: [],
    wrong: [],
    totalPoint: 0,
    rank: 1
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
