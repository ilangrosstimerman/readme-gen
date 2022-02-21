//generate markdown for README
function generateMarkdown(data) {
  const markdown = fillMarkdownTemplate(data);
  return formatNewlineText(markdown);
}
//fill template
function fillMarkdownTemplate(data) {
  return `# ${data.title}
${getBadge(data.license)}
${data.description}
${getTableOfContents(data.contributing, data.test)}
${getSection('Installation', data.installation)}
${getSection('Usage', data.usage)}
${getSection('License', `This project is licensed under the [${data.license}](${getLicenseLink(data.license)}).`)}
${getSection('Contributing', data.contributing)}
${getSection('Tests', data.test)}
${getSection('Questions', `[Email  me](mailto:${data.email}). [GitHub profile](https://github.com/${data.userName})`)}.
`;
}
//get license badge
function getBadge(license) {
  return `[![${license}](https://img.shields.io/badge/License-${license}-brightGreen)](${getLicenseLink(license)})`
}
//get table of contents
function getTableOfContents(contributing, test) {
 return `## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
}
//sections function
function getSection(title, body) {
 return `## ${title}
${body}`;
}
//get license link
function getLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'GNU GPLv3 License':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'ISC License':
      return 'https://opensource.org/licenses/ISC';
  }
}
function formatNewlineText(text) {
  return text.split('\\n').join('\n');
}
module.exports = generateMarkdown;