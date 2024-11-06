export default {
  '*.{js,ts,jsx,tsx}': ['eslint --fix --quiet', 'prettier --write'],
  '*.md': ['prettier --write'],
  '*.{css,less,scss,sass,stylus,html}': ['stylelint --fix', 'prettier --write'],
  '.vue': ['eslint --fix --quiet', 'prettier --write', 'stylelint --fix'],
};
