const parallax = () => {
  const images = document.querySelectorAll('.bg');
  const clouds = document.querySelector('.js-clouds');
  const mnts = document.querySelector('.js-mnts');
  const hill = document.querySelector('.js-hill');

  const translate = (y, d, el) => {
    el.style.transform = `translateY(${y * d}px)`;
  };

  const onDocumentScroll = (evt) => {
    const y = window.pageYOffset;

    if (window.matchMedia('(min-width: 1024px)').matches) {
      translate(y, -0.1, hill);
      translate(y, -0.2, clouds);
      translate(y, 0.2, mnts);
    }
  };

  document.addEventListener('scroll', onDocumentScroll);
};

export {parallax};
