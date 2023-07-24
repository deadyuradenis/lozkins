import 'normalize.css';

import './theme/index.scss';

// Pages
import 'Pages/index/index.js';
import uiKit from 'Pages/ui-kit/index.js';
import main from 'Pages/main/index.js';

// Ui
import 'Ui/section/index.js';
import 'Ui/link/index.js';
import 'Ui/list/index.js';
import 'Ui/grid/index.js';
import 'Ui/gallery/index.js';
import 'Ui/nav/index.js';
import 'Ui/socials/index.js';

import 'Ui/button/index.js';
import 'Ui/checkbox/index.js';
import 'Ui/radio/index.js';
import 'Ui/radio-large/index.js';
import inputs from 'Ui/input/index.js';
import 'Ui/badge/index.js';
import badges from 'Ui/badges/index.js';
import tabs from 'Ui/tabs/index.js';
import 'Ui/slider/index.js';

// Blocks
import header from 'Widgets/header/index.js';
import 'Widgets/footer/index.js';

// Modals
import callback from 'Widgets/modals/callback/index.js';

// Cards
// import 'Widgets/c-product/index.js';

// Sections
import 'Widgets/s-intro/index.js';


document.addEventListener('DOMContentLoaded', () => {
    // badges();
    inputs();
    // Blocks
    header();
    tabs();
    // breadcrumbs();

    // Sections

    // Modals
    callback();

    // Pages

    uiKit();
    main();
})
