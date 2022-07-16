// Packages needed for this application
const fs = require('fs') 
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer')

// Function to create a README.md 
function promptData() {
  // function to prompt author's input
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
  // function to write the author's input
  .then(function(data) {
    const fileName = 'README.md'
    const content = generateMarkdown(data)
    writeToFile(fileName, content)
  })
}

// Function to write file
function writeToFile(fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    err ? console.log(err): console.log('success')
  })
}

// Function to initialize app
function init() {
  promptData()
}

// Function call to initialize app
init();
