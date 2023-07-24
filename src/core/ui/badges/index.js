// import dragScroll from 'Ui/dragScroll/index.js';
import './index.scss';

const badges = () => {
    const nodes = Array.from(document.querySelectorAll('[data-component="badges"]'));
    
    if (!nodes) {
        return;
    }
    
    // nodes.forEach(node => {
    //     dragScroll(node);
    // })
};

export default badges;
