// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.licenseType = 'GPL'){
    icon =  `![](https://img.shields.io/badge/GPL-license-green)`
  }
  if (data.licenseType = 'Affero GPL'){
    icon =  `![](https://img.shields.io/badge/AfferoGPL-license-green)`
  }
  if (data.licenseType = 'Apache'){
    icon =  `![](https://img.shields.io/badge/Apache-license-green)`
  }
  if (data.licenseType = 'MIT'){
    icon =  `![](https://img.shields.io/badge/MIT-license-green)`
  }
  if (data.licenseType = 'Mozilla Public License Version 2.0'){
    icon =  `![](https://img.shields.io/badge/MozillaPublicLicenseVersion2.0-license-green)`
  }
  if (data.licenseType = 'Artistic License 2.0'){
    icon =  `![](https://img.shields.io/badge/ArtisticLicense2.0-license-green')`
  }
  if (data.licenseType = 'Eclipse Public License v1.00'){
    icon =  `![](https://img.shields.io/badge/EclipsePublicLicensev1.0-license-green)`
  }
  else {
    icon = ''
  };
  return icon; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.licenseType = "GPL"){
    link = "https://www.gnu.org/licenses/gpl-3.0.en.html"
  }
  if (data.licenseType = "Affero GPL"){
      link = "https://www.gnu.org/licenses/agpl-3.0.en.html"
    }
  if (data.licenseType = "MIT"){
      link = "https://opensource.org/licenses/MIT"
    }
  if (data.licenseType = "Mozilla Public License Version 2.0"){
      link = "https://www.mozilla.org/en-US/MPL/2.0/"
    }
  if (data.licenseType = "Artistic License 2.0"){
      link = "https://opensource.org/licenses/Artistic-2.0"
    }
  if (data.licenseType = "test"){
      link = "https://www.eclipse.org/legal/epl-v10.html"
    }
   else {
     link = ''
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
  
  ${renderLicenseBadge(data.licenseType)}
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
  ${renderLicenseLink(data.licenseType)}
  
  # Contribution Guidelines
  ${data.contribution}
  
  # Instructions for Testing
  ${data.testing}
 `
;
}



module.exports = generateMarkdown;
