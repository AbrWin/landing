'use strict';

/*
 * @ngdoc function
 * @name ClaroApp.controller:unlimitedCtrl
 * @description
 * # unlimitedCtrl
 * Controller of the ClaroApp
 */

ClaroApp.controller("unlimitedCtrl", function ($scope, $location, CacheData) {

    //Cache
    $scope.lang = $location.search().ct;
    var cache = CacheData.get('CacheData');

    if ($scope.lang == "pe") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.pages = [{

                id: "",
                logo: "assets/img/04_ilimitado.png",
                iconC: "",
                subtitleC: "",
                title: "¡Disfruta de música ilimitada con tu Plan Conexión Claro Música!",
                logo_title: "assets/img/logo_musica_plan.png",
                btn_text: "Resgistrate",
                btn_text2: "",
                btn_primary_img_left: "assets/img/btn_pe/PE_mensual.png",
                btn_primary_img_right: "",
                btn_block_text: "¡Regístrate ya!",
                btn_block_text2: "",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectProvisionUser",
                trigger_2: "",
                sublabel: "Con tu Plan Conexión Claro música escucha música ilimitada donde quieras.",
                sublabel2: "",
                ul_text: "Millones de canciones.",
                ul_text2: "Música sin conexión a Internet.",
                ul_text3: "Novedades y lanzamientos.",
                ul_text4: "Crea y comparte playlist con tus amigos.",
                ul_text5: "Estaciones de radio de todo el mundo.",
                ul_text6: "",
                ios_path: "",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next",
                back: "<< Regresar"
            }];
        }
    } else if ($scope.lang == "uy") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.pages = [{

                id: "",
                logo: "assets/img/04_ilimitado.png",
                iconC: "",
                subtitleC: "",
                title: "¡Tenés 12 meses GRATIS!*",
                logo_title: "assets/img/logo_anio_gratis.png",
                btn_text: "Resgistrate",
                btn_text2: "",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "Comenzar ahora",
                btn_block_text2: "",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectProvisionUser",
                trigger_2: "",
                sublabel: "*12 meses gratis, luego $60/mes. Renovación Automática.",
                sublabel2:"",
                ul_text: "",
                ul_text2: "Descubrí novedades y lanzamientos.",
                ul_text3: "Crea y compartí playlists con amigos.",
                ul_text4: "Escuchá tu música en tu Smartphone, Tablet o computadora.",
                ul_text5: "Escuchá tus Radios favoritas AM/FM.",
                ul_text6: "Escuchá tu música aún sin conexión.",
                ios_path: "",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next",
                back: "<< Regresar"
            }];
        }
    }else if ($scope.lang == "ec") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.pages = [{

                id: "",
                logo: "assets/img/04_ilimitado.png",
                iconC: "",
                subtitleC: "",
                title: "¡Solo tú tienes Claro Música totalmente GRATIS!",
                logo_title: "assets/img/logo_musica_plan.png",
                btn_text: "Resgistrate",
                btn_text2: "",
                btn_primary_img_left: "assets/img/btn_pe/PE_mensual.png",
                btn_primary_img_right: "",
                btn_block_text: "¡Regístrate ya!",
                btn_block_text2: "",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectProvisionUser",
                trigger_2: "",
                sublabel: "",
                sublabel2: "",
                ul_text: "Más de 20 millones de canciones.",
                ul_text2: "Tu música sin anuncios.",
                ul_text3: "Playlists gratuitos.",
                ul_text4: "En cualquier dispositivo.",
                ul_text5: "Las mejores radios del país.",
                ul_text6: "",
                ios_path: "",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next",
                back: "<< Regresar"
            }];
        }
    }else if ($scope.lang == "py") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.pages = [{

                id: "",
                logo: "assets/img/04_ilimitado.png",
                iconC: "",
                subtitleC: "",
                title: "¡Tenés 1 año GRATIS! *",
                logo_title: "assets/img/logo_musica-ilimitada.png",
                btn_text: "Resgistrate",
                btn_text2: "",
                btn_primary_img_left: "assets/img/btn_pe/PE_mensual.png",
                btn_primary_img_right: "",
                btn_block_text: "Comenzar ahora",
                btn_block_text2: "",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectProvisionUser",
                trigger_2: "",
                sublabel: "*Para clientes con abono. Luego Gs 8.000  Final/mes. Renovación Automática.",
                sublabel2: "",
                ul_text: "",
                ul_text2: "Descubrí novedades y lanzamientos.",
                ul_text3: "Crea y compartí playlists con amigos.",
                ul_text4: "Escuchá tu música estés donde estés.",
                ul_text5: "Escuchá tus Radios favoritas AM/FM.",
                ul_text6: "Escuchá tu música aún sin conexión.",
                ios_path: "",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next",
                back: "<< Regresar"
            }];
        }
    }else if ($scope.lang == "cl") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.pages = [{

                id: "",
                logo: "assets/img/04_ilimitado.png",
                iconC: "",
                subtitleC: "",
                title: "Los primeros 12 meses van por nuestra cuenta",
                logo_title: "assets/img/logo_musica_plan.png",
                btn_text: "Resgistrate",
                btn_text2: "",
                btn_primary_img_left: "assets/img/btn_pe/PE_mensual.png",
                btn_primary_img_right: "",
                btn_block_text: "¡Regístrate aquí!",
                btn_block_text2: "",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectProvisionUser",
                trigger_2: "",
                sublabel: "Disfruta tus 12 meses sin costo. Luego $3.700 por mes",
                sublabel2: "",
                ul_text: "Con tu Plan Pro sobre 7gb.",
                ul_text2: "Disfruta tu música ilimitadamente.",
                ul_text3: "Actualizaciones todas las semanas.",
                ul_text4: "Crea y comparte playlist con tus amigos.",
                ul_text5: "Identifica tus canciones favoritas.",
                ios_path: "",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next",
                back: "<< Regresar"
            }];
        }
    }else if ($scope.lang == "ar") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.pages = [{

                id: "",
                logo: "assets/img/04_ilimitado.png",
                iconC: "",
                subtitleC: "",
                title: "¡Tenés 12 meses GRATIS!*",
                logo_title: "assets/img/logo_musica-ilimitada.png",
                btn_text: "Resgistrate",
                btn_text2: "",
                btn_primary_img_left: "assets/img/btn_pe/PE_mensual.png",
                btn_primary_img_right: "",
                btn_block_text: "Comenzar ahora",
                btn_block_text2: "",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectProvisionUser",
                trigger_2: "",
                sublabel: "*Para clientes con abono. Luego $15 Final/mes. Renovación Automática.",
                sublabel2: "",
                ul_text: "",
                ul_text2: "Descubrí novedades y lanzamientos.",
                ul_text3: "Crea y compartí playlist con amigos.",
                ul_text4: "Escuchá tu música estés donde estés.",
                ul_text5: "Escuchá tus Radios favoritas AM/FM.",
                ul_text6: "Escuchá tu música aún sin conexión.",
                ios_path: "",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next",
                back: "<< Regresar"
            }];
        }
    }

    /**
     * Functions in Android \(>_<)/
     */
    $scope.generic = function (value) {
        if (value == "redirectProvisionUser") {
            Android.redirectProvisionUser("","");
        }
    }
});
