// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if (err) throw err;
        console.log('Success!');
      });
    }

// TODO: Create a function to initialize app
function init() {

        inquirer
        .prompt(questions)
        .then(answers => {
          console.log(answers);
          const markDown = generateMarkdown(answers);
          writeToFile('samplereadme.md', markDown);
        });
      }

// Function call to initialize app
init();

