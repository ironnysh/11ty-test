(function(){

  var searchIndex = null;
  var searchUI = document.querySelector('.search-ui');
  var resultsUI = document.querySelector('.search-results');
  var searchInput = document.querySelector('#search-str');
  var footer = document.querySelector('footer');

  // clear the current results
  var clearResults = function(){
    while (resultsUI.firstChild) {
      resultsUI.removeChild(resultsUI.firstChild);
    }
    // unhide the footer again
    footer.classList.remove('invisible');

  }

  // search and display
  var find = function(str) {

    str = str.toLowerCase();

    // look for matches in the search JSON
    var results = [];
    for(var item in searchIndex ) {
      var found = searchIndex[item].text.indexOf(str);
      if(found != -1 ) {
        results.push(searchIndex[item])
      }
    }

    // build and insert the new result entries
    clearResults();
    footer.classList.add('invisible');
    for(var item in results) {
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      link.textContent = results[item].title;
      link.setAttribute('href', results[item].url);
      listItem.appendChild(link);
      resultsUI.appendChild(listItem);
    }
  }

  // add an event listener for a click on the search link
  btnHandler("#search-link", function(){

    // start of scripts from his site
    // attach a click handler to the search link
    var btn = document.querySelector('#search-link');
    btn.addEventListener('click', function (event) {

      // don't navigate to that page. Stay put.
      event.preventDefault();

      // make search magic happen instead...

    }, false);

    // get the data
    const searchIndex;
    fetch('/search.json').then(function (response) {
      return response.json();
    }).then(function (response) {
      searchIndex = response.search;
    });

    // look for matches in each item in the JSON
    var results = [];
    for (var item in searchIndex) {
      var found = searchIndex[item].text.indexOf(searchString);
      if (found != -1) {
        results.push(searchIndex[item])
      }
    }

// now display the items in our results array...
// end of scripts from his site
    
    // get the data
    fetch('/search.json').then(function(response) {
      return response.json();
    }).then(function(response) {
      searchIndex = response.search;
    });

    searchUI.classList.toggle('invisible');
    searchInput.focus();

    // listen for input changes
    searchInput.addEventListener('keyup', function(event) {
      var str = searchInput.value
      if(str.length > 2) {
        find(str);
      } else {
        clearResults();
      }
    });

  });

})();