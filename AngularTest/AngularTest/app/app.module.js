
(function () {
    'use strict';

    angular.module('appModule', ['ui.router'])
        .config(applicationConfig);

    applicationConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function applicationConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('mainMenu', {
                url: '/',
                templateUrl: 'app/components/main-menu/main-menu.html',
                controller: 'MainMenuController',
                controllerAs: 'mainMenu'
            }).state('lobby', {
                url: '/lobby',
                templateUrl: 'app/components/lobby/lobby.html',
                controller: 'LobbyController',
                controllerAs: 'lobby'
            }).state('settings', {
                url: '/settings',
                templateUrl: 'app/components/settings/settings.html',
                controller: 'SettingsController',
                controllerAs: 'settings'
            });
    }

})();

