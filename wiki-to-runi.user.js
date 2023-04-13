// ==UserScript==
// @name             Wiki to Runi Redirector
// @name:ru          Переадресация Вики на Руниверсалис
// @description      Redirects Wikipedia to the Runi domain
// @description:ru   Автоматическая переадресация Википедии на Руниверсалис
// @namespace        http://tampermonkey.net/
// @version          1.0
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
    const newURL = window.location.href.replace("ru.wikipedia.org/wiki", "руни.рф/index.php");
    GM_xmlhttpRequest({
        method: "HEAD",
        url: newURL,
        onload: function(response) {
            if (response.status === 200) {
                // If the final URL exists, redirect to it
                window.location.replace(newURL);
            }
            else {
                // If the final URL does not exist, do nothing
                console.log("The final URL does not exist.");
            }
        }
    });
})();
