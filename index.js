// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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
        type: 'confirm',
        name: 'confirmDesc',
        message: 'Would you like to include a description about your project?',
        default: false
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Provide a description for your project.',
        when: ({confirmDesc}) => {
            if (confirmDesc) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to include installation instructions for your project?',
        default: false
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide installation instructions for your project.',
        when: ({confirmInstall}) => {
            if (confirmInstall) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to include usage information for your project?',
        default: false
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project.',
        when: ({confirmUsage}) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would you like to include contribution guidelines for your project?',
        default: false
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide contribution guidelines for your project.',
        when: ({confirmContribute}) => {
            if (confirmContribute) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to include test instructions for your project?',
        default: false
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for your project.',
        when: ({confirmTest}) => {
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to choose a license for your project?',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick a license',
        choices: ['MIT', 'GPL', 'Apache', 'BSD', 'ISC'],
        when: ({confirmLicense}) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Readme Generated!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            // Do stuff with answers
            console.log(answers);

            // after all answers are collected, write to file
            // Build a string that uses our answers to generate some markdown and write that to our file as the 'dat' parameter. Replace the test values below
            writeToFile('./dist/README.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();