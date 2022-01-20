function createElement(data) {
    const p = document.createElement("P");
    p.innerText = data;
  
    const body = document.querySelector("body");
    body.appendChild(p);
  }
  
  function queryWikipedia(callback) {
  
    let req = new XMLHttpRequest();
    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow";
    req.open("GET", url);
    req.onreadystatechange = function (aEvt) {
      if(req.readyState === 4) {
        if(req.status === 200) {
          callback(null, JSON.parse(req.responseText))
        } else {
          dump("Error loading page\n");
        }
      }
    }
    req.send();
  }
  queryWikipedia(createElement);