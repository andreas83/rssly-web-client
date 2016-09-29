
class BaseController{
  constructor(){
    this.data= new Map();
  }
  assign(key, val)
  {
    this.data.set(key, val)
  }

  render(source)
  {
    var data=new Array()
    for (let [ key, val ] of this.data.entries())
    {
      data[key]=val;
    }
    var element = document.querySelector('#app');
    element.innerHTML = window["rssly"]["templates"][source](data);
  }

  ajaxGet(url) {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = function() {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(new Error(req.statusText));
            }
        };

        req.onerror = function() {
            reject(new Error("Network error"));
        };

        req.send();
    });
  }
}
