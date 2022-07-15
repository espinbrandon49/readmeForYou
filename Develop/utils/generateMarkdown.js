// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    return `${data.license}`
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Title ${data.title}
## Description \n ${data.description}
## Table of Contents \n
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
## Installation \n ${data.installation}
## Usage \n ${data.usage}
## Licence \n ${renderLicenseBadge(data)}
## Contributing \n ${data.contributing}
## Tests \n ${data.tests}
## Questions \n
  Contact me by email or GitHub if you have any questions about this project.\n
  * email: ${data.email}\n
  * GitHub: ${data.github}
  `;
}

module.exports = generateMarkdown;renderLicenseBadge;
