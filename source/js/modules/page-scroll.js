const pageScroll = () => {
  const scrollBtns = document.querySelectorAll('.js-scroll-btn');
  const paginationContainer = document.querySelector('.js-pagination-pages');
  const observerTargets = document.querySelectorAll('[data-target]');
  const paginationTrack = document.querySelector('.js-track');
  const paginationThumb = document.querySelector('.js-thumb');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  };

  const switchBtnClass = (btn) => {
    const activeBtn = paginationContainer.querySelector('.active');

    activeBtn.classList.remove('active');
    btn.classList.add('active');
  };

  const movePaginationThumb = (btn) => {
    const btnIndex = +btn.dataset.index;
    const thumbHeight = getComputedStyle(paginationThumb).height;
    const thumbOffset = btnIndex * parseInt(thumbHeight, 10);

    paginationThumb.style.transform = `translateY(${thumbOffset}px)`;
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const elementId = element.dataset.target;
        const button = paginationContainer.querySelector(`[data-page="${elementId}"]`);

        if (button) {
          switchBtnClass(button);
          movePaginationThumb(button);
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  observerTargets.forEach((target) => {
    observer.observe(target);
  });

  const scrollToTarget = (evt) => {
    const btn = evt.target.closest('.js-scroll-btn');
    const targetId = btn.dataset.page;
    const targetEl = document.querySelector(`[data-target="${targetId}"]`);

    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      if (btn.classList.contains('js-pagination')) {
        switchBtnClass(btn);
      }
    }
  };

  scrollBtns.forEach((btn) => {
    btn.addEventListener('click', scrollToTarget);
  });
};

export {pageScroll};
