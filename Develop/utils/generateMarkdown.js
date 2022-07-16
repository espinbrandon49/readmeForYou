// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licence = ' ';

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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badge = ' ';
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data)}
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
## License \n ${renderLicenseLink(data)}
## Contributing \n ${data.contributing}
## Tests \n ${data.tests}
## Questions \n
  Contact me by email or GitHub if you have any questions about this project.\n
  * email: ${data.email}\n
  * GitHub: https://github.com/${data.github}
  `;
}

module.exports = generateMarkdown;
