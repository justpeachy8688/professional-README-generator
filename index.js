// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const utils = require('utils')

// TODO: Create an array of questions for user input
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

const generateMarkdown = (answers) =>
    `
    [!image](http://img.shelds.io${answers.github}/${answers.project})
    
    # ${answers.project}

    ## About The Project

    # ${answers.description}

## Getting Started
To get a local copy up and running follow these simple steps. You can also download the source files provided. You will need a text editor such as Visual Studio Code, Xcode or similar to edit the source code.

### Installation

# *Clone this repo: ${answers.github} to your local device. Use ${answers.dependencies} to install dependencies.

## Usage
        
# ${answers.user}

*To test this project run ${answers.tests}

## License

# ${answers.license[0]}

## Contact

# ${answers.email}

*To contribute to this project ${answers.repo}

`

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


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(fileName, data, err => {
//         if (err) {
//             return console.log(err);
//         }
//         // console.log('Success! Your file has been generated!');
//     });
// }

// const writeFile = inquirer.promisify(writeToFile);

// // TODO: Create a function to initialize app
// function init() {
//     questions.then(responses => {
//         //console.log('the answer is: ', responses.questions)
//     })
// }



// // Function call to initialize app
// questions().then((answers => {
//     console.log(answers)
// }))

