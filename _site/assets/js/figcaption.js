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
            })
        }
        /**
* Get all links with explicit href
* and add noopener rel value
*/
        const links = [...document.querySelectorAll('a[href]')];
        if (links.length) {
            links.forEach(link => {
                /**
                 * For each link found get all the original attributes
                 * and apply them to the custom link element
                 */
                const externalLink = document.createElement('a');
                if (link.hasAttributes()) {
                    const linkAttributes = link.attributes;
                    for (var i = linkAttributes.length - 1; i >= 0; i--) {
                        externalLink.setAttribute(
                            linkAttributes[i].name,
                            linkAttributes[i].value
                        );
                    }
                }
                /**
                 * If the link starts with http or https
                 * appen the "noopener" value to the rel attribute
                 */
                const getHref = link.getAttribute('href');
                const currentRel = link.getAttribute('rel');
                const isExternal =
                    getHref.startsWith('http') || getHref.startsWith('https');
                if (isExternal) {
                    externalLink.setAttribute(
                        'rel',
                        currentRel && !currentRel.includes('noopener')
                            ? `${currentRel} noopener noreferrer`
                            : 'noopener noreferrer'
                    );
                }
                externalLink.innerHTML = link.innerHTML;
                link.replaceWith(externalLink.cloneNode(true));
            });
        }
        return '<!DOCTYPE html>\r\n' + document.documentElement.outerHTML;
    }
    return value;
};