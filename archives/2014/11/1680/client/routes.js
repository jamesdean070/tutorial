(function(){
  'use strict';

  angular
    .module('app')
    .config(function ($stateProvider) {
      $stateProvider
        .state('signin', {
          url: '/signin',
          templateUrl: 'signin/signin.html',
          controller: 'SigninCtrl'
        })
        .state('admin', {
          url: '/admin',
          templateUrl: 'admin/admin.html',
          controller: 'AdminCtrl',
          authenticate: true
        });
    });

})();