"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryRequire = tryRequire;

function tryRequire(path) {
  try {
    //TODO :: find a better way
    //for testing bypass it
    if (process.env.NODE_ENV === "test") return {};
    return require("".concat(path)).default;
  } catch (err) {
    return null;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbInRyeVJlcXVpcmUiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicmVxdWlyZSIsImRlZmF1bHQiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxVQUFULENBQW9CQyxJQUFwQixFQUF1QztBQUM1QyxNQUFJO0FBQ0Y7QUFFQTtBQUNBLFFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLE1BQTdCLEVBQXFDLE9BQU8sRUFBUDtBQUVyQyxXQUFPQyxPQUFPLFdBQUlKLElBQUosRUFBUCxDQUFtQkssT0FBMUI7QUFDRCxHQVBELENBT0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1osV0FBTyxJQUFQO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0cnlSZXF1aXJlKHBhdGg6IHN0cmluZyk6IGFueSB7XG4gIHRyeSB7XG4gICAgLy9UT0RPIDo6IGZpbmQgYSBiZXR0ZXIgd2F5XG5cbiAgICAvL2ZvciB0ZXN0aW5nIGJ5cGFzcyBpdFxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCIpIHJldHVybiB7fTtcblxuICAgIHJldHVybiByZXF1aXJlKGAke3BhdGh9YCkuZGVmYXVsdDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==