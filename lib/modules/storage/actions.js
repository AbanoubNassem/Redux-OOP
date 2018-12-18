"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionProviders = require("../../action-providers");

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

var _reducer = _interopRequireDefault(require("./reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StorageActions =
/*#__PURE__*/
function (_ActionProvider) {
  _inherits(StorageActions, _ActionProvider);

  function StorageActions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StorageActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StorageActions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "load", function () {
      var storage = {};

      for (var i = 0, len = localStorage.length; i < len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        storage[key] = JSON.parse(value);
      }

      _this.dispatch({
        type: _actionTypes.default.STORAGE_LOADED,
        payload: storage
      });

      return storage;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clear", function () {
      var storage = {};
      localStorage.clear();

      _this.dispatch({
        type: _actionTypes.default.STORAGE_CLEARED,
        payload: storage
      });

      return storage;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveOrUpdate",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(object) {
        var index, key;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = 0;

              case 1:
                if (!(index < Object.keys(object).length)) {
                  _context.next = 8;
                  break;
                }

                key = Object.keys(object)[index];
                _context.next = 5;
                return localStorage.setItem(key, JSON.stringify(object[key]));

              case 5:
                index++;
                _context.next = 1;
                break;

              case 8:
                return _context.abrupt("return", _this.dispatch({
                  type: _actionTypes.default.STORAGE_UPDATED,
                  payload: object
                }));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "remove",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var keys,
          deleted,
          _args3 = arguments;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              keys = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
              deleted = {};

              if (Array.isArray(keys)) {
                keys.forEach(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2(key) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            localStorage.removeItem(key);
                            deleted[key] = null;

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              } else {
                localStorage.removeItem(keys);
                deleted[keys] = null;
              }

              return _context3.abrupt("return", _this.dispatch({
                type: _actionTypes.default.STORAGE_REMOVED,
                payload: deleted
              }));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reducer", function () {
      return _reducer.default;
    });

    return _this;
  }

  return StorageActions;
}(_actionProviders.ActionProvider);

exports.default = StorageActions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3N0b3JhZ2UvYWN0aW9ucy50cyJdLCJuYW1lcyI6WyJTdG9yYWdlQWN0aW9ucyIsInN0b3JhZ2UiLCJpIiwibGVuIiwibG9jYWxTdG9yYWdlIiwibGVuZ3RoIiwia2V5IiwidmFsdWUiLCJKU09OIiwicGFyc2UiLCJkaXNwYXRjaCIsInR5cGUiLCJTdG9yYWdlQWN0aW9uVHlwZXMiLCJTVE9SQUdFX0xPQURFRCIsInBheWxvYWQiLCJjbGVhciIsIlNUT1JBR0VfQ0xFQVJFRCIsIm9iamVjdCIsImluZGV4IiwiT2JqZWN0Iiwia2V5cyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJTVE9SQUdFX1VQREFURUQiLCJkZWxldGVkIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInJlbW92ZUl0ZW0iLCJTVE9SQUdFX1JFTU9WRUQiLCJyZWR1Y2VyIiwiQWN0aW9uUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUZBRVosWUFBTTtBQUNYLFVBQU1DLE9BQVksR0FBRyxFQUFyQjs7QUFFQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVdDLEdBQUcsR0FBR0MsWUFBWSxDQUFDQyxNQUFuQyxFQUEyQ0gsQ0FBQyxHQUFHQyxHQUEvQyxFQUFvREQsQ0FBQyxFQUFyRCxFQUF5RDtBQUN2RCxZQUFJSSxHQUFRLEdBQUdGLFlBQVksQ0FBQ0UsR0FBYixDQUFpQkosQ0FBakIsQ0FBZjtBQUNBLFlBQUlLLEtBQUssR0FBR0gsWUFBWSxDQUFDRSxHQUFELENBQXhCO0FBQ0FMLFFBQUFBLE9BQU8sQ0FBQ0ssR0FBRCxDQUFQLEdBQWVFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixLQUFYLENBQWY7QUFDRDs7QUFFRCxZQUFLRyxRQUFMLENBQWM7QUFDWkMsUUFBQUEsSUFBSSxFQUFFQyxxQkFBbUJDLGNBRGI7QUFFWkMsUUFBQUEsT0FBTyxFQUFFYjtBQUZHLE9BQWQ7O0FBS0EsYUFBT0EsT0FBUDtBQUNELEs7O29GQUVPLFlBQU07QUFDWixVQUFNQSxPQUFZLEdBQUcsRUFBckI7QUFFQUcsTUFBQUEsWUFBWSxDQUFDVyxLQUFiOztBQUVBLFlBQUtMLFFBQUwsQ0FBYztBQUNaQyxRQUFBQSxJQUFJLEVBQUVDLHFCQUFtQkksZUFEYjtBQUVaRixRQUFBQSxPQUFPLEVBQUViO0FBRkcsT0FBZDs7QUFLQSxhQUFPQSxPQUFQO0FBQ0QsSzs7Ozs7Ozs4QkFFYyxpQkFBT2dCLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0pDLGdCQUFBQSxLQURJLEdBQ0ksQ0FESjs7QUFBQTtBQUFBLHNCQUNPQSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxNQUFaLEVBQW9CWixNQURuQztBQUFBO0FBQUE7QUFBQTs7QUFFTEMsZ0JBQUFBLEdBRkssR0FFQ2EsTUFBTSxDQUFDQyxJQUFQLENBQVlILE1BQVosRUFBb0JDLEtBQXBCLENBRkQ7QUFBQTtBQUFBLHVCQUlMZCxZQUFZLENBQUNpQixPQUFiLENBQXFCZixHQUFyQixFQUEwQkUsSUFBSSxDQUFDYyxTQUFMLENBQWVMLE1BQU0sQ0FBQ1gsR0FBRCxDQUFyQixDQUExQixDQUpLOztBQUFBO0FBQzJDWSxnQkFBQUEsS0FBSyxFQURoRDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpREFPTixNQUFLUixRQUFMLENBQWM7QUFDbkJDLGtCQUFBQSxJQUFJLEVBQUVDLHFCQUFtQlcsZUFETjtBQUVuQlQsa0JBQUFBLE9BQU8sRUFBRUc7QUFGVSxpQkFBZCxDQVBNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OzRCQWFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0csY0FBQUEsSUFBUCw4REFBc0MsRUFBdEM7QUFDSEksY0FBQUEsT0FERyxHQUNZLEVBRFo7O0FBR1Asa0JBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjTixJQUFkLENBQUosRUFBeUI7QUFDdkJBLGdCQUFBQSxJQUFJLENBQUNPLE9BQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUFhLGtCQUFNckIsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hGLDRCQUFBQSxZQUFZLENBQUN3QixVQUFiLENBQXdCdEIsR0FBeEI7QUFDQWtCLDRCQUFBQSxPQUFPLENBQUNsQixHQUFELENBQVAsR0FBZSxJQUFmOztBQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUQsZUFMRCxNQUtPO0FBQ0xGLGdCQUFBQSxZQUFZLENBQUN3QixVQUFiLENBQXdCUixJQUF4QjtBQUNBSSxnQkFBQUEsT0FBTyxDQUFDSixJQUFELENBQVAsR0FBZ0IsSUFBaEI7QUFDRDs7QUFYTSxnREFhQSxNQUFLVixRQUFMLENBQWM7QUFDbkJDLGdCQUFBQSxJQUFJLEVBQUVDLHFCQUFtQmlCLGVBRE47QUFFbkJmLGdCQUFBQSxPQUFPLEVBQUVVO0FBRlUsZUFBZCxDQWJBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7O3NGQW1CQztBQUFBLGFBQU1NLGdCQUFOO0FBQUEsSzs7Ozs7O0VBaEVnQ0MsK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RvcmFnZUFjdGlvblByb3ZpZGVyIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IEFjdGlvblByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL2FjdGlvbi1wcm92aWRlcnNcIjtcbmltcG9ydCBTdG9yYWdlQWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZUFjdGlvbnMgZXh0ZW5kcyBBY3Rpb25Qcm92aWRlclxuICBpbXBsZW1lbnRzIElTdG9yYWdlQWN0aW9uUHJvdmlkZXIge1xuICBsb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2U6IGFueSA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbGV0IGtleTogYW55ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZVtrZXldO1xuICAgICAgc3RvcmFnZVtrZXldID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTdG9yYWdlQWN0aW9uVHlwZXMuU1RPUkFHRV9MT0FERUQsXG4gICAgICBwYXlsb2FkOiBzdG9yYWdlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RvcmFnZTtcbiAgfTtcblxuICBjbGVhciA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlOiBhbnkgPSB7fTtcblxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTdG9yYWdlQWN0aW9uVHlwZXMuU1RPUkFHRV9DTEVBUkVELFxuICAgICAgcGF5bG9hZDogc3RvcmFnZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0b3JhZ2U7XG4gIH07XG5cbiAgc2F2ZU9yVXBkYXRlID0gYXN5bmMgKG9iamVjdDogYW55KSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhvYmplY3QpW2luZGV4XTtcblxuICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3Rba2V5XSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFN0b3JhZ2VBY3Rpb25UeXBlcy5TVE9SQUdFX1VQREFURUQsXG4gICAgICBwYXlsb2FkOiBvYmplY3RcbiAgICB9KTtcbiAgfTtcblxuICByZW1vdmUgPSBhc3luYyAoa2V5czogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiA9IFtdKSA9PiB7XG4gICAgbGV0IGRlbGV0ZWQ6IGFueSA9IHt9O1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMuZm9yRWFjaChhc3luYyBrZXkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICBkZWxldGVkW2tleV0gPSBudWxsO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleXMpO1xuICAgICAgZGVsZXRlZFtrZXlzXSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU3RvcmFnZUFjdGlvblR5cGVzLlNUT1JBR0VfUkVNT1ZFRCxcbiAgICAgIHBheWxvYWQ6IGRlbGV0ZWRcbiAgICB9KTtcbiAgfTtcblxuICByZWR1Y2VyID0gKCkgPT4gcmVkdWNlcjtcbn1cbiJdfQ==