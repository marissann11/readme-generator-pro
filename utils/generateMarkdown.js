// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  return ((license === "No License") ? "" : `* [License](License)`)
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  return ((license === "No License") ? "" : `## License\n  ${license}`)
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(res) {
  return `
  # ${res.title}

  ## Description
  ${res.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributors](#Contributors)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ${renderLicenseLink(res.license)}

  ## Installation
  ${res.installation}

  ## Usage
  ${res.usage}

  ## Contributors
  ${res.contributors}

  ## Tests
  ${res.tests}

  ## Questions
  How to reach me:
  
  By Email: ${res.email}
  My GitHub: ${res.github}

  ${renderLicenseSection(res.license)}
  `;
}

module.exports = generateMarkdown;
