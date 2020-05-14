module.exports = function (value) {
  const dateObject = new Date(value)

  return dateObject.toLocaleDateString('he-IL', {
    month: 'long',
    year: 'numeric',
  });
};