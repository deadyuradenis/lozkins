import modal from 'Core/ui/modal/index.js';

import './index.scss';

const callback = () => {
    const node = document.querySelector('#m-callback');
    
    if (!node) {
        // console.debug()
        return;
    }

    modal(node);
};

export default callback;
