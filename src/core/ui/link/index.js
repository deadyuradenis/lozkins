import './index.scss';

const initLinkComponent = (component) => {
    
  if (!component) {
    return;
  }

  component.addEventListener('click', (e) => {
    e.preventDefault();

    const id = component.getAttribute('href');

    if (id !== '#') {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
};


const links = () => {
    const componentNodes = Array.from(document.querySelectorAll('a[href*="#"]'));

    componentNodes.forEach(initLinkComponent);
}

export default links;
