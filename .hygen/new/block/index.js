const { blockPrompts } = require('../../config/index.js');

module.exports = {
    prompt: ({ inquirer }) => {
        const prompts = blockPrompts;

        return inquirer
            .prompt(prompts)
            .then(answers => {
                const { category, name } = answers;
                const path = `${category}/${name}`;
                const absPath = `src/${path}`;

                return { ...answers, path, absPath, name }
            });
    }
}
