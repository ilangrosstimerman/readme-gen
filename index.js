// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of the project?',
          validate: noNewlineChar,
        },
        {
          type: 'input',
          name: 'license',
          message: 'What license does this project fall under?',
          choices: [
            'Apache License 2.0',
            'GNU GPLv3',
            'MIT License',
            'ISC License',
            ],
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'How many contributors contributed to this project?',
        },
        {
          type: 'input',
          name: 'test',
          message: 'What are some tests for the project?',
        },
        {
          type: 'input',
          name: 'userName',
          message: 'What is your GitHub username?',
          validate: noNewlineChar,
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
          validate: noNewlineChar,
        },
      ]

//function to validate input
function noNewlineChar(input) {
    return new Promise((resolve, reject) => {
      if (input.includes('\\n')) {
        resolve('Cannot include new line characters!');
      } else {
        resolve(true);
      }
    });
  }
  
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

