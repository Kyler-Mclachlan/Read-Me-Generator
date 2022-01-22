// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.licenseType = "MIT"){
    icon = ".\Develop\badges\MIT.svg";
};
  return icon; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.licenseType = "MIT"){
    link = "https://opensource.org/licenses/MIT";
};
  return link; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

var descriptionTitle = {
  title: "Description",
  font: {
    family: "Courier New, monospace",
    size: 18,
    color: "#7f7f7f"
  }
};

function generateMarkdown(data) {
  return ` 
  ![alt text](![APM](https://img.shields.io/apm/l/test))
  ${renderLicenseBadge(data)}
  # ${data.title}

  # Table of Contents:

  1. Project Description
  2. Installation
  3. Usage
  4. License
  5. Contributing
  6. Tests
  7. Questions/Feedback

  # Description 
  ${data.description}
  
  # Installation Instructions
  ${data.installation}
  
  # Usage Parameters
  ${data.usage}
  
  # License
  ${renderLicenseLink(data)}
  
  # Contribution Guidelines
  ${data.contribution}
  
  # Instructions for Testing
  ${data.testing}
 `
;
}



module.exports = generateMarkdown;
