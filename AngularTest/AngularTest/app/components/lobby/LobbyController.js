
(function () {
    'use strict';

    angular
        .module('appModule')
        .controller('LobbyController', lobbyController);

    lobbyController.$inject = ['chatService'];

    function lobbyController(chatService) {
        var vm = this;
        vm.chatMessages = chatService.getMessages();


    }

})();