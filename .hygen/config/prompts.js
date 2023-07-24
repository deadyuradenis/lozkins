const block = [
  {
    type: 'input',
    name: 'name',
    message: 'Введите название блока',
  },
  {
    type: 'select',
    name: 'category',
    message: 'Выберите папку',
    choices: ['core/ui', 'widgets'],
  },
];

const page = [
  {
    type: 'input',
    name: 'name',
    message: 'Введите название страницы',
  },
];

module.exports = {
  blockPrompts: block,
  pagePrompts: page,
};
