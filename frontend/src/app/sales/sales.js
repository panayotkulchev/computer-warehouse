angular.module( 'ngBoilerplate.sales', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'sales', {
    url: '/sales',
    views: {
      "main": {
        controller: 'Sales',
        templateUrl: 'sales/sales.tpl.html'
      }
    },
    data:{ pageTitle: 'Sales' }
  });
})

.controller( 'SalesCtrl', function AboutCtrl( $scope ) {



})

;
