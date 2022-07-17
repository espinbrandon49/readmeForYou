
# README for you
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Description 
Using this application you can quickly and easily create a README file by using a command-line application to generate one so that you can devote more time to working on the project. 

[GitHub repository](https://github.com/espinbrandon49/READMEForYou)

## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
## Installation 
To generate a README.md file, install node.js and NPM on windows, clone down the GitHub repository and install the npm packages.
1. Download and install [Node.js](https://nodejs.org/en/download/)
2. Clone the repository
```bash
git clone git@github.com:espinbrandon49/READMEForYou.git
```
3. run npm install to install the npm dependencies from the [package.json](./package.json)
```bash
npm install
```
## Usage 
The begin use the following command: 
```bash
node index.js
```
* The README generator uses [Inquirer package](https://www.npmjs.com/package/inquirer) to prompt you for information about your application repository
* After you answer the questions, the input is written to an .md file using fs.writeFile

* A high-quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

![usage video](./assets/images/usage.gif)

### [A sample README.md](./sampleREADME.md)

## License 
### MIT License 

The content of this application is licensed under the MIT License. 

[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/) 

## Contributing 

[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests 
Verify Node.js installation
```
node -v
```
Verify NPM installation
```
npm -v
```
Verify README generated - receive `success` message
```
success
```
![demo video](./assets/images/demoVideo.gif)
## Questions 

Contact me by [E-mail](mailto:portfoliolinkemail@gmail.com) or [GitHub](https://github.com/espinbrandon49)
* For any questions
* Ways to make the README that is generated better
* I'd love to see your awesome README!


