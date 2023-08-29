import modal from 'Core/ui/modal/index.js';

import './index.scss';

const modalCallback = () => {
    const node = document.querySelector('#m-callback');
    
    if (!node) {
        // console.debug()
        return;
    }

    modal(node);
};

export default modalCallback;
