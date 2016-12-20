/**
 * @author Abr&Kikes
 */

'use strict';

ClaroApp.controller("upsellUnlimitedCtrl", function ($scope, $location, CacheData) {

//lang
    $scope.lang = $location.search().ct;
    $scope.hideChartsBtn = $location.search().hideChartsBtn;
    //Cache support
    var cache = CacheData.get('CacheData');

    if ($scope.lang == "br") {
        if (cache) {
            $scope.pages = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Milhões de músicas.",
                    "ul_text2": "Escute suas músicas mesmo sem acesso à Internet.",
                    "ul_text3": "Novidades e lançamentos.",
                    "ul_text4": "Crie e compartilhe suas playlists.",
                    "ul_text52": "Escute rádios de todo o mundo.",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Código promocional",
                    "btn_primary_img_left": "assets/img/btn_br/BR_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_br/BR_mensual.png",
                    "txt_1": "",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "Primeiro mês grátis",
                    "footer_text1": "Primeira semana grátis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "mx") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "¡Millones de canciones para disfrutar!",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas.",
                    "ul_text4": "Disfruta nuestras Playlists o crea las tuyas y compártelas.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu código promocional",
                    "btn_primary_img_left": "assets/img/btn_mx/cm_ilimitado_1.png",
                    "btn_primary_img_rigth": "assets/img/btn_mx/cm_ilimitado_2.png",
                    "txt_1": "Válido con forma de pago Telcel. Tarifa promocional",
                    "txt_2": "aplica despues del periodo gratuito. Consulta vigencias",
                    "txt_3": "y precios.",
                    "txt_4": " Ver más",
                    "btn_text_2": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "co") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_co/CO_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_co/CO_mensual.png",
                    "txt_1": "*La tarifa aplica a partir del segundo cobro semanal o mensual",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "ar") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "",
                    "btn_primary_img_left": "assets/img/btn_ar/AR_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_ar/AR_mensual.png",
                    //"txt_1": "Cliente con Abono: Música ilimitada Mensual gratis 1 año. Luego $ 15 final, beneficio por única vez. Cliente Prepago: Primer período Gratis de Música",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "cl") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_cl/CL_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_cl/CL_mensual.png",
                    "txt_1": "* El primer pago es GRATIS. En el plan semanal el primer cargo de $990 no se cobra y en el plan mensual el primer cargo de $3099 no se cobra.",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "cr") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_cr/CR_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_cr/CR_mensual.png",
                    "txt_1": "* El primer pago es GRATIS. En el plan semanal el primer cargo de C1,400 no se cobra y en el plan mensual el primer cargo de C4,100 no se cobra.",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "do") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_do/DO_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_do/DO_mensual.png",
                    "txt_1": "* El primer pago es GRATIS. En el plan semanal el primer cargo de RD$95.00 no se cobra y en el plan mensual el primer cargo de RD$295.00 no se cobra.",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "ec") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_ec/EC_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_ec/EC_mensual.png",
                    "txt_1": "Tarifa aplica después del periodo de Gratuidad",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*3 primeros meses gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "gt") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_gt/GT_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_gt/GT_mensual.png",
                    "txt_1": "* El primer pago es GRATIS. En el plan semanal el primer cargo de Q18.20 no se cobra y en el plan mensual el primer cargo de Q54.80 no se cobra.",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "hn") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_hn/HN_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_hn/HN_mensual.png",
                    "txt_1": "* El primer pago es GRATIS. En el plan semanal el primer cargo de L46.98 no se cobra y en el plan mensual el primer cargo de L141.99 no se cobra.",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "ni") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_ni/NI_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_ni/NI_mensual.png",
                    "txt_1": "* El primer pago es GRATIS. En el plan semanal el primer cargo de $2.30 no se cobra y en el plan mensual el primer cargo de $6.92 no se cobra.",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "pa") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_pa/PA_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_pa/PA_mensual.png",
                    "txt_1": "* El primer pago es GRATIS. En el plan semanal el primer cargo de B/.2.29 no se cobra y en el plan mensual el primer cargo de B/.6.92 no se cobra.",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "pe") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_pe/PE_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_pe/PE_mensual.png",
                    "txt_1": "*Al elegir un plan estás aceptando tu suscripción y renovación automática por el cobro mensual de S/.19.2 o semanal de S/6.40 IGV incl.",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "py") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "¿Tenés un código promocional?",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_py/PY_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_py/PY_mensual.png",
                    "txt_1": "Cliente con Plan: Claro Música ilimitada Mensual gratis 12 meses. Luego Gs 8.000 por mes Impuestos incluidos. Beneficio por única vez. Cliente Prepago: Primer período Gratis de Música Ilimitada. Luego Gs 31.100 Mensual o Gs 10.300 Semanal. Impuestos incluidos",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "sv") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_sv/SV_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_sv/SV_mensual.png",
                    "txt_1": "* El primer pago es GRATIS. En el plan semanal el primer cargo de $2.29 no se cobra y en el plan mensual el primer cargo de $6.99 no se cobra.",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else if ($scope.lang == "uy") {
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "ul_text6": "",
                    "ul_text7": "",
                    "text1": "¿Tenés un código promocional?",
                    "buttonOffer": "",
                    "buttonCodePromotional": "Redime tu codigo promocional",
                    "btn_primary_img_left": "assets/img/btn_uy/UY_semanal.png",
                    "btn_primary_img_rigth": "assets/img/btn_uy/UY_mensual.png",
                    "txt_1": "Cliente Pospago: Música ilimitada Mensual gratis 1 año. Luego la suscripción tendrá un costo mensual de $U 60. Precio IVA inc. Beneficio por única vez. Cliente Prepago: Primer período Gratis de Música Ilimitada. Luego $U 150,00 Mensual o $U 50,00 Semanal. Precios IVA inc.",
                    "txt_2": "",
                    "txt_3": "",
                    "txt_4": "",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    } else { //default lang
        if (cache) {
            $scope.upsells = cache;
        } else {
            $scope.upsells = [{
                    "id": 3,
                    "description": "Unlimited_countrys",
                    "title_img": "assets/img/04_ilimitado.png",
                    "subtitle_img": "assets/img/audifonos.png",
                    "ul_text1": "Toda la música, millones de canciones.",
                    "ul_text2": "Tú música sin conexión a Internet.",
                    "ul_text3": "Lanzamientos y exclusivas.",
                    "ul_text4": "Crea y comparte playlists con tus amigos.",
                    "ul_text5": "Estaciones de radio de todo el mundo.",
                    "text1": "Si tienes un código promocional, actívalo visitando la página de Claro música",
                    "buttonOffer": "Conoce Claro música Charts",
                    "buttonCodePromotional": "Redime tu código promocional",
                    "btn_primary_img_left": "assets/img/btn_mx/cm_ilimitado_1.png",
                    "btn_primary_img_rigth": "assets/img/btn_mx/cm_ilimitado_2.png",
                    "txt_1": "Válido con forma de pago Telcel. Tarifa promocional",
                    "txt_2": "aplica despues del periodo gratuito. Consulta vigencias",
                    "txt_3": "y precios.",
                    "txt_4": " Ver más",
                    "btn_text_2": "Conoce Claro música Charts",
                    "footer_text2": "*Primer mes gratis",
                    "footer_text1": "*Primera semana gratis",
                    "close_btn": "assets/img/cerrar.png"
                }];
        }
    }

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
        }
    };
});
