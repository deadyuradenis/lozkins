import dragScroll from 'Ui/dragScroll/index.js';
import './index.scss';

const breadcrumbs = () => {
    const node = document.querySelector('[data-component="breadcrumbs"]');
    
    if (!node) {
        return;
    }

    dragScroll(node);
};

export default breadcrumbs;