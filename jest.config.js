module.exports = {
  roots: ["<rootDir>/"],
  collectCoverage: true,
  coverageReporters: ["html", "clover"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
