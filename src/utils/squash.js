module.exports = function (text) {
  var content = new String(text);
  // all lower case, please
  var content = content.toLowerCase();
  // remove all html elements and new lines
  var re = /(&lt;.*?&gt;)|(<.*?>)/gi;
  var plain = unescape(content.replace(re, ''));
  // remove duplicated words
  var words = plain.split(' ');
  var deduped = [...(new Set(words))];
  var dedupedStr = deduped.join(' ')
  // remove short and less meaningful words
  var result = dedupedStr.replace(/\b(\.|\,|a|an)\b/gi, '');
  //remove newlines, and punctuation
  result = result.replace(/\.|\,|\?|-|\n/g, '');
  //remove repeated spaces
  result = result.replace(/([ ]{2,}|\t+)/g, ' ');
  return result;
}