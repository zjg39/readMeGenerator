const inquirer = require('inquirer');
const fs = require('fs');
const variable = fs.writeFile;


const readMeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is your project title? ',
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Describe your project here: '
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Leave instructions for installation here: ',
            default: 'npm i',
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'What usage information is needed? ',
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'What guidelines should contributors follow? ',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Instructions for testing: '
        },
        {
            type: 'list',
            name: 'License',
            message: 'Which license are you using?',
            choices: ['MIT', 'APACHE 2.0', 'BSD', 'GPL 3.0', 'None']
        }
    ])
}

function writeToFile (answers){
    return `
# ${answers.Name}
    
## Description

### ${answers.projectDescription}

## Installation Instructions

### ${answers.installationInstructions}

## Usage Information

### ${answers.usageInformation}

## Contribution Guidelines 

### ${answers.contributionGuidelines}

## Test Instructions

### ${answers.testInstructions}

`}


const makeAFile = (answers) => {
    const stringMaker = writeToFile(answers)
    fs.writeFile('README.md', stringMaker, (err) =>
    err ? console.log(err): console.log('success!'));
}
const init = () => {
    readMeQuestions()
      .then((answers) => makeAFile(answers))
      .catch((err) => console.error(err));
  };
  
  init();