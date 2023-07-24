import { Fancybox } from '@fancyapps/ui';
import './index.scss';

Fancybox.bind('[data-fancybox]', {
    Hash: false,
    Image: {
        zoom: false,
    },
    Toolbar: {
        display: {
            right: [
                'close',
            ],
        } 
    },
});

export default Fancybox;
