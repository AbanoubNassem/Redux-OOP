"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.default.STORAGE_REMOVED:
    case _actionTypes.default.STORAGE_UPDATED:
    case _actionTypes.default.STORAGE_LOADED:
      {
        return _objectSpread({}, state, action.payload);
      }

    case _actionTypes.default.STORAGE_CLEARED:
      {
        return {};
      }
  }

  return state;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3N0b3JhZ2UvcmVkdWNlci50cyJdLCJuYW1lcyI6WyJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTdG9yYWdlQWN0aW9uVHlwZXMiLCJTVE9SQUdFX1JFTU9WRUQiLCJTVE9SQUdFX1VQREFURUQiLCJTVE9SQUdFX0xPQURFRCIsInBheWxvYWQiLCJTVE9SQUdFX0NMRUFSRUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFZSxvQkFBNkI7QUFBQSxNQUE1QkEsS0FBNEIsdUVBQXBCLEVBQW9CO0FBQUEsTUFBaEJDLE1BQWdCOztBQUMxQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxxQkFBbUJDLGVBQXhCO0FBQ0EsU0FBS0QscUJBQW1CRSxlQUF4QjtBQUNBLFNBQUtGLHFCQUFtQkcsY0FBeEI7QUFBd0M7QUFDdEMsaUNBQVlOLEtBQVosRUFBc0JDLE1BQU0sQ0FBQ00sT0FBN0I7QUFDRDs7QUFDRCxTQUFLSixxQkFBbUJLLGVBQXhCO0FBQXlDO0FBQ3ZDLGVBQU8sRUFBUDtBQUNEO0FBUkg7O0FBVUEsU0FBT1IsS0FBUDtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmFnZUFjdGlvblR5cGVzIGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHt9LCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTdG9yYWdlQWN0aW9uVHlwZXMuU1RPUkFHRV9SRU1PVkVEOlxuICAgIGNhc2UgU3RvcmFnZUFjdGlvblR5cGVzLlNUT1JBR0VfVVBEQVRFRDpcbiAgICBjYXNlIFN0b3JhZ2VBY3Rpb25UeXBlcy5TVE9SQUdFX0xPQURFRDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgfVxuICAgIGNhc2UgU3RvcmFnZUFjdGlvblR5cGVzLlNUT1JBR0VfQ0xFQVJFRDoge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59O1xuIl19