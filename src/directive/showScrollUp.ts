const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target instanceof HTMLElement) {
      entry.target.style.transform = 'translateY(0px)';
      entry.target.style.opacity = '1';
    }
  });
});

const shopScrollUp = {
  mounted(el: HTMLElement) {
    el.style.transition = 'all 2s ease';
    el.style.transform = 'translateY(20px)';
    el.style.opacity = '0';

    observer.observe(el);
  },
  unmounted(el: HTMLElement) {
    observer.unobserve(el);
  },
};

export default shopScrollUp;
