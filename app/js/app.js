"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseController = function () {
  function BaseController() {
    _classCallCheck(this, BaseController);
  }

  _createClass(BaseController, [{
    key: "assign",
    value: function assign(key, val) {
      this.key = val;
    }
  }, {
    key: "addTemplate",
    value: function addTemplate(data) {
      console.log("addTemplate");
    }
  }, {
    key: "render",
    value: function render(source) {
      console.log(this);
      /*
          console.log(cssContent);
          var template = Handlebars.compile(source);
          var result = template(this.data);
          */
    }
  }]);

  return BaseController;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Source = function (_BaseController) {
  _inherits(Source, _BaseController);

  function Source() {
    _classCallCheck(this, Source);

    return _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).call(this));
  }

  _createClass(Source, [{
    key: "index",
    value: function index() {
      this.assign("x", "y");
      $.getJSON("http://rssly.codejungle.org/api/1/sources/", function (res) {
        $(res.data).each(function (key, val) {
          console.log(val.attributes);
        });
      });

      this.render("source");
    }
  }]);

  return Source;
}(BaseController);

var run = new Source();
run.index();
//# sourceMappingURL=app.js.map
