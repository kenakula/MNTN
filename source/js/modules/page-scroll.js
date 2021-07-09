const pageScroll = () => {
  const scrollBtn = document.querySelector('.js-scroll-btn');
  const content = document.querySelector('#stages');

  const onBtnClickPageScroll = (evt) => {
    const target = evt.target.closest('.js-scroll-btn');
    const contentTop = content.getBoundingClientRect().y;

    if (target) {
      window.scrollTo({
        top: contentTop,
        behavior: 'smooth',
      });
    }
  };

  scrollBtn.addEventListener('click', onBtnClickPageScroll);
};

export {pageScroll};
