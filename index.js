// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your Github username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // let testMarkdown = "#Hello"
    // return fs.writeFileSync("test.md", testMarkdown)
    // return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    let testMarkdown = "#Hello"
    return fs.writeFileSync(path.join(process.cwd(), "README.md"), testMarkdown)
}

// TODO: Create a function to initialize app
function init() {
    // writeToFile("test2.md", "blabla")
    inquirer.prompt(questions).then((responses) => {
        console.log(responses)
        writeToFile("README.md", generateMarkdown({ ...responses }))
    })
}

// Function call to initialize app
init();
