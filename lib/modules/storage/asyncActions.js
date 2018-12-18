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

var AsyncStorage;

try {
  if (process.env.NODE_ENV !== "test") {
    AsyncStorage = require("react-native").AsyncStorage;
  }
} catch (err) {
  AsyncStorage = {};
}

var AsyncStorageActions =
/*#__PURE__*/
function (_ActionProvider) {
  _inherits(AsyncStorageActions, _ActionProvider);

  function AsyncStorageActions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AsyncStorageActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AsyncStorageActions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "load",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var storage, keys, stores;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              storage = {};
              _context.next = 3;
              return AsyncStorage.getAllKeys();

            case 3:
              keys = _context.sent;
              _context.next = 6;
              return AsyncStorage.multiGet(keys);

            case 6:
              stores = _context.sent;
              stores.map(function (_result, i, store) {
                var key = store[i][0];
                var value = store[i][1];
                storage[key] = JSON.parse(value);
                return storage[key];
              });

              _this.dispatch({
                type: _actionTypes.default.STORAGE_LOADED,
                payload: storage
              });

              return _context.abrupt("return", storage);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clear",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var storage;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              storage = {};
              _context2.next = 3;
              return AsyncStorage.clear();

            case 3:
              _this.dispatch({
                type: _actionTypes.default.STORAGE_CLEARED,
                payload: storage
              });

              return _context2.abrupt("return", storage);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveOrUpdate",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(object) {
        var index, key;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                index = 0;

              case 1:
                if (!(index < Object.keys(object).length)) {
                  _context3.next = 8;
                  break;
                }

                key = Object.keys(object)[index];
                _context3.next = 5;
                return AsyncStorage.setItem(key, JSON.stringify(object[key]));

              case 5:
                index++;
                _context3.next = 1;
                break;

              case 8:
                return _context3.abrupt("return", _this.dispatch({
                  type: _actionTypes.default.STORAGE_UPDATED,
                  payload: object
                }));

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "remove",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      var keys,
          deleted,
          _args5 = arguments;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              keys = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : [];
              deleted = {};

              if (!Array.isArray(keys)) {
                _context5.next = 6;
                break;
              }

              keys.forEach(
              /*#__PURE__*/
              function () {
                var _ref5 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(key) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return AsyncStorage.removeItem(key);

                        case 2:
                          deleted[key] = null;

                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));

                return function (_x2) {
                  return _ref5.apply(this, arguments);
                };
              }());
              _context5.next = 9;
              break;

            case 6:
              _context5.next = 8;
              return AsyncStorage.removeItem(keys);

            case 8:
              deleted[keys] = null;

            case 9:
              return _context5.abrupt("return", _this.dispatch({
                type: _actionTypes.default.STORAGE_REMOVED,
                payload: deleted
              }));

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reducer", function () {
      return _reducer.default;
    });

    return _this;
  }

  return AsyncStorageActions;
}(_actionProviders.ActionProvider);

exports.default = AsyncStorageActions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3N0b3JhZ2UvYXN5bmNBY3Rpb25zLnRzIl0sIm5hbWVzIjpbIkFzeW5jU3RvcmFnZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInJlcXVpcmUiLCJlcnIiLCJBc3luY1N0b3JhZ2VBY3Rpb25zIiwic3RvcmFnZSIsImdldEFsbEtleXMiLCJrZXlzIiwibXVsdGlHZXQiLCJzdG9yZXMiLCJtYXAiLCJfcmVzdWx0IiwiaSIsInN0b3JlIiwia2V5IiwidmFsdWUiLCJKU09OIiwicGFyc2UiLCJkaXNwYXRjaCIsInR5cGUiLCJTdG9yYWdlQWN0aW9uVHlwZXMiLCJTVE9SQUdFX0xPQURFRCIsInBheWxvYWQiLCJjbGVhciIsIlNUT1JBR0VfQ0xFQVJFRCIsIm9iamVjdCIsImluZGV4IiwiT2JqZWN0IiwibGVuZ3RoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlNUT1JBR0VfVVBEQVRFRCIsImRlbGV0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwicmVtb3ZlSXRlbSIsIlNUT1JBR0VfUkVNT1ZFRCIsInJlZHVjZXIiLCJBY3Rpb25Qcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFKOztBQUVBLElBQUk7QUFDRixNQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixNQUE3QixFQUFxQztBQUNuQ0gsSUFBQUEsWUFBWSxHQUFHSSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCSixZQUF2QztBQUNEO0FBQ0YsQ0FKRCxDQUlFLE9BQU9LLEdBQVAsRUFBWTtBQUNaTCxFQUFBQSxZQUFZLEdBQUcsRUFBZjtBQUNEOztJQUVvQk0sbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBRVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NDLGNBQUFBLE9BREQsR0FDZ0IsRUFEaEI7QUFBQTtBQUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBSks7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBU0NoQixZQUFZLENBQUNzQyxVQUFiLENBQXdCN0IsSUFBeEIsQ0FURDs7QUFBQTtBQVVMeUIsY0FBQUEsT0FBTyxDQUFDekIsSUFBRCxDQUFQLEdBQWdCLElBQWhCOztBQVZLO0FBQUEsZ0RBYUEsTUFBS1csUUFBTCxDQUFjO0FBQ25CQyxnQkFBQUEsSUFBSSxFQUFFQyxxQkFBbUJpQixlQUROO0FBRW5CZixnQkFBQUEsT0FBTyxFQUFFVTtBQUZVLGVBQWQsQ0FiQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOztzRkFtQkM7QUFBQSxhQUFNTSxnQkFBTjtBQUFBLEs7Ozs7OztFQXBFcUNDLCtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFzeW5jU3RvcmFnZUFjdGlvblByb3ZpZGVyIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IEFjdGlvblByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL2FjdGlvbi1wcm92aWRlcnNcIjtcbmltcG9ydCBTdG9yYWdlQWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcblxubGV0IEFzeW5jU3RvcmFnZTogYW55O1xuXG50cnkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwidGVzdFwiKSB7XG4gICAgQXN5bmNTdG9yYWdlID0gcmVxdWlyZShcInJlYWN0LW5hdGl2ZVwiKS5Bc3luY1N0b3JhZ2U7XG4gIH1cbn0gY2F0Y2ggKGVycikge1xuICBBc3luY1N0b3JhZ2UgPSB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXN5bmNTdG9yYWdlQWN0aW9ucyBleHRlbmRzIEFjdGlvblByb3ZpZGVyXG4gIGltcGxlbWVudHMgSUFzeW5jU3RvcmFnZUFjdGlvblByb3ZpZGVyIHtcbiAgbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlOiBhbnkgPSB7fTtcblxuICAgIGNvbnN0IGtleXMgPSBhd2FpdCBBc3luY1N0b3JhZ2UuZ2V0QWxsS2V5cygpO1xuICAgIGNvbnN0IHN0b3JlcyA9IGF3YWl0IEFzeW5jU3RvcmFnZS5tdWx0aUdldChrZXlzIGFzIGFueSk7XG5cbiAgICBzdG9yZXMubWFwKChfcmVzdWx0OiBhbnksIGk6IG51bWJlciwgc3RvcmU6IGFueSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gc3RvcmVbaV1bMF07XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0b3JlW2ldWzFdO1xuICAgICAgc3RvcmFnZVtrZXldID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gc3RvcmFnZVtrZXldO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTdG9yYWdlQWN0aW9uVHlwZXMuU1RPUkFHRV9MT0FERUQsXG4gICAgICBwYXlsb2FkOiBzdG9yYWdlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RvcmFnZTtcbiAgfTtcblxuICBjbGVhciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlOiBhbnkgPSB7fTtcblxuICAgIGF3YWl0IEFzeW5jU3RvcmFnZS5jbGVhcigpO1xuXG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTdG9yYWdlQWN0aW9uVHlwZXMuU1RPUkFHRV9DTEVBUkVELFxuICAgICAgcGF5bG9hZDogc3RvcmFnZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0b3JhZ2U7XG4gIH07XG5cbiAgc2F2ZU9yVXBkYXRlID0gYXN5bmMgKG9iamVjdDogYW55KSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhvYmplY3QpW2luZGV4XTtcblxuICAgICAgYXdhaXQgQXN5bmNTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3Rba2V5XSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFN0b3JhZ2VBY3Rpb25UeXBlcy5TVE9SQUdFX1VQREFURUQsXG4gICAgICBwYXlsb2FkOiBvYmplY3RcbiAgICB9KTtcbiAgfTtcblxuICByZW1vdmUgPSBhc3luYyAoa2V5czogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiA9IFtdKSA9PiB7XG4gICAgbGV0IGRlbGV0ZWQ6IGFueSA9IHt9O1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMuZm9yRWFjaChhc3luYyBrZXkgPT4ge1xuICAgICAgICBhd2FpdCBBc3luY1N0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICBkZWxldGVkW2tleV0gPSBudWxsO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IEFzeW5jU3RvcmFnZS5yZW1vdmVJdGVtKGtleXMpO1xuICAgICAgZGVsZXRlZFtrZXlzXSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU3RvcmFnZUFjdGlvblR5cGVzLlNUT1JBR0VfUkVNT1ZFRCxcbiAgICAgIHBheWxvYWQ6IGRlbGV0ZWRcbiAgICB9KTtcbiAgfTtcblxuICByZWR1Y2VyID0gKCkgPT4gcmVkdWNlcjtcbn1cbiJdfQ==