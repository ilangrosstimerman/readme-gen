// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the project description?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation process?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is the project used?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What is the project license?',
      choices: [
        'MIT License',
        'GNU GPLv3',
        'ISC License',
        'Apache License 2.0',
        ],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What is the number of contributors?',
    }
];
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

