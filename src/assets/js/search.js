'use strict';
/**
 * @param {string} buttonId
 * @param {!Function} listener
 * @return {undefined}
 */
function btnHandler(buttonId, listener) {
    /** @type {(Element|null)} */
    var buttonEl = document.querySelector(buttonId);
    if (buttonEl) {
        buttonEl.addEventListener("click", function (event) {
            event.preventDefault();
            listener();
        }, false);
    }
}
/**
 * @param {!Object} e
 * @return {undefined}
 */
function flagIfEmpty(e) {
    if (e.value.length < 1) {
        e.classList.add("needs-content");
    }
}
btnHandler("#btn-opt-in", function () {
    /** @type {!Date} */
    var date = new Date;
    /** @type {number} */
    var end = date.getTime() + 31536e6;
    date.setTime(end);
    /** @type {string} */
    document.cookie = "nf_ab=oh-so-orange; expires=" + date.toUTCString();
    window.location.reload(true);
}), btnHandler("#btn-opt-out", function () {
    /** @type {string} */
    document.cookie = "nf_ab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location.reload(true);
}), function () {
    /** @type {!NodeList<Element>} */
    var input = document.querySelectorAll("form");
    if (0 != input.length) {
        /** @type {number} */
        var i = 0;
        for (; i < input.length; i++) {
            input[i].addEventListener("submit", function (event) {
                event.preventDefault();
                /** @type {(EventTarget|null)} */
                var form = event.target;
                var elements = form.querySelectorAll(".needs-content");
                /** @type {number} */
                var i = 0;
                for (; i < elements.length; i++) {
                    elements[i].classList.remove("needs-content");
                }
                var crossfilterable_layers = form.querySelectorAll("input");
                /** @type {number} */
                var layer_i = 0;
                for (; layer_i < crossfilterable_layers.length; layer_i++) {
                    flagIfEmpty(crossfilterable_layers[layer_i]);
                }
                var spheres = form.querySelectorAll("textarea");
                /** @type {number} */
                var iter_sph = 0;
                for (; iter_sph < spheres.length; iter_sph++) {
                    flagIfEmpty(spheres[iter_sph]);
                }
                if (1 < (elements = form.querySelectorAll(".needs-content")).length) {
                    return false;
                }
                form.submit();
            }, false);
        }
    }
}(), function () {
    /** @type {null} */
    var x = null;
    /** @type {(Element|null)} */
    var targettedRow = document.querySelector(".search-ui");
    /** @type {(Element|null)} */
    var audioSelect = document.querySelector(".search-results");
    /** @type {(Element|null)} */
    var element = document.querySelector("#search-str");
    /** @type {(Element|null)} */
    var footer = document.querySelector("footer");
    /**
     * @return {undefined}
     */
    var show = function () {
        for (; audioSelect.firstChild;) {
            audioSelect.removeChild(audioSelect.firstChild);
        }
        footer.classList.remove("invisible");
    };
    btnHandler("#search-link", function () {
        fetch("/search.json").then(function (rawResp) {
            return rawResp.json();
        }).then(function (ic) {
            x = ic.search;
        });
        targettedRow.classList.toggle("invisible");
        element.focus();
        element.addEventListener("keyup", function (canCreateDiscussions) {
            var password = element.value;
            if (2 < password.length) {
                (function (key) {
                    key = key.toLowerCase();
                    /** @type {!Array} */
                    var c = [];
                    var i;
                    for (i in x) {
                        if (-1 != x[i].text.indexOf(key)) {
                            c.push(x[i]);
                        }
                    }
                    for (i in show(), footer.classList.add("invisible"), c) {
                        /** @type {!Element} */
                        var option = document.createElement("li");
                        /** @type {!Element} */
                        var o = document.createElement("a");
                        o.textContent = c[i].title;
                        o.setAttribute("href", c[i].url);
                        option.appendChild(o);
                        audioSelect.appendChild(option);
                    }
                })(password);
            } else {
                show();
            }
        });
    });
}();

