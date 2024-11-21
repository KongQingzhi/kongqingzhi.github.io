# 解决 eslint 无法识别全局类型的问题

## 问题

**描述**：

在使用 Vue 3 + TypeScript 封装组件的过程中，为了确保类型安全和代码的可维护性，通常需要为对象定义类型。我习惯将这些类型定义放在 `types/index.d.ts` 文件中，以便进行全局定义。这样做的好处是可以集中管理所有类型定义，方便后续的维护和扩展。然而，在完成类型定义并尝试在组件中使用这些类型时，我遇到了一个报错。具体来说，`eslint` 无法识别这些全局类型，导致代码中出现了 `no-undef` 的错误提示。这不仅影响了代码的编译，还增加了调试的难度。

> [!DANGER]
> :x: 'Article' is not defined. eslint(no-undef)

由于这个错误是由 `eslint` 报出的，我首先检查了我的 `eslint` 配置文件。在配置中，为了能够解析 `TypeScript` 文件，我引入并配置了 `typescript-eslint` 插件。对于 `.vue` 文件的处理规则，这部分配置是通过 `eslint` 自动生成的，理论上不应该存在配置错误。因此，问题可能出在其他地方。

::: code-group

```js [eslint.config.js] {5-6,58}
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
  },
];
```

:::

## 原因

我开始在网上搜索这个问题，发现了一些解决方案。其中一种建议是直接禁用 `no-undef` 规则，即不再检查未定义的变量。虽然这种方法确实可以快速解决问题，但它并不是一个理想的解决方案。因为禁用 `no-undef` 检查可能会导致项目中出现更多的未定义变量错误，进而影响代码的质量和可维护性。因此，寻找一个既能解决问题又不影响代码质量的方法更为重要。

随后，我改变了思路，决定重新添加全局类型。我开始怀疑自己使用全局类型的方式是否正确。于是，我开始搜索如何正确地使用 TypeScript 的全局类型。在这个过程中，我找到了阮一峰老师写的《TypeScript 教程》中的 [d.ts 类型声明文件](https://typescript.p6p.net/typescript-tutorial/d.ts.html)。这篇文章详细介绍了如何创建和使用 `.d.ts` 文件来声明全局类型，这给了我很大的启发。通过阅读教程，我意识到项目中可能缺少必要的配置文件。进一步检查后，我发现由于项目是使用 VitePress 构建的，系统并未自动添加 `tsconfig.json` 文件，这导致了全局类型无法被正确识别。

我立即在项目根目录下新建了一个 `tsconfig.json` 文件，并添加了以下内容：

::: code-group

```json [tsconfig.json]
{
  // include包含的形式命名的文件可以被全局访问
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "types/**/*.d.ts"]
}
```

:::

将`types` 目录添加到 `include` 中，这样就可以正确识别全局类型了。本以为解决了问题，但实际测试后，问题并没有得到解决。依然存在 `no-undef` 错误。

在尝试解决这个问题的过程中，我开始怀疑可能是 `eslint` 的配置出现了问题。因此，我重新检查了我的 `eslint` 配置文件，确认了 `typescript-eslint` 插件已经正确安装并且配置无误。然而，即使这样，问题依然没有得到解决。进一步分析后，我发现配置文件中关于 `.vue` 文件的解析配置是在 `languageOptions.parserOptions.parser` 下，使用的解析器名称为 `tseslint.parser`。但是，我在配置文件中并没有添加 `tseslint.parser` 的具体配置。于是，我添加了 `tseslint.parser` 的配置。经过这一调整，问题终于得到了解决。

## 解决方法

1. 在项目根目录下新建了一个 `tsconfig.json` 文件，并添加了以下内容：

::: code-group

```json [tsconfig.json]
{
  // include包含的形式命名的文件可以被全局访问
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "types/**/*.d.ts"]
}
```

:::

2. `eslint` 配置文件中未添加解析器 `tseslint.parser` 配置。

::: code-group

```js [eslint.config.js] {59}
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
```

:::

对于 `.vue` 文件，更合适的解析器应该是 `eslint-plugin-vue`

**安装**：

```bash
npm install --save-dev eslint vue-eslint-parser
```

**更新配置文件**：

::: code-group

```js [eslint.config.js] {59}
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
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: { parser: tseslint.parser },
    },
  },
];
```

:::

## 测试

在解决了相关问题之后，组件文件能够被正确加载，编辑器中之前存在的错误提示也随之消失。此外，现在可以通过按住Ctrl键并用鼠标左键点击相关代码，直接导航到`.d.ts`文件中的类型声明，这表明类型定义文件已经被正确解析和引用，开发体验得到了显著提升。

## 参考文档

[Configure Language Options](https://eslint.org/docs/latest/use/configure/language-options)

[Configure a Parser](https://eslint.org/docs/latest/use/configure/parser)

[@typescript-eslint/parser](https://typescript-eslint.io/packages/parser)

[vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser)
