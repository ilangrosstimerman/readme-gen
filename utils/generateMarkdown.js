// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const markdown = fillMarkdownTemplate(data);
  return formatNewlineText(markdown);
}

function fillMarkdownTemplate(data) {
  return `# ${data.title}
  
  [![${data.license}](https://img.shields.io/badge/license-${data.license}-brightGreen)](${getLicenseLink(data.license)})

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
This project is licensed under ${data.license}. For more information, see {link to license}.
## Contributing
${data.contributing}
## Tests
${data.test}
## Questions
For additional questions, feel free to [send me an email](mailto:${data.email}). You can also find more information on my [GitHub profile](https://github.com/${data.userName}).
`;
}

function getBadge(license) {
  return `[![${license}](https://img.shields.io/badge/License-${license}-brightGreen)](${getLicenseLink(license)})`
}


//put license link in file LICENSE with owner and year info
function getLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'ISC License':
      return 'https://opensource.org/licenses/ISC';
    case 'Apache License 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
  }
}

function formatNewlineText(text) {
  return text.split('\\n').join('\n');
}

module.exports = generateMarkdown;
