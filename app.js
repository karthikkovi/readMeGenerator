const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");


function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "title",
            message: "What is the title of the project?"
        },
        {
            type: "input",
            name: "description",
            message: "Enter the description of your project."
        },
        {
            type: "input",
            name: "tableOfContents",
            message: "Please enter Table of Contents"
        },
        {
            type: "input",
            name: "installation",
            message: "How to install this project"
        },
        {
            type: "input",
            name: "usage",
            message: "How to use the project."
        },
        {
            type: "checkbox",
            name: "license",
            message: "Choose the project license:",
            choices: [
                "MIT", "BSD", "GPLv2", "other"
            ],
            initial: 1
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors"
        },
        {
            type: "input",
            name: "test",
            message: "How to test the application"
        },
        {
            type: "input",
            name: "gitHubUserName",
            message: "Enter your GitHub userName"
        }
    ])
}