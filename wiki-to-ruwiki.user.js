// ==UserScript==
// @name             Wiki to Ruwiki Redirector
// @name:ru          Переадресация Вики на Рувики
// @description      Redirects Wikipedia to the Ruwiki domain
// @description:ru   Автоматическая переадресация Википедии на Руниверсалис
// @version          2.0
// @author           Sergo1217
// @match            *://*.wikipedia.org/*
// @icon             https://static.tildacdn.com/tild6363-6230-4666-b365-393162643334/Logo_new.svg
// @grant            GM_xmlhttpRequest
// @updateURL        https://raw.githubusercontent.com/sergo1217/wiki-to-runi/master/wiki-to-ruwiki.user.js
// @downloadURL      https://raw.githubusercontent.com/sergo1217/wiki-to-runi/master/wiki-to-ruwiki.user.js
// @supportURL       https://github.com/sergo1217/wiki-to-runi/issues
// @homepageURL      https://github.com/sergo1217/wiki-to-runi
// ==/UserScript==

(function() {
    'use strict';

    // Проверка, что мы находимся на русском разделе Википедии
    if (location.hostname === 'ru.wikipedia.org') {
        // Заменяем часть URL для переадресации
        const newURL = window.location.href.replace("ru.wikipedia.org/", "ru.ruwiki.ru/");

        // Проверка доступности целевой страницы на рувики
        GM_xmlhttpRequest({
            method: "HEAD",
            url: newURL,
            onload: function(response) {
                if (response.status === 200) {
                    // Если страница существует, выполняем переадресацию
                    window.location.replace(newURL);
                } else {
                    // Если страницы нет, выводим сообщение в консоль
                    console.log("Страница на Рувики не найдена:", newURL);
                }
            },
            onerror: function(error) {
                console.error("Ошибка запроса к Рувики:", error);
            }
        });
    }
})();
