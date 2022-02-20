// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: noNewlineChar,
        filter: trimAnswer,
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe this project:',
        filter: trimAnswer,
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
        filter: trimAnswer,
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        filter: trimAnswer,
      },
      {
        type: 'list',
        type: 'input',
        name: 'contributing',
        message: 'How may others contribute to this project?',
        filter: trimAnswer,
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are some tests for this project?',
        filter: trimAnswer,
      },
      {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
        validate: noNewlineChar,
        filter: trimAnswer,
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: noNewlineChar,
        filter: trimAnswer,
      },
    ];

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

//function to trim answers

  function trimAnswer(input) {
    return new Promise((resolve, reject) => {
      resolve(input.trim());
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

async function init() {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    writeToFile('genSampleReadme.md', markdown);
}
      

// Function call to initialize app
init();

