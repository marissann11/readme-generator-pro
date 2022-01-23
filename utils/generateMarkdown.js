// Returns license badge based on which license is specified, if no license then empty string
const renderLicenseBadge = (license) => {
  const licenseUrl = license.replace(" ", "%20");
  return ((license === "No License") ? "" : `![License: ${license}](https://img.shields.io/badge/License-${licenseUrl}-brightgreen)`)
}
// Returns license link in TOC if applicable, if not returns an empty string
const renderLicenseLink = (license) => {
  return ((license === "No License") ? "" : `* [License](License)`)
};
// Returns license section if applicable, if not returns an empty string
const renderLicenseSection = (license) => {
  return ((license === "No License") ? "" : `## License\n  ${license}`)
};

// Returns Contributor information if applicable, if not states that there are none
const renderContrSection = (contributors) => {
  return ((!contributors) ? `No Contributors` : `${contributors}`)
}

//Function to generate markdown for README
const generateMarkdown = (res) => {
  return `
  # ${res.title}
  ${renderLicenseBadge(res.license)}

  ## Description
  ${res.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributors](Contributors)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ${renderLicenseLink(res.license)}

  ## Installation
  ${res.installation}

  ## Usage
  ${res.usage}

  ## Contributors
  ${renderContrSection(res.contributors)}\n
  If you would like to contribute, please visit the [Contributor Covenant](https://www.contributor-covenant.org/).

  ## Tests
  ${res.tests}

  ## Questions
  Have questions and would like to reach out?
  
  My Email: ${res.email}
  My GitHub: ${res.github}

  ${renderLicenseSection(res.license)}
  `;
}

module.exports = generateMarkdown;
