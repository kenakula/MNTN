import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';
import './utils/modernizr';

import { initModals } from './modules/init-modals';
import { menuToggler, onMenuTogglerToggleClass } from './modules/toggler';
import {parallax} from './modules/parallax';
import {pageScroll} from './modules/page-scroll';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
if (menuToggler) {
  menuToggler.addEventListener('click', onMenuTogglerToggleClass);
}
parallax();
pageScroll();
