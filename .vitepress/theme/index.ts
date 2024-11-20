// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import HomeLayout from '../../src/layouts/layout-home.vue';
import './style.css';
export default {
  extends: DefaultTheme,
  Layout: HomeLayout,
} satisfies Theme;
