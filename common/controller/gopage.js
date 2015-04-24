"use strict";
/**
 * Servicio para ir a la página de inicio de un usuario
 */
angular.module("common").service("goPage", ['$window', '$rootScope', function ($window, $rootScope) {

        function goHomeUsuario(usuario) {
            goHomeApp();
        }
        function goHomeApp() {
            $window.location.href = getContextPath() + "/site/index.html#/";
        }


        return {
            homeUsuario: function (usuario) {
                if (usuario) {
                    goHomeUsuario(usuario);
                } else if ($rootScope.user) {
                    goHomeUsuario($rootScope.user);
                } else {
                    session.logged().then(function (usuario) {
                        if (usuario) {
                            goHomeUsuario(usuario);
                        } else {
                            goHomeApp();
                        }
                    }, function () {
                        goHomeApp();
                    });
                }
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