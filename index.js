// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const utils = require('utils')

// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your GitHub username?",
        },
        {
            type: 'input',
            message: "What is your email address?",
        },
        {
            type: 'input',
            message: "What is your project's name?",
        },
        {
            type: 'input',
            message: "Please write a short description of your project",
        },
        {
            type: 'input',
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: 'input',
            message: "What command should be run to install dependencies?",
            default: "npm i",
        },
        {
            type: 'input',
            message: "What command should be run to run tests?",
            default: "npm test",
        },
        {
            type: 'input',
            message: "What does the user need to know about using the repo?",
        },
        {
            type: 'input',
            message: "What does the user need to know about contributing to the repo?",
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    questions().then(responses => {
        console.log('the answer is: ', responses.questions)
    })
}

// Function call to initialize app
init();
