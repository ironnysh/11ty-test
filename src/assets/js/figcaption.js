const jsdom = require('jsdom');
const { JSDOM } = jsdom;
module.exports = function (value, outputPath) {
    if (outputPath.endsWith('.html')) {
        const DOM = new JSDOM(value, {
            resources: 'usable'
        });
        const document = DOM.window.document;
        const articleImages = [...document.querySelectorAll('main article img')];
        if (articleImages.length) {
            articleImages.forEach(image => {
                 image.setAttribute('loading', 'lazy');		
                 const file = image.getAttribute('src');
                // An image with a title - add a figure containing it with a caption
                if (image.hasAttribute('title')) {
                    const figure = document.createElement('figure');
                    const figCaption = document.createElement('figcaption');
                    figCaption.innerHTML = image.getAttribute('title');
                    image.removeAttribute('title');
                    figure.appendChild(image.cloneNode(true));
                    figure.appendChild(figCaption);
                    image.replaceWith(figure);
                }
            });
        }
        return '<!DOCTYPE html>\r\n' + document.documentElement.outerHTML;
    }
    return value;
};
