/**
 * @author Abr&Kikes
 */
'use strict';

ClaroApp.controller("upsellChartsCtrl", function ($scope, $location, CacheData) {

//lang
    $scope.lang = $location.search().ct;

    //Cache support
    var cache = CacheData.get('CacheData');

    if ($scope.lang == "br") {
        if (cache) {
            $scope.pages = cache;
        } else {
            $scope.upsells = [{
                    "id": 2,
                    "description": "Charts_countrys",
                    "title_img": "assets/img/01_clarohits_mdpi.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "As melhores playlists de cada gênero.",
                    "ul_text2": "Escute suas 10 playlists favoritas.",
                    "ul_text3": "Escute sem estar conectado à Internet.",
                    "ul_text4": "Novas playlists toda semana.",
                    "text1": "O menor preço do mercado.",
                    "text2": "¿Eres Telcel? Manda Charts al 7980",
                    "txt_1": "",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "sub_icon": "assets/img/btn_br/BR_hits.png",
                    "sublabel": " ",
                    "sublabel_link": "Já possui uma assinatura?",
                    "btn_primary_img_left": "assets/img/btn_br/BR_hits.png",
                    "footer_label": "Primeira semana grátis",
                    "btn_text_2": "Conheça Claro música ilimitado",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "mx") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 2,
                    "description": "Charts_countrys_noImg",
                    "title_img": "assets/img/03_charts.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "20 playlists para elegir.",
                    "ul_text2": "Escucha 10 cada semana.",
                    "ul_text3": "Reproduce sin conexión a Internet.",
                    "ul_text4": "Nuevas canciones todas las semanas.",
                    "text1": "El precio más bajo del mercado",
                    "text2": "¿Eres Telcel? Manda Charts al 7980",
                    "sub_icon": "assets/img/03_cm_10_pesos_xhdpi.png",
                    "sublabel": " ",
                    "sublabel_link": "¿Ya tienes una suscripción?",
                    "txt_1": "Válido con forma de pago Telcel. Tarifa promocional",
                    "txt_2": "aplica despues del periodo gratuito. Consulta vigencias",
                    "txt_3": "y precios.",
                    "txt_4": " Ver más",
                    "btn_primary_img_left": "assets/img/btn_mx/cm_charts_mdpi_10.png",
                    "footer_label": "*Primera semana gratis",
                    "btn_text_1": "Suscríbete a Charts",
                    "btn_text_2": "Conoce Claro música Ilimitado",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    }else if ($scope.lang == "co") {
        if (cache) {
            $scope.pages = cache;
        } else {
            $scope.upsells = [{
                    "id": 2,
                    "description": "Charts_countrys",
                    "title_img": "assets/img/03_charts.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Las mejores playlist por géneros.",
                    "ul_text2": "Escucha tus 10 favoritas.",
                    "ul_text3": "Reproduce sin conexión a Internet.",
                    "ul_text4": "Nuevas playlists todas las semanas.",
                    "text1": "El precio más bajo del mercado",
                    "text2": "",
                    "sub_icon": "assets/img/btn_co/CO_charts.png",
                    "sublabel": " ",
                    "sublabel_link": "¿Ya tienes una suscripción?",
                    "txt_1": "*La tarifa aplica a partir del segundo cobro semanal o mensual",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "btn_primary_img_left": "assets/img/btn_co/CO_charts.png",
                    "footer_label": "*Primera semana gratis",
                    "btn_text_2": "Conoce Claro música Ilimitado",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else { //default lang.
        //mx and default lang are alike.
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 2,
                    "description": "Charts_countrys",
                    "title_img": "assets/img/03_charts.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "20 playlists para elegir.",
                    "ul_text2": "Escucha 10 cada semana. ¡Hasta 400 canciones!",
                    "ul_text3": "Reproduce sin conexión a Internet.",
                    "ul_text4": "Nuevas canciones todas las semanas.",
                    "text1": "El precio más bajo del mercado",
                    "text2": "¿Eres Telcel? Manda Charts al 7980",
                    "sub_icon": "assets/img/03_cm_10_pesos_xhdpi.png",
                    "sublabel": " ",
                    "sublabel_link": "¿Ya tienes una suscripción?",
                    "txt_1": "Válido con forma de pago Telcel. Tarifa promocional",
                    "txt_2": "aplica despues del periodo gratuito. Consulta vigencias",
                    "txt_3": "y precios.",
                    "txt_4": " Ver más",
                    "btn_primary_img_left": "assets/img/btn_mx/cm_charts_mdpi_10.png",
                    "footer_label": "*Primera semana gratis",
                    "btn_text_2": "Conoce Claro música Ilimitado",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    }

    //function structure here

    $scope.generic = function (value) {
        if (value == "redirectToAnonymousHome") {
            Android.redirectToAnonymousHome();
        } else if (value == "redirectToLogin") {
            Android.redirectToLogin();
        } else if (value == "redirectToRegister") {
            Android.redirectToRegister();
        } else if (value == "redirectToBuyCharts") {
            Android.redirectToBuyCharts();
        } else if (value == "redirectToBuyWeek") {
            Android.redirectToBuyWeek();
        } else if (value == "redirectToBuyMonth") {
            Android.redirectToBuyMonth();
        } else if (value == "redirectToPincode") {
            Android.redirectToPincode();
        } else if (value == "backNavigation") {
            Android.backNavigation();
        } else if (value == "createSeeMoreInfo") {
            Android.createSeeMoreInfo();
        } else if (value == "setAlreadyPlan"){
            Android.setAlreadyPlan();
        }
    };

});
