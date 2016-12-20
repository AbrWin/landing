'use strict';
/*
 * @ngdoc function
 * @name ClaroApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the ClaroApp
 */

ClaroApp.controller("mainCtrl", function ($scope, $location, CacheData) {

    //lang
    $scope.lang = $location.search().ct;
    var cache = CacheData.get('CacheData');
    $scope.goToSlide = $location.search().goToSlide;
    var first = false;

    if ($scope.lang == "br") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/03_todalamusica_br_xhdpi.png",
                title: "",
                logo_title: "",
                btn_text: "Registre ou faça login",
                btn_text2: "Escute grátis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Código Promocional",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "As melhores músicas e playlists",
                ul_text2: "Seus artistas favoritos",
                ul_text3: "Descubra o que está tocando",
                ul_text4: "",
                ul_text5: "Escute sem conexão à internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escute agora",
                btn_text2: "Quero mais",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "Fácil e sem registro",
                ul_text2: "Suas rádios favoritas",
                ul_text3: "Descubra o que está tocando",
                ul_text4: "Os gêneros e artistas mais escutados",
                ul_text5: "Playlists com os mais novos lançamentos",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/03_todalamusica_br_xhdpi.png",
                title: "",
                btn_text: "",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/BR/BR_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/BR/BR_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "Não, obrigado.",
                sublabel_link: "Escutar gratuitamente agora",
                ul_text: "Milhões de músicas ilimitadas",
                ul_text2: "Escute sem acesso à Internet",
                ul_text3: "Novidades e lançamentos",
                ul_text4: "Crie e compartilhe suas playlists",
                ul_text5: "Escute rádios de todo o mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "Primeira semana grátis",
                footer_label2: "Primeiro mês grátis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "co") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Tus estaciones de radio favoritas.",
                ul_text2: "Las mejores Playlists.",
                ul_text3: "Reconoce lo que está sonando.",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet.",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas.",
                ul_text3: "Identifica la canción que está sonando.",
                ul_text4: "Géneros y Artistas top.",
                ul_text5: "Playlists con las últimas novedades.",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/CO/CO_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/CO/CO_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "ar") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escuchá gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "Si sos cliente Claro con Abono, tenés 1 año GRATIS",
                btn_block_text2: "",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escuchá sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escuchá ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/AR/AR_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/AR/AR_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "uy") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escuchá gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "Si sos cliente Claro con Abono, tenés 1 año GRATIS",
                btn_block_text2: "",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escuchá sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escuchá ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/UY/UY_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/UY/UY_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "py") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escuchá gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "Si sos cliente Claro con Abono, tenés 1 año GRATIS",
                btn_block_text2: "",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escuchá sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escuchá ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/PY/PY_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/PY/PY_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "cl") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/CL/CL_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/CL/CL_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "cr") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/CR/CR_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/CR/CR_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "do") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/DO/DO_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/DO/DO_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }, {
                id: "4",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "Si eres cliente Claro con planes SMART Postpago o Control, tienes Claro Música Ilimitado GRATIS por 3 meses! Podrás difrutar:",
                btn_text: "",
                btn_text2: "",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "Más de 20 millones de canciones disponibles.",
                ul_text2: "Radios de géneros y artista.",
                ul_text3: "Música sin anuncios.",
                ul_text4: "Emisoras de radio locales e internacionales.",
                ul_text5: "Lanzamientos de la semana.",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }];
        }
    } else if ($scope.lang == "ec") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "¿Tienes un Plan Adrenalina, Sin Límites o Más Internet?",
                btn_block_moreText: "¡Tienes Claro Música GRATIS!",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/EC/EC_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/EC/EC_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label:  "*Primera semana gratis",
                footer_label2: "*3 primeros meses gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "gt") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/GT/GT_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/GT/GT_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "hn") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/HN/HN_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/HN/HN_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "ni") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/NI/NI_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/NI/NI_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "pa") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/PA/PA_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/PA/PA_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "pe") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "¿Tienes un Plan Conexión Claro música? Regístrate aquí",
                btn_block_moreText: "",
                btn_block_text2: "Ingresa tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo.",
                ul_text2: "Las mejores Playlists.",
                ul_text3: "Reconoce lo que está sonando.",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet.",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Escucha gratis: sin registro!",
                ul_text2: "Tus estaciones de radio favoritas.",
                ul_text3: "Reconoce lo que está sonando.",
                ul_text4: "Géneros y Artistas Top.",
                ul_text5: "Playlists con las últimas novedades.",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/PE/PE_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/PE/PE_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones.",
                ul_text2: "Tu música sin conexión a Internet.",
                ul_text3: "Novedades y lanzamientos.",
                ul_text4: "Crea y comparte playlists con tus amigos.",
                ul_text5: "Estaciones de radio de todo el mundo.",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else if ($scope.lang == "sv") {
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "assets/img/botones_precio/SV/SV_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/SV/SV_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "Toda la música, millones de canciones",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "Novedades y lanzamientos",
                ul_text4: "Crea y comparte playlists con tus amigos",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "*Primer mes gratis",
                slide_next: ""
            }];
        }
    } else { //else default MX
        if (cache) {
            $scope.slides = cache;
        } else {
            $scope.slides = [{
                id: "1",
                logo: "assets/img/01-1_toda_musica.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "assets/img/01-2_toda_musica.png",
                title: "",
                logo_title: "",
                btn_text: "Regístrate o Inicia Sesión",
                btn_text2: "Escucha gratis",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "Redime tu código promocional aquí",
                btn_block_url: "login_android()",
                btn_block_url2: "",
                trigger_1: "redirectToLogin",
                trigger_2: "redirectToAnonymousHome",
                sublabel: "",
                ul_text: "Estaciones de radio del mundo",
                ul_text2: "Las mejores Playlists",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "",
                ul_text5: "Escucha sin conexión a Internet",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            }, {
                id: "2",
                logo: "assets/img/02_gratis.png",
                iconC: "assets/img/audifonos.png",
                subtitleC: "",
                title: "",
                logo_title: "",
                btn_text: "Escucha ahora",
                btn_text2: "Quiero más",
                btn_primary_img_left: "",
                btn_primary_img_right: "",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToAnonymousHome",
                trigger_2: "",
                sub_icon: "",
                sublabel: "",
                sublabel_link: "",
                ul_text: "¡Fácil y sin registro!",
                ul_text2: "Tus estaciones de radio favoritas",
                ul_text3: "Reconoce lo que está sonando",
                ul_text4: "Géneros y Artistas top",
                ul_text5: "Playlists con las últimas novedades",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "",
                footer_label2: "",
                slide_next: "next"
            },{
                id: "3",
                logo: "assets/img/04_ilimitado.png",
                iconC: "assets/img/audifonos.png",
                title: "",
                btn_text: "Escucha ahora",
                btn_text2: "",
                btn_primary_img_left: "assets/img/botones_precio/MX/MX_semanal.png",
                btn_primary_img_right: "assets/img/botones_precio/MX/MX_mensual.png",
                btn_block_text: "",
                btn_block_text2: "",
                btn_block_url: "",
                btn_block_url2: "",
                trigger_1: "redirectToBuyWeek",
                trigger_2: "redirectToBuyMonth",
                sub_icon: "",
                sublabel: "No gracias,",
                sublabel_link: " escuchar gratis ahora",
                ul_text: "¡Escucha millones de canciones donde quieras!",
                ul_text2: "Tu música sin conexión a Internet",
                ul_text3: "",
                ul_text4: "Disfruta nuestras playlists o crea las tuyas y compártelas",
                ul_text5: "Estaciones de radio de todo el mundo",
                ios_path: "callLoginUnique",
                ios_path2: "",
                footer_label: "*Primera semana gratis",
                footer_label2: "* Primer mes gratis",
                slide_next: ""
            }];
        }
    }


    //swipe apps [fix swipe using jlite]

    $scope.sliderPrev = function (index, totalPaginator) {
        var correctIndex;
        switch (index) {

            case 3 :
                correctIndex = index;
                break;
            case 2:
                correctIndex = index;
                break;
            case 1:
                correctIndex = index;
                break;
            default:
                correctIndex = totalPaginator;
                break;
        }

        $('#carousel').carousel('prev');

       Android.sendScreenAnalitics(correctIndex);

    };

    $scope.sliderNext = function (index,totalPaginator) {

        var correctIndex;

        switch (index) {
            case 0:
                correctIndex = index + 2;
                //console.log("-->"+index);
                break;
            case 1:
                correctIndex = index + 2;
                //console.log("-->" + index);
                break;
            case 2:
                correctIndex = 1;
               //console.log("-->"+totalPaginator);
                break;
            case 3:
                correctIndex = 1;
                //console.log("-->"+index);
                break;
            default:
                correctIndex = totalPaginator;
                break;

        }


        $('#carousel').carousel('next');

       Android.sendScreenAnalitics(correctIndex);

    };

    $scope.slideint = function (index) {
        if($scope.goToSlide == 2){
            var x = (3).toString()
            Android.sendScreenAnalitics(x);
        }else if($scope.goToSlide == 3){
            var x = (4).toString();
            Android.sendScreenAnalitics(x);
        }else {
            var x = (1).toString()
            Android.sendScreenAnalitics(x);
        }
    };

    $scope.generic = function (value, index) {
        if (value == "redirectToAnonymousHome") {
            var newIndex = (index + 1).toString();
            Android.redirectToAnonymousHome(newIndex, "Escucha");
        }
        else if (value == "redirectToLogin") {
            var newIndex = (index + 1).toString();
            Android.redirectToLogin(newIndex, "Login");
        }
        else if (value == "redirectToRegister") {
            Android.redirectToRegister();

        }
        else if (value == "redirectToBuyCharts") {
            var newIndex = (index + 1).toString();
            Android.redirectToBuyCharts(newIndex, "Charts");
        }
        else if (value == "redirectToBuyWeek") {
            var newIndex = (index + 1).toString();
            Android.redirectToBuyWeek(newIndex, "Ilimitado semanal");
        }
        else if (value == "redirectToBuyMonth") {
            var newIndex = (index + 1).toString()
            Android.redirectToBuyMonth(newIndex, "Ilimitado mensual");
        }
        else if (value == "redirectToPincode") {
            Android.sendAnalitics("1", "promocion");
            Android.redirectToPincode();
        }
        else if (value == "redirectUnlimited") {
            Android.redirectUnlimited();
        }
        else if (value == "sendAnalitics") {
            var newIndex = (index + 1).toString();
            var valueAnalitics = newIndex == 1 ? "Escucha" : "Quiero";
            Android.sendAnalitics(newIndex, valueAnalitics);
        }
    };

    $scope.redirectSlideTo = function (index) {
        if ($scope.goToSlide == 2) {
            $scope.valueIndex = $scope.goToSlide;
        }else if ($scope.goToSlide >= 3) {
            $scope.valueIndex = index;
        } else {
            $scope.valueIndex = 0;
        }
    };

});
