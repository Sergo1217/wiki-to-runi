// ==UserScript==
// @name             Wiki to Runi Redirector
// @name:ru          Переадресация Вики на Руниверсалис
// @description      Redirects Wikipedia to the Runi domain
// @description:ru   Автоматическая переадресация Википедии на Руниверсалис
// @version          1.1.0
// @author           Sergo1217
// @match            *://*.wikipedia.org/*
// @icon             https://руни.рф//resources/assets/logo-icon-new.svg
// @grant            GM_xmlhttpRequest
// @updateURL        https://raw.githubusercontent.com/sergo1217/wiki-to-runi/master/wiki-to-runi.user.js
// @downloadURL      https://raw.githubusercontent.com/sergo1217/wiki-to-runi/master/wiki-to-runi.user.js
// @supportURL       https://github.com/sergo1217/wiki-to-runi/issues
// @homepageURL      https://github.com/sergo1217/wiki-to-runi
// ==/UserScript==

(function() {
    'use strict';

    // Проверка, что мы находимся на русском разделе Википедии
    if (location.hostname === 'ru.wikipedia.org') {
        // Заменяем часть URL для переадресации
        const newURL = window.location.href.replace("ru.wikipedia.org/wiki", "руни.рф/index.php");

        // Проверка доступности целевой страницы на Руниверсалис
        GM_xmlhttpRequest({
            method: "HEAD",
            url: newURL,
            onload: function(response) {
                if (response.status === 200) {
                    // Если страница существует, выполняем переадресацию
                    window.location.replace(newURL);
                } else {
                    // Если страницы нет, выводим сообщение в консоль
                    console.log("Страница на Руниверсалис не найдена:", newURL);
                }
            },
            onerror: function(error) {
                console.error("Ошибка запроса к Руниверсалис:", error);
            }
        });
    }
})();
