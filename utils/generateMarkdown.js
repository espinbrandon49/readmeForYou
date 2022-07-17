// Function that returns the license badge
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let license
  if (!`${data.license}`) {
    license = ''
  } else {
    license = `[![License:](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})` 
  }
  return license
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let section = ''; 
  if (!`${data.license}`) {
    section
  } else if (`${data.license}` == 'MPL_2.0') {
    section = `## License \n https://opensource.org/licenses/MPL-2.0`
  } else {
    section = `## License \n https://opensource.org/licenses/${data.license}`
  }
  return section
}

// Function that returns the table of contents section of README
// If there is no license, do not include in table of contents
function tableOfContents(data) {
  let table;
!`${data.license}`
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
Contact me by [E-mail](mailto:${data.email}) or [GitHub](https://github.com/${data.github}) if you have any questions about this project.\n`;
}

module.exports = generateMarkdown;