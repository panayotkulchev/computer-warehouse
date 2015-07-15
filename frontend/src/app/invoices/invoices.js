angular.module( 'ngBoilerplate.invoices', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'invoices', {
    url: '/invoices',
    views: {
      "main": {
        controller: 'InvoicesCtrl',
        templateUrl: 'invoices/invoices.tpl.html'
      }
    },
    data:{ pageTitle: 'Invoices' }
  });
})

.controller( 'InvoicesCtrl', function InvoicesCtrl( $scope ) {



})

;
