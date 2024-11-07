# 在 VitePress 中集成 Tailwind CSS

## 为什么？

在 VitePress 中集成 TailwindCSS 主要是为了提升开发效率和增强页面的样式定制能力。VitePress 是一个基于 Vite 的静态站点生成器，专注于文档和博客的快速构建。TailwindCSS 是一个流行的低层次、实用优先的 CSS 框架，它通过提供一组预定义的类，帮助开发者快速实现自定义设计而不需要写很多自定义的 CSS。

将 TailwindCSS 集成到 VitePress 中，主要有以下几个优点：

1. **快速构建自定义样式**

- **灵活性高**：TailwindCSS 提供了丰富的工具类，可以快速应用样式，而无需编写大量的 CSS。你可以在 HTML 模板中直接使用 Tailwind 提供的类，迅速创建所需的布局和样式。
- **无需跳出工作流**：在文档编写过程中，你可以直接使用 TailwindCSS 的工具类进行样式调整，无需频繁切换到外部的 CSS 文件中进行修改。

2. **一致的设计系统**

- **统一风格**：使用 TailwindCSS 可以确保站点的各个部分具有一致的外观和感觉。它通过一套标准化的工具类（如 `text-center`、`p-4`、`bg-gray-100` 等）帮助开发者避免了不同开发人员之间风格不统一的问题。
- **配置和定制**：TailwindCSS 提供了一个 `tailwind.config.js` 配置文件，允许开发者定义自己的颜色、间距、字体等变量，从而建立一个自定义的设计系统。

3. **更高效的开发和维护**

- **响应式设计**：TailwindCSS 支持响应式设计，可以通过添加简洁的类来实现不同屏幕尺寸下的布局变化，例如使用 `sm:`, `md:`, `lg:` 前缀，轻松控制不同设备上的样式。
- **减少 CSS 冲突**：因为 TailwindCSS 是基于类名的，且通常类名具有较高的唯一性，避免了传统 CSS 中可能出现的全局样式冲突问题。

4. **性能优化**

- **树摇优化**：TailwindCSS 使用 PostCSS 工具和 Purge 功能，在生产环境下可以剔除未使用的样式，减小 CSS 文件的体积，从而提升页面加载速度。
- **快速开发**：开发过程中，TailwindCSS 提供的工具类能帮助开发者避免写大量的样式代码，减少开发时间，提高效率。

5. **更好的社区支持与生态**

- **丰富的插件和工具**：TailwindCSS 拥有一个活跃的社区，提供了很多第三方插件，可以扩展其功能，例如 Tailwind UI、Headless UI 等。此外，它与 VitePress 等现代前端工具链也有很好的兼容性。

6. **简化的样式管理**

- 在传统的开发中，维护和修改 CSS 文件往往非常复杂，尤其是当项目变大时，可能会遇到样式冲突、重复定义等问题。而 TailwindCSS 通过其独特的类名命名方式和功能的拆分，使得样式的管理变得更加清晰和模块化。

## 是什么？

**[TailwindCSS](https://tailwindcss.com/)** 是一个功能强大的 **实用类优先的 CSS 框架**（Utility-First CSS Framework），它通过提供一组预定义的类，让开发者能够在 HTML 中直接应用样式，而无需编写大量的自定义 CSS 代码。TailwindCSS 强调灵活性、可定制性和开发效率，它鼓励开发者使用小而单一的样式类来构建页面，而不是像传统的 CSS 框架那样提供一整套预设的组件和布局。

## 安装

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

执行完命令后，会在当前目录下生成 `tailwind.config.js` 文件和 `postcss.config.js` 文件，用于配置 TailwindCSS。

## 配置

在 `tailwind.config.js` 文件中添加所有模板文件的路径。

::: code-group

```js [tailwind.config.js]
/**
 * TailwindCSS配置文件
 * 该文件用于配置TailwindCSS的工作方式，包括内容文件路径、主题扩展和插件使用等
 * @type {import('tailwindcss').Config} 表示当前配置对象遵循TailwindCSS的配置接口
 */
export default {
  // 指定TailwindCSS应该扫描的文件路径，以收集CSS类
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,md}'],

  // 主题配置，用于自定义和扩展TailwindCSS的默认设计系统
  theme: {
    // extend属性用于扩展默认的主题设置
    extend: {},
  },

  // 插件数组，用于添加额外的功能或自定义功能到TailwindCSS中
  plugins: [],
};
```

:::

## 使用

将 Tailwind 的每个层的 @tailwind 指令添加到主 css 文件中。

::: code-group

```css [.vitepress/theme/styles.css]
@tailwind base;
@tailwind components;
@tailwind utilities;
```

:::

## 测试

在文件目录下新建一个 test.md 文件，并添加如下代码：

::: code-group

```md [src/test.md]
<h1 class="text-3xl text-orange-600 font-bold underline">
  Hello world!
</h1>
```

:::

效果如下所示：

<h1 class="text-3xl text-orange-600 font-bold underline">
  Hello world!
</h1>

> [!warning]
> 配置了 `stylelint` 后，在 `.vitepress/theme/styles.css` 文件中添加 `@tailwind base;` 会导致 `stylelint` 报错。
>
> :x: Unexpected unknown at-rule "@tailwind" (scss/at-rule-no-unknown)Stylelintscss/at-rule-no-unknown

**解决方法**

修改 stylelint.config.mjs 文件，忽略 `@tailwind`。

::: code-group

```js [stylelint.config.mjs] {7-14}
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue',
  ],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
```

:::

## 总结

在 VitePress 中集成 TailwindCSS 能帮助开发者快速创建漂亮且功能丰富的文档页面，同时确保样式的一致性、可维护性和性能优化。对于那些追求快速开发和定制化的用户来说，集成 TailwindCSS 是一个非常理想的选择。
