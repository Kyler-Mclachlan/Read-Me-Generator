// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');

// TODO: Create an array of questions for user input
const userInput = () => {
    
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('please enter your projects title!')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide project description',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('please enter your projects description!')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter your projects installation instructions',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('please enter your projects installation instructions!')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('please enter your projects usage guidelines!')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines:',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('please enter your projects contribution guidelines!')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Provide test instructions for your project:',
        validate: testingInput => {
          if (testingInput) {
            return true;
          } else {
            console.log('please enter directions for users to test your project!')
            return false;
          }
        }
      },
      {
        type: 'LIST',
        name: 'licenseType',
        message: 'Provide your license type:',
        choices: ['MIT', 'Apache', 'GPL', 'Affero GPL', 'Artistic License 2.0', 'Mozilla Public License Version 2.0', 'Eclipse Public License v1.0','NA']
      }
    ])   
  };

userInput()
    .then(projectDetails => {
        const readMefile = generateMarkdown(projectDetails)
            fs.writeFile('./readMEoutput.md', readMefile, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
      console.log(projectDetails)
      console.log(projectDetails.title)
    });
});