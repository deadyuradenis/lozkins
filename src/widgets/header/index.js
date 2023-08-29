import './index.scss';

const header = () => {
    const component = document.querySelector('[data-component="header"]')

    if (!component) {
        // console.debug()
        return;
    }


    const checkOffset = () => {
        const windowHeight = window.innerHeight >= 1440 ? (window.innerHeight * 0.7) : window.innerHeight;

        if(window.pageYOffset >= windowHeight){
            component.classList.add('is-scrolled')
        } else{
            component.classList.remove('is-scrolled')
        }
    }

    checkOffset()
        
    document.addEventListener('scroll', checkOffset)
};

export default header;
