const { pagePrompts } = require('../../config/index.js');

module.exports = {
    prompt: ({ inquirer }) => {
        const prompts = pagePrompts;

        return inquirer
            .prompt(prompts)
            .then(answers => {
                const { name } = answers;
                const path = `pages/${name}`;
                const absPath = `src/${path}`;
                const nameWithContext = `p-${name}`;
                return { ...answers, path, absPath, name, nameWithContext }
            });
    }
};
