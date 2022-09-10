// Necesssary packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of all questions
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Provide a description for your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick a license',
        choices: ['MIT', 'GPL', 'Apache', 'BSD', 'ISC'],
    },
];

// Create a README.md file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Readme Generated!'))
}

// App initialization
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            writeToFile('./dist/README.md', generateMarkdown(answers));
        })
        .catch((err) => console.log(err))
};

// Function call to initialize app
init();