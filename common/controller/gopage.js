"use strict";
/**
 * Servicio para ir a la página de inicio de un usuario
 */
angular.module("common").service("goPage", ['$window', '$rootScope', function ($window, $rootScope) {

        function goHomeApp() {
            $window.location.href = getContextPath() + "/index.html#/";
        }


        return {
            homeUsuario: function (usuario) {
                goHomeApp();
            },
            homeApp: function () {
                goHomeApp();
            },
            createAccount: function (tipoUsuario) {
                goHomeApp();
            },
            login: function () {
                goHomeApp();
            }
        };
    }]);