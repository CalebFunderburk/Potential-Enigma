// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate the markdown for the README.md file
function generateMarkdown(data) {
  return `# ${data.title}

![Github licence](https://img.shields.io/badge/license-${data.license}-blue)

## Description

${data.desc}

## Table of Contents

- [Installation](#installation-instructions)
- [Usage](#usage-information)
- [License](#license)
- [Contributing](#contribution-guidelines)
- [Testing](#testing-instructions)
- [Questions](#questions)    

## Installation Instructions

${data.install}

## Usage Information
          
${data.usage}

## License

This project is protected under the ${data.license} License.

## Contribution Guidelines

${data.contribute}

## Testing Instructions

${data.test}

## Questions

For any additional questions or concerns, feel free to contact me via email.
<br/>
${data.email}
<br/>
[My GitHub Profile](https://github.com/${data.username})
`;
}

// Export module
module.exports = generateMarkdown;
