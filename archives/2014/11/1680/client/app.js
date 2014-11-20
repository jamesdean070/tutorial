(function(){
  'use strict';

  angular.module('app', [
    'ui.router'
  ])
  .run(function ($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

      if( toState.authenticate ){
        $state.transitionTo('signin');
        event.preventDefault();
      }

    });
  });

})();