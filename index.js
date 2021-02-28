//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Created an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: "What is your GitHub username?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
        },
        {
            type: 'input',
            name: 'project',
            message: "What is your project's name?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Please write a short description of your project",
        },
        {
            type: 'checkbox',
            name: 'license',
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: 'input',
            name: 'dependencies',
            message: "What command should be run to install dependencies?",
            default: "npm i",
        },
        {
            type: 'input',
            name: 'tests',
            message: "What command should be run to run tests?",
            default: "npm test",
        },
        {
            type: 'input',
            name: 'user',
            message: "What does the user need to know about using the repo?"
        },
        {
            type: 'input',
            name: 'repo',
            message: "What does the user need to know about contributing to the repo?",
        }
    ]);

//License badge choice
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case "Apache 2.0":
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case "GPL 3.0":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case "BSD 3":
            return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        case "None":
            return ``
        default:
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
}

//Function to hold what is exactly going to be in the markdown file
const generateMarkdown = (answers) => {

    return `
# ${answers.project}

${renderLicenseBadge(answers.license)}

<details open="open">
<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
<li>
<a href="#description">Description</a>
</li>
<li>
<a href="#getting-started">Getting Started</a>
</li>
<li>
<a href="#installation">Installation</a>
</li>
<li>
<a href="#tests">Tests</a>
</li>
<li>
<a href="#usage">Usage</a>
</li>
<li>
<a href="#license">License</a>
</li>
<li>
<a href="#contribute">Contribute</a>
</li>
<li>
<a href="#questions">Questions</a>
</li>
</ol>
</details>

## Description

${answers.description}

## Getting Started

To get a local copy up and running follow these simple steps. You can also download the source files provided. You will need a text editor such as Visual Studio Code.

## Installation

Clone this repo: github.com/${answers.github}/professional-README-generator to your local device. Use ${answers.dependencies} to install dependencies.

## Tests

If you would like to test this project, run ${answers.tests}.

## Usage

${answers.user}

## License

${answers.license} | See badge above.

## Contribute

To contribute to this project: ${answers.repo}

## Questions?

If you have any additional questions, email me here: ${answers.email}
<br>Or visit my GitHub profile here: github.com/${answers.github}
`
}

//this initializes the app
const init = () => {
    questions().then((answers) => {
        try {
            const md = generateMarkdown(answers);
            fs.writeFileSync('README1.md', md);
            console.log('Successfully wrote to README1.md');
        } catch (error) {
            console.log(error);
        }
    });
};

init();