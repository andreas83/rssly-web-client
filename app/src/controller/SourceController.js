

class Source extends BaseController
{
    constructor(){
      super();

    }
    index(NextPageURL=false){
      var scope = this

      if(!NextPageURL)
        NextPageURL="http://rssly.codejungle.org/api/1/sources/";

      this.ajaxGet(NextPageURL)
      .then(JSON.parse)
      .then(function(res){
        console.log(res);

        //assign key / val to template
        scope.assign("data", res.results)
        //render template
        scope.render("item")
        //data binding example
        jQuery("#next").click(function(){
            //run index again with different NextPageURL
            this.index(res.next);
        }.bind(this))

      }.bind(scope))
      .catch(function(error) { console.log(error); });


    }
}

//@todo routing (url / controller mapping)
var run = new Source();
run.index()
