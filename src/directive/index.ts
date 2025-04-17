import showScrollUp from './showScrollUp';

const directives = {
  showScrollUp,
};

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key]);
    });
  },
};
