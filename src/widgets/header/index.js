import './index.scss';

const header = () => {
    const component = document.querySelector('[data-component="header"]')

    if (!component) {
        // console.debug()
        return;
    }

    // const body         = document.querySelector('body')
    // const burger     = component.querySelector('[data-header="burger"]');
    // const dropdown     = component.querySelector('[data-header="dropdown"]');

    // burger.addEventListener('click', () => {
    //     component.classList.toggle('is-active')
    //     burger.classList.toggle('is-active')
    //     dropdown.classList.toggle('is-open')
    //     body.classList.toggle('_lock');
    // })

    // document.addEventListener('click', ({target}) => {
    //     if (dropdown.classList.contains('is-open') && !target.closest('[data-header="dropdown"]') && target !== burger) {
    //         component.classList.remove('is-active')
    //         burger.classList.remove('is-active')
    //         dropdown.classList.remove('is-open')
    //         body.classList.remove('_lock');
    //     }
    // })

    // const checkOffset = () => {
    //     const windowHeight = window.innerHeight;

    //     if(window.pageYOffset >= (windowHeight * 0.5)){
    //         component.classList.add('is-scrolled')
    //     } else{
    //         component.classList.remove('is-scrolled')
    //     }
    // }

    // if (component.classList.contains('header--transparent')) {
    //     checkOffset()
        
    //     document.addEventListener('scroll', checkOffset)
    // }
};

export default header;
