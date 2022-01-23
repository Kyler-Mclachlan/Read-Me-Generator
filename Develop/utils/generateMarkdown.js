// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseType) {
  if (licenseType != 'None'){
    splitLicenseType = licenseType.split(" ").join("");
    icon=  `![](https://img.shields.io/badge/${splitLicenseType}-license-green)`
    return icon;
  }
  else if (licenseType === "None"){
    icon = ""
    return icon
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  linktest = data.licenseType;
  console.log(linktest);
  if (linktest === "GPL"){
    link = "https://www.gnu.org/licenses/gpl-3.0.en.html"
  }
  else if (linktest === "Affero GPL"){
      link = "https://www.gnu.org/licenses/agpl-3.0.en.html"
    }
  else if (linktest === "MIT"){
      link = "https://opensource.org/licenses/MIT"
    }
  else if (linktest === "Mozilla Public License Version 2.0"){
      link = "https://www.mozilla.org/en-US/MPL/2.0/"
    }
  else if (linktest === "Artistic License 2.0"){
      link = "https://opensource.org/licenses/Artistic-2.0"
    }
  else if (linktest === "Eclipse Public License v1.0"){
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
  ${renderLicenseLink(data)}
  
  # Contribution Guidelines
  ${data.contribution}
  
  # Instructions for Testing
  ${data.testing}
 `
;
}



module.exports = generateMarkdown;
