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
            data: {pageTitle: 'About'}
        });
    })

    .service('translatorsGateway', function (httpRequest) {
        return {
            getAll: function (offset, count, keyword) {
                return httpRequest.post('/r/nomenclature/translators',
                    {offset: offset, count: count, keyword: keyword});
            },
            deleteById: function (id) {
                return httpRequest.del('/r/nomenclature/translators' + id);
            }
        };
    })

    .controller('TranslatorsCtrl', function AboutCtrl($scope, growl) {

        $scope.test = function () {
            growl.success("Successful added new translator");
        };

        $scope.languages = [
            {name: 'English', class: 'Class A'},
            {name: 'Bulgarian', class: 'Class B'},
            {name: 'Russian', class: 'Class B'},
            {name: 'French', class: 'Class B'},
            {name: 'Spanish', class: 'Class A'},
            {name: 'Polish', class: 'Class B'},
            {name: 'Niderlands', class: 'Class B'}
        ];

        $scope.educations = [
            {name: 'High School', class: 'Class A'},
            {name: 'Applied Linguistics', class: 'Class B'}
        ];

    })

;