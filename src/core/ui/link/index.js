import './index.scss';

const anchorLink = (node) => {
  if (!node) {
    return;
  }

  node.addEventListener('click', (e) => {
    e.preventDefault();

    const id = node.getAttribute('href');

    if (id !== '#') {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
};

export default anchorLink;
