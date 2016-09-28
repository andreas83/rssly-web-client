

class Source extends BaseController
{
    constructor(){
      super();

    }
    index(){
      this.assign("x", "y")
      $.getJSON( "http://rssly.codejungle.org/api/1/sources/", function( res ) {
        $(res.data).each(function(key, val){
            console.log(val.attributes)
        });
      });

      this.render("source")
    }
}


var run = new Source();
run.index()
