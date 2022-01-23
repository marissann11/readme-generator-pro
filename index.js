// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What is required to install dependencies?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know to use this application?"
    },
    {
        type: "list",
        name: "license",
        choices: [
            "MIT License", 
            "Apache License 2.0", 
            "Mozilla Public License 2.0",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Boost Software License 1.0",
            "The Unlicense",
            "No license"
        ],
        message: "What type of license does your application have?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who was involved in this application?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should the user run to run tests?"
    }
];

// TODO: Create a function to write README file
const writeFile = (fileName, response) => {
    let createMd = generateMarkdown(response);
    fs.writeFileSync('./dist/README2.md', createMd)
}

// TODO: Create a function to initialize app
const init = async () => {
    const response = await inquirer.prompt(questions);
    writeFile('README2.md', response);
}

// Function call to initialize app
init();
