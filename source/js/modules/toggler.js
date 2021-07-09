const menuToggler = document.querySelector('#toggler');
const header = document.querySelector('header.header');

const onMenuTogglerToggleClass = (evt) => {
  const target = evt.currentTarget;
  const targetId = target.getAttribute('data-target-id');
  const targetClassToggle = target.getAttribute('data-target-class-toggle');

  if (targetId && targetClassToggle) {
    target.classList.toggle('toggler--close');
    document.getElementById(targetId).classList.toggle(targetClassToggle);
    header.classList.toggle('expanded');
  }
};

export { menuToggler, onMenuTogglerToggleClass };
