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
        choices: ["MIT", "Microsoft", "Apache"],
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
        message: "What command should be run to run tests?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync()
}

// TODO: Create a function to initialize app
async function init() {
    const response = await inquirer.prompt(questions)
    console.log(response);
    //...response?
    writeToFile("README2.md", generateMarkdown(response))
}

// Function call to initialize app
init();
