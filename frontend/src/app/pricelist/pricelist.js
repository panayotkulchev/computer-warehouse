angular.module( 'ngBoilerplate.pricelist', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'pricelist', {
    url: '/pricelist',
    views: {
      "main": {
        controller: 'PricelistCtrl',
        templateUrl: 'pricelist/pricelist.tpl.html'
      }
    },
    data:{ pageTitle: 'Pricelist' }
  });
})

.controller( 'PricelistCtrl', function AboutCtrl( $scope ) {



})

;
