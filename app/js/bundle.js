"use strict";
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseController = function () {
  function BaseController() {
    _classCallCheck(this, BaseController);

    this.data = new Map();
  }

  _createClass(BaseController, [{
    key: "assign",
    value: function assign(key, val) {
      this.data.set(key, val);
    }
  }, {
    key: "render",
    value: function render(source) {
      var data = new Array();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.data.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2);

          var key = _step$value[0];
          var val = _step$value[1];

          data[key] = val;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var element = document.querySelector('#app');
      element.innerHTML = window["rssly"]["templates"][source](data);
    }
  }, {
    key: "ajaxGet",
    value: function ajaxGet(url) {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = function () {
          if (req.status === 200) {
            resolve(req.response);
          } else {
            reject(new Error(req.statusText));
          }
        };

        req.onerror = function () {
          reject(new Error("Network error"));
        };

        req.send();
      });
    }
  }]);

  return BaseController;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainController = function (_BaseController) {
  _inherits(MainController, _BaseController);

  function MainController() {
    _classCallCheck(this, MainController);

    return _possibleConstructorReturn(this, (MainController.__proto__ || Object.getPrototypeOf(MainController)).apply(this, arguments));
  }

  return MainController;
}(BaseController);
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
      var NextPageURL = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      var scope = this;

      if (!NextPageURL) NextPageURL = "http://rssly.codejungle.org/api/1/sources/?language=de";

      this.ajaxGet(NextPageURL).then(JSON.parse).then(function (res) {
        console.log(res.results);

        //assign key / val to template
        scope.assign("data", res.results);
        //render template
        scope.render("item");
        //data binding example
        jQuery("#next").click(function () {
          //run index again with different NextPageURL
          this.index(res.next);
        }.bind(this));

        jQuery("#prev").click(function () {
          //run index again with different NextPageURL
          this.index(res.prev);
        }.bind(this));
      }.bind(scope)).catch(function (error) {
        console.log(error);
      });
    }
  }]);

  return Source;
}(BaseController);

//@todo routing (url / controller mapping)


var run = new Source();
run.index();
//# sourceMappingURL=bundle.js.map
