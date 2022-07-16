// Function that returns the license badge
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badge = '';
  const badges = {

    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    ,

    ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,

    GNU: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
`,
  }
  switch (`${data.license}`) {
    case 'MIT':
      badge = badges.MIT;
      break;
    case 'ISC':
      badge = badges.ISC;
      break;
    case 'GNU GPLv3':
      badge = badges.GNU;
      break;
  }
  return badge
}

// Function that returns a license link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licence = '';

  const licences = {
    MIT: `### ${data.license} License \n
The content of this application is licensed under the MIT License. \n
[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/) \n
` ,
    ISC: `### ${data.license} Licence \n
The content of this application is licensed under the Internet Systems Consortium (ISC) License \n
[https://choosealicense.com/licenses/isc/](https://choosealicense.com/licenses/isc/)
`,
    GNU: `### ${data.license} License \n
The content of this application is licensed under the GNU General Public Version 3 License \n
[https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/)`,
  }

  switch (`${data.license}`) {
    case 'MIT':
      licence = licences.MIT;
      break;
    case 'ISC':
      licence = licences.ISC;
      break;
    case 'GNU GPLv3':
      licence = licences.GNU;
      break;
  }
  return licence
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let section = '';
  const license = renderLicenseLink(data)
  license.length == 0 ? section : section = `## License \n ${license}`
  return section
}

// Function that returns the license badge
// If there is no license, do not include in table of contents
function tableOfContents(data) {
  let table;
  const license = renderLicenseLink(data)
  license.length == 0
  ? table = `
  ## Table of Contents \n
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ` 
  : table = `
  ## Table of Contents \n
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  `
  return table
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data)}
## Description \n ${data.description}
${tableOfContents(data)}
## Installation \n ${data.installation}
## Usage \n ${data.usage}
${renderLicenseSection(data)}
## Contributing \n ${data.contributing}
## Tests \n ${data.tests}
## Questions \n
  Contact me by email or GitHub if you have any questions about this project.\n
  * email: ${data.email}\n
  * GitHub: https://github.com/${data.github}
  `;
}

module.exports = generateMarkdown;
