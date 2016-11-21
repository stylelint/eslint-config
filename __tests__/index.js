var config = require("../")

it("test basic properties of config", function () {
  expect(isObject(config.parserOptions)).toBeTruthy()
  expect(isObject(config.env)).toBeTruthy()
  expect(isObject(config.rules)).toBeTruthy()
})

it("load config in ESLint to validate all rule syntax is correct", function () {
  var CLIEngine = require("eslint").CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: "eslintrc.json",
  })

  expect(cli.executeOnText("var foo\n")).toBeTruthy()
})

function isObject(obj) {
  return typeof obj === "object" && obj !== null
}
