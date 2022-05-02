module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // 扩展的配置
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "prettier",
  ],
  // 该包让eslint理解typescript语法
  parser: "@typescript-eslint/parser",
  // 告诉eslint加载这个包，允许我们在代码配置规则
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    // tsconfigRootDir: __dirname,
    // // !!! 这部分需要修改，多包模式
    // project: ['./tsconfig.json','./core/*/tsconfig.json'],
  },
  rules: {
    semi: ["error", "always"],
  },
};
