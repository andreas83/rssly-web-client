this["rssly"] = this["rssly"] || {};
this["rssly"]["templates"] = this["rssly"]["templates"] || {};
this["rssly"]["templates"]["item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"news-item\">\n  <h1>"
    + escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"headline","hash":{},"data":data}) : helper)))
    + "</h1>\n  <h2>"
    + escapeExpression(((helper = (helper = helpers.subline || (depth0 != null ? depth0.subline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subline","hash":{},"data":data}) : helper)))
    + "</h2>\n  <div>Author:Test </div>\n\n  <p>"
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"useData":true});