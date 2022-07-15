// TODO: Include packages needed for this application
const fs = require('fs') 
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
  'What is the project title?','How do you describe the project?', 'What steps to install the project?', 'What instructions to use the project?', 'What license to use?', 'How to contribute?', 'What are the tests?', 'What is your GitHub username', 'What is your email?', 'What is your GitHub username?' 
];
function dataResponse() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'title'
    }, 
    {
      type: 'input',
      message: 'How do you describe the project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What steps to install the project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How to use the project?',
      name: 'usage',
    },
    {
      type: 'checkbox',
      message: 'Which licence to use?',
      name: 'license',
      choices: ['MIT', 'ISC', 'GNU GPLv3']
    },
    {
      type: 'input',
      message: 'How to contribute?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What are the tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
  ])
  .then(function(data) {
    console.log(data)
    const fileName = 'README.md'
    writeToFile(fileName, data)
  })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //fileName = 'README.md'
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.log(err): console.log('success')
  })
}

// TODO: Create a function to initialize app
function init() {
  dataResponse()
}

// Function call to initialize app
init();
