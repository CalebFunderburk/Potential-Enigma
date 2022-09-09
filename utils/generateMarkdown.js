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
  return `# ${data.title}
${data.license}

## Description

${data.desc}

## Table of Contents

          

### Installation Instructions

${data.install}

### Usage Information
          
${data.usage}

### Contribution Guidelines

${data.contribute}

### Test Instructions

${data.test}

### Questions

${data.username}
${data.email}

`;
}

module.exports = generateMarkdown;
