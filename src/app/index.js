import 'normalize.css';

import './theme/index.scss';

// Pages
import 'Pages/index/index.js';
import uiKit from 'Pages/ui-kit/index.js';
import map from 'Pages/map/index.js';

// Ui
import 'Ui/section/index.js';
import links from 'Ui/link/index.js';
import 'Ui/list/index.js';
import 'Ui/nav/index.js';

import 'Ui/button/index.js';
import 'Ui/radio-large/index.js';
import inputs from 'Ui/input/index.js';
import 'Ui/badge/index.js';

import 'Ui/badges/index.js';
import tabs from 'Ui/tabs/index.js';

import 'Ui/form/index.js';
import 'Ui/socials/index.js';
import 'Ui/slider/index.js';

// Blocks
import header from 'Widgets/header/index.js';
import 'Widgets/footer/index.js';

// Modals
import modalCallback from 'Widgets/modals/callback/index.js';
import modalInfo from 'Widgets/modals/info/index.js';

// Cards
import 'Widgets/c-article/index.js';

// Sections
import 'Widgets/s-intro/index.js';
import 'Widgets/s-about/index.js';
import 'Widgets/s-articles/index.js';
import 'Widgets/s-services/index.js';
import 'Widgets/s-specialization/index.js';
import 'Widgets/s-subscribe/index.js';
import 'Widgets/s-theory/index.js';


document.addEventListener('DOMContentLoaded', () => {
    links();
    inputs();

    header();
    tabs();

    // Modals
    modalCallback();
    modalInfo();

    // Pages
    uiKit();
    map();
})
