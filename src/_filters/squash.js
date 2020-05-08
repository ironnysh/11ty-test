/**
 * Make a search index string by removing duplicated words
 * @param {String} text
 */
module.exports = function(text) {
  var content = new String(text);
  // remove duplicated words
  var words = plain.split(' ');
  var deduped = [...(new Set(words))];
  var dedupedStr = deduped.join(' ')
  //remove newlines, and punctuation
  result = result.replace(/\.|\,|\?|-|—|\n/g, '');
  //remove repeated spaces
  result = result.replace(/([ ]{2,}|\t+)/g, ' ');
  return result;
}