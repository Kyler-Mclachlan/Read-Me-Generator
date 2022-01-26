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
  else if (linktest === "Apache"){
      link = "https://www.apache.org/licenses/LICENSE-2.0"
    }  
  else {
     link = ''
   };                                         
  return link; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data){
  licenseType = data.licenseType;
  console.log(licenseType);
  section = `This project is covered by the ${licenseType} license. If you'd like to know more about this license please click the link below: `                                
  return section; 
}
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

  1. [Project Description](#project-desc)
  2. [Installation](#install)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contribute)
  6. [Tests](#test)
  7. [Questions/Feedback](#questions)

  # <a id="project-desc">
    Description
  </a>

  ${data.description}

  # <a id="install">
    Installation Instructions
  </a>

  ${data.installation}
  
  # <a id="usage">
    Usage Parameters
  </a>

  ${data.usage}
  
  # <a id="license">
    License
  </a>

  ${renderLicenseSection(data)}

  ${renderLicenseLink(data)}  
  
  # <a id="contribute">
    Contribution Guidelines
  </a>

  ${data.contribution}
  
 # <a id="test">
    Instructions for Testing
  </a>
  ${data.testing}

 # <a id="questions">
    Questions and Feedback
  </a>

  https://github.com/${data.github}

  Please reach out to me with any qestions or feedback you may have at this email address: ${data.email}
 `
;
}



module.exports = generateMarkdown;
