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
        message: 'Provide project description'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter your projects installation instructions'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines:'
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Provide test instructions'
      },
      {
        type: 'checkbox',
        name: 'licenseType',
        message: 'Provide test instructions',
        choices: ['MIT', 'Apache', 'GPL', 'Affero GPL', 'Artistic License 2.0', 'Mozilla Public License Version 2.0', 'Eclipse Public License v1.0']
      }
    ])   
  };


// TODO: Create a function to write README file
function writeToFile(readMeTemplate, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

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