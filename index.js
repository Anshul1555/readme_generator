// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        }
        console.log('README.md file created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateREADME(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error creating README:', error);
        });
}

// Function call to initialize app
init();

// Function to generate README content
function generateREADME(answers) {
    return `# ${answers.title}

![License Badge](https://img.shields.io/badge/license-${answers.license}-blue)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
For any questions, please contact me:

- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: [${answers.email}](mailto:${answers.email})
`;
};