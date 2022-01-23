// All packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input with inquirer prompt
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
            "Apache 2.0", 
            "Mozilla Public",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Boost Software",
            "The Unlicense",
            "No License"
        ],
        message: "What type of license does your application have?"
    },
    {
        type: "confirm",
        name: "confirmContributors",
        message: "Would you like to include any contributors for this project?",
        default: true
    },
    {
        type: "input",
        name: "contributors",
        message: "Who else was involved in this application?",
        when: ({ confirmContributors }) => confirmContributors
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide instructions on how the user can run tests on your application, including all necessary commands."
    }
];

// writeFile function to write README file, placed in "dist" directory
const writeFile = (fileName, response) => {
    let createMd = generateMarkdown(response);
    fs.writeFile('./dist/README.md', createMd, err => {
        err ? console.error(err) : console.log("README.md created!");
    })
}

// Async await function to initialize app and run inquirer prompt with questions
const init = async () => {
    const response = await inquirer.prompt(questions);
    writeFile('README.md', response);
}

// Function call to initialize app
init();
