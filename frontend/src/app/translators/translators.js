/**
 * Created by pepo on 15-10-13.
 */
angular.module('ta.translators', [
  'ui.router',
  'ui.bootstrap'
])
        .config(function config($stateProvider) {
          $stateProvider.state('translators', {
            url: '/translators',
            views: {
              "main": {
                controller: 'TranslatorsCtrl',
                templateUrl: 'translators/translators.tpl.html'
              }
            },
            data: {pageTitle: 'Преводачи'}
          });
        })

        .service('translatorsGateway', function (httpRequest) {
          return {
            getAll: function (offset, count, keyword) {
              return httpRequest.post('/r/nomenclature/translators',
                      {offset: offset, count: count, keyword: keyword});
            },
            add: function (translator) {
              return httpRequest.post('r/nomenclature/translators', {
                name: translator.name,
                currentAddress: translator.currentAddress,
                permanentAddress: translator.permanentAddress,
                phones: translator.phones,
                languages: translator.langsAsArr,
                educations: translator.educationsAsArr,
                email: translator.email,
                skype: translator.skype,
                eid: translator.eid,
                document: translator.document,
                iban: translator.iban
              });
            },
            deleteById: function (id) {
              return httpRequest.del('/r/nomenclature/translators' + id);
            }
          };
        })

        .controller('TranslatorsCtrl', function TranslatorsCtrl($scope, translatorsGateway, growl,$modal) {

          $scope.translator = {};

          $scope.add = function (translator) {

            translator.langsAsArr = [];
            translator.educationsAsArr = [];

            angular.forEach(translator.languages, function (language) {
              translator.langsAsArr.push(language.name);
            });

            angular.forEach(translator.educations, function (education) {
              translator.educationsAsArr.push(education.name);
            });


            translatorsGateway.add(translator).then(
                    function onSuccess() {
                      growl.success($scope.translator.name + " was added!");
                      $scope.translator = {};
                    },
                    function onError() {
                      growl.warning("Unexpected system error!");
                    }
            );
          };

          $scope.languageOptions = [
            {name: 'Английски'},
            {name: 'Български'},
            {name: 'Руски'},
            {name: 'Френски'},
            {name: 'Испански'},
            {name: 'Полски'},
            {name: 'Холандски'}
          ];

          $scope.educationOptions = [
            {name: 'Ез. Гимназия'},
            {name: 'Пр. Лингвистика'}
          ];


          $scope.items = ['item1', 'item2', 'item3'];

          $scope.animationsEnabled = true;

          $scope.open = function (size) {

            var modalInstance = $modal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'translators/myModalContent.html',
              controller: 'ModalInstanceCtrl',
              size: size,
              resolve: {
                items: function () {
                  return $scope.items;
                }
              }
            });

            modalInstance.result.then(function (selectedItem) {
              $scope.selected = selectedItem;
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });
          };

          $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
          };

        })

        .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

          $scope.items = items;
          $scope.selected = {
            item: $scope.items[0]
          };

          $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        })

;