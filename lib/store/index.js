"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = initStore;
exports.initStoreWithModules = initStoreWithModules;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _actions = _interopRequireDefault(require("../modules/storage/actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var middleware = [_reduxThunk.default];

function combineReducers(providers) {
  var reducers = {};

  for (var p in providers) {
    if (providers.hasOwnProperty(p)) {
      var provider = providers[p];
      var reducerName = p.toLowerCase();
      reducers[reducerName] = provider.reducer();
    }
  }

  return (0, _redux.combineReducers)(_objectSpread({}, reducers));
}

function initActionProviders(store, providers) {
  var defaults = {};

  for (var p in providers) {
    if (providers.hasOwnProperty(p)) {
      defaults[p] = providers[p];
      defaults[p].dispatch = store.dispatch;
    }
  }

  return defaults;
}

function initStore(providers) {
  var preloadState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extraMiddleware = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extraEnhancers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var devMode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  if (devMode) {
    middleware.push(require("redux-logger").createLogger());
  }

  var Store = (0, _redux.createStore)(combineReducers(providers), preloadState, _redux.compose.apply(void 0, [_redux.applyMiddleware.apply(void 0, middleware.concat(_toConsumableArray(extraMiddleware)))].concat(_toConsumableArray(extraEnhancers))));
  var ActionProviders = initActionProviders(Store, providers);
  return {
    Store: Store,
    ActionProviders: ActionProviders
  };
}

function initStoreWithModules() {
  var providers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var preloadState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extraMiddleware = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extraEnhancers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var devMode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  return initStore(_objectSpread({
    Storage: new _actions.default()
  }, providers), preloadState, extraMiddleware, extraEnhancers, devMode);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwidGh1bmsiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm92aWRlcnMiLCJyZWR1Y2VycyIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3ZpZGVyIiwicmVkdWNlck5hbWUiLCJ0b0xvd2VyQ2FzZSIsInJlZHVjZXIiLCJpbml0QWN0aW9uUHJvdmlkZXJzIiwic3RvcmUiLCJkZWZhdWx0cyIsImRpc3BhdGNoIiwiaW5pdFN0b3JlIiwicHJlbG9hZFN0YXRlIiwiZXh0cmFNaWRkbGV3YXJlIiwiZXh0cmFFbmhhbmNlcnMiLCJkZXZNb2RlIiwicHVzaCIsInJlcXVpcmUiLCJjcmVhdGVMb2dnZXIiLCJTdG9yZSIsImNvbXBvc2UiLCJhcHBseU1pZGRsZXdhcmUiLCJBY3Rpb25Qcm92aWRlcnMiLCJpbml0U3RvcmVXaXRoTW9kdWxlcyIsIlN0b3JhZ2UiLCJTdG9yYWdlQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFPQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQWUsR0FBRyxDQUFDQyxtQkFBRCxDQUF0Qjs7QUFFQSxTQUFTQyxlQUFULENBQXFEQyxTQUFyRCxFQUE0RTtBQUMxRSxNQUFJQyxRQUFhLEdBQUcsRUFBcEI7O0FBRUEsT0FBSyxJQUFJQyxDQUFULElBQWNGLFNBQWQsRUFBeUI7QUFDdkIsUUFBSUEsU0FBUyxDQUFDRyxjQUFWLENBQXlCRCxDQUF6QixDQUFKLEVBQWlDO0FBQy9CLFVBQU1FLFFBQVEsR0FBSUosU0FBRCxDQUFtQkUsQ0FBbkIsQ0FBakI7QUFDQSxVQUFNRyxXQUFXLEdBQUdILENBQUMsQ0FBQ0ksV0FBRixFQUFwQjtBQUNBTCxNQUFBQSxRQUFRLENBQUNJLFdBQUQsQ0FBUixHQUF3QkQsUUFBUSxDQUFDRyxPQUFULEVBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLDhDQUNGTixRQURFLEVBQVA7QUFHRDs7QUFFRCxTQUFTTyxtQkFBVCxDQUNFQyxLQURGLEVBRUVULFNBRkYsRUFHSztBQUNILE1BQUlVLFFBQWEsR0FBRyxFQUFwQjs7QUFFQSxPQUFLLElBQUlSLENBQVQsSUFBY0YsU0FBZCxFQUF5QjtBQUN2QixRQUFJQSxTQUFTLENBQUNHLGNBQVYsQ0FBeUJELENBQXpCLENBQUosRUFBaUM7QUFDL0JRLE1BQUFBLFFBQVEsQ0FBQ1IsQ0FBRCxDQUFSLEdBQWVGLFNBQUQsQ0FBbUJFLENBQW5CLENBQWQ7QUFDQVEsTUFBQUEsUUFBUSxDQUFDUixDQUFELENBQVIsQ0FBWVMsUUFBWixHQUF1QkYsS0FBSyxDQUFDRSxRQUE3QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0QsUUFBUDtBQUNEOztBQUVNLFNBQVNFLFNBQVQsQ0FDTFosU0FESyxFQU1MO0FBQUEsTUFKQWEsWUFJQSx1RUFKb0IsRUFJcEI7QUFBQSxNQUhBQyxlQUdBLHVFQUg4QixFQUc5QjtBQUFBLE1BRkFDLGNBRUEsdUVBRjZCLEVBRTdCO0FBQUEsTUFEQUMsT0FDQSx1RUFEbUIsSUFDbkI7O0FBQ0EsTUFBSUEsT0FBSixFQUFhO0FBQ1huQixJQUFBQSxVQUFVLENBQUNvQixJQUFYLENBQWdCQyxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCQyxZQUF4QixFQUFoQjtBQUNEOztBQUVELE1BQU1DLEtBQUssR0FBRyx3QkFDWnJCLGVBQWUsQ0FBQ0MsU0FBRCxDQURILEVBRVphLFlBRlksRUFHWlEsOEJBQ0VDLHFDQUF1QnpCLFVBQXZCLDJCQUFzQ2lCLGVBQXRDLEdBREYsNEJBRUtDLGNBRkwsR0FIWSxDQUFkO0FBU0EsTUFBTVEsZUFBa0IsR0FBR2YsbUJBQW1CLENBQUNZLEtBQUQsRUFBUXBCLFNBQVIsQ0FBOUM7QUFDQSxTQUFPO0FBQ0xvQixJQUFBQSxLQUFLLEVBQUxBLEtBREs7QUFFTEcsSUFBQUEsZUFBZSxFQUFmQTtBQUZLLEdBQVA7QUFJRDs7QUFFTSxTQUFTQyxvQkFBVCxHQU1MO0FBQUEsTUFMQXhCLFNBS0EsdUVBTDhCLEVBSzlCO0FBQUEsTUFKQWEsWUFJQSx1RUFKb0IsRUFJcEI7QUFBQSxNQUhBQyxlQUdBLHVFQUg4QixFQUc5QjtBQUFBLE1BRkFDLGNBRUEsdUVBRjZCLEVBRTdCO0FBQUEsTUFEQUMsT0FDQSx1RUFEbUIsSUFDbkI7QUFDQSxTQUFPSixTQUFTO0FBRVphLElBQUFBLE9BQU8sRUFBRSxJQUFJQyxnQkFBSjtBQUZHLEtBR1QxQixTQUhTLEdBS2RhLFlBTGMsRUFNZEMsZUFOYyxFQU9kQyxjQVBjLEVBUWRDLE9BUmMsQ0FBaEI7QUFVRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZVN0b3JlLFxuICBhcHBseU1pZGRsZXdhcmUsXG4gIGNvbXBvc2UsXG4gIGNvbWJpbmVSZWR1Y2VycyBhcyByZWR1eENvbWJpbmVSZWR1Y2VycyxcbiAgUmVkdWNlclxufSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcblxuaW1wb3J0IHsgQWN0aW9uUHJvdmlkZXIsIElBY3Rpb25Qcm92aWRlcnMgfSBmcm9tIFwiLi4vYWN0aW9uLXByb3ZpZGVyc1wiO1xuaW1wb3J0IElNb2R1bGVzQWN0aW9uUHJvdmlkZXJzIGZyb20gXCIuLi9tb2R1bGVzXCI7XG5pbXBvcnQgU3RvcmFnZUFjdGlvbnMgZnJvbSBcIi4uL21vZHVsZXMvc3RvcmFnZS9hY3Rpb25zXCI7XG5cbmxldCBtaWRkbGV3YXJlOiBhbnkgPSBbdGh1bmtdO1xuXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnM8VCBleHRlbmRzIElBY3Rpb25Qcm92aWRlcnM+KHByb3ZpZGVyczogVCk6IFJlZHVjZXIge1xuICBsZXQgcmVkdWNlcnM6IGFueSA9IHt9O1xuXG4gIGZvciAobGV0IHAgaW4gcHJvdmlkZXJzKSB7XG4gICAgaWYgKHByb3ZpZGVycy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSAocHJvdmlkZXJzIGFzIGFueSlbcF0gYXMgQWN0aW9uUHJvdmlkZXI7XG4gICAgICBjb25zdCByZWR1Y2VyTmFtZSA9IHAudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJlZHVjZXJzW3JlZHVjZXJOYW1lXSA9IHByb3ZpZGVyLnJlZHVjZXIoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVkdXhDb21iaW5lUmVkdWNlcnMoe1xuICAgIC4uLnJlZHVjZXJzXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0QWN0aW9uUHJvdmlkZXJzPFQgZXh0ZW5kcyBJQWN0aW9uUHJvdmlkZXJzPihcbiAgc3RvcmU6IGFueSxcbiAgcHJvdmlkZXJzOiBUXG4pOiBUIHtcbiAgbGV0IGRlZmF1bHRzOiBhbnkgPSB7fTtcblxuICBmb3IgKGxldCBwIGluIHByb3ZpZGVycykge1xuICAgIGlmIChwcm92aWRlcnMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgIGRlZmF1bHRzW3BdID0gKHByb3ZpZGVycyBhcyBhbnkpW3BdO1xuICAgICAgZGVmYXVsdHNbcF0uZGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmU8VCBleHRlbmRzIElBY3Rpb25Qcm92aWRlcnM+KFxuICBwcm92aWRlcnM6IFQsXG4gIHByZWxvYWRTdGF0ZTogYW55ID0ge30sXG4gIGV4dHJhTWlkZGxld2FyZTogQXJyYXk8YW55PiA9IFtdLFxuICBleHRyYUVuaGFuY2VyczogQXJyYXk8YW55PiA9IFtdLFxuICBkZXZNb2RlOiBib29sZWFuID0gdHJ1ZVxuKSB7XG4gIGlmIChkZXZNb2RlKSB7XG4gICAgbWlkZGxld2FyZS5wdXNoKHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIikuY3JlYXRlTG9nZ2VyKCkpO1xuICB9XG5cbiAgY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBjb21iaW5lUmVkdWNlcnMocHJvdmlkZXJzKSxcbiAgICBwcmVsb2FkU3RhdGUsXG4gICAgY29tcG9zZShcbiAgICAgIGFwcGx5TWlkZGxld2FyZSguLi5bLi4ubWlkZGxld2FyZSwgLi4uZXh0cmFNaWRkbGV3YXJlXSksXG4gICAgICAuLi5leHRyYUVuaGFuY2Vyc1xuICAgIClcbiAgKTtcblxuICBjb25zdCBBY3Rpb25Qcm92aWRlcnM6IFQgPSBpbml0QWN0aW9uUHJvdmlkZXJzKFN0b3JlLCBwcm92aWRlcnMpO1xuICByZXR1cm4ge1xuICAgIFN0b3JlLFxuICAgIEFjdGlvblByb3ZpZGVyc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlV2l0aE1vZHVsZXMoXG4gIHByb3ZpZGVyczogSUFjdGlvblByb3ZpZGVycyA9IHt9LFxuICBwcmVsb2FkU3RhdGU6IGFueSA9IHt9LFxuICBleHRyYU1pZGRsZXdhcmU6IEFycmF5PGFueT4gPSBbXSxcbiAgZXh0cmFFbmhhbmNlcnM6IEFycmF5PGFueT4gPSBbXSxcbiAgZGV2TW9kZTogYm9vbGVhbiA9IHRydWVcbikge1xuICByZXR1cm4gaW5pdFN0b3JlPElNb2R1bGVzQWN0aW9uUHJvdmlkZXJzPihcbiAgICB7XG4gICAgICBTdG9yYWdlOiBuZXcgU3RvcmFnZUFjdGlvbnMoKSxcbiAgICAgIC4uLnByb3ZpZGVyc1xuICAgIH0sXG4gICAgcHJlbG9hZFN0YXRlLFxuICAgIGV4dHJhTWlkZGxld2FyZSxcbiAgICBleHRyYUVuaGFuY2VycyxcbiAgICBkZXZNb2RlXG4gICk7XG59XG4iXX0=