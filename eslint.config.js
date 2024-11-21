// 导入全局变量配置
import globals from 'globals';
// 导入JavaScript相关的ESLint插件
import pluginJs from '@eslint/js';
// 导入TypeScript相关的ESLint插件
import tseslint from 'typescript-eslint';
// 导入Vue.js相关的ESLint插件
import pluginVue from 'eslint-plugin-vue';
// 导入eslint配置项以配合Prettier使用
import eslintConfigPrettier from 'eslint-config-prettier';

/**
 * 导入prettier的ESLint推荐配置
 * 这是为了确保代码风格与prettier的格式化风格保持一致
 * ESLint是一个用于识别和报告JavaScript代码中模式的工具，以促进代码一致性和避免错误
 * Prettier是一个有自己配置的代码格式化工具，这个导入的配置将ESLint规则调整为与Prettier的格式化规则一致
 */
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/**
 * ESLint配置数组，用于定义代码检查规则
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  // 应用TypeScript ESLint推荐的规则配置
  ...tseslint.configs.recommended,

  // 应用Vue.js ESLint推荐的规则配置
  ...pluginVue.configs['flat/essential'],

  // 应用JavaScript ESLint推荐的规则配置
  pluginJs.configs.recommended,

  // 引入ESLint配置中的Prettier规范
  eslintConfigPrettier,

  // 使用 ESLint 插件 Prettier 的推荐配置
  eslintPluginPrettierRecommended,

  // 配置忽略项，指定在某些操作或任务中不应被处理的目录或文件
  { ignores: ['dist/**', 'node_modules/**', '**/iconfont.js'] },

  // 定义文件匹配模式，仅对指定的文件类型应用以下规则
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    rules: {
      // 禁止使用console.*方法
      'no-console': 'error',
    },
  },

  // 配置全局变量，使用浏览器环境的全局变量
  { languageOptions: { globals: globals.browser } },

  // 对Vue文件进行特殊配置，使用TypeScript解析器
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    parser: tseslint.parser,
  },
];
