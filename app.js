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

promptUser()
    .then(data => {
        let tempString = `Title: ${data.title} https://img.shields.io/badge/title-${data.title}-blue
        
        Description of the Project: 
        
        ${data.description}
        
        Table of Contents:
        
        ${data.tableOfContents}
        
        The project can be installed by using the following method - ${data.installation}.
        
        Project can be used in the following way,
        ${data.usage}
        
        Project uses ${data.license} license.
        
        The contributors to the project are ${data.contributors}.
        
        Project can be tested using ${data.test}.
        
        You can contact me at ${data.gitHubUserName}.`

        fs.writeFile("README.md", tempString, function (err) {
            if (err) {
                console.log(err)
            }
            console.log("ReadMe.md has been generated successfully.")
        });
    });