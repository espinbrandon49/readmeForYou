// Packages needed for this application
const fs = require('fs') 
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer')

// Function to prompt input to populate a README.md 
function dataResponse() {
  // function to ask questions
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
  // function to handle the response 
  .then(function(data) {
    const fileName = 'README.md'
    writeToFile(fileName, data)
  })
}

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.log(err): console.log('success')
  })
}

// Function to initialize app
function init() {
  dataResponse()
}

// Function call to initialize app
init();
