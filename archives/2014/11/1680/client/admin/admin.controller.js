(function(){

  'use strict';

  function AdminCtrl($scope) {

    console.log('AdminCtrl loaded');
  }


  angular
    .module('app')
    .controller('AdminCtrl', AdminCtrl );

})();