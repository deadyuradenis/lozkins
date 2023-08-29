import modal from 'Core/ui/modal/index.js';

import './index.scss';

const modalInfo = () => {
    const node = document.querySelector('#m-info');
    
    if (!node) {
        // console.debug()
        return;
    }

    modal(node);
};

export default modalInfo;
