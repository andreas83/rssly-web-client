

class Source extends BaseController
{
    constructor(){
      super();

    }
    index(){
      var scope = this
      this.ajaxGet("http://rssly.codejungle.org/api/1/sources/")
      .then(JSON.parse)
      .then(function(res){

        res.data.forEach(function (key,val) {
        
            scope.assign("headline", key.attributes.name)
            scope.assign("link", key.attributes.link)
        });

        scope.assign("author", "Andreas")

        this.render("item")
      }.bind(scope))
      .catch(function(error) { console.log(error); });


    }
}


var run = new Source();
run.index()
