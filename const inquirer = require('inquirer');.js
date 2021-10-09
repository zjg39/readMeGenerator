const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const readMeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
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
            message: 'Leave instructions for installation here: '
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'What usage information is needed? ',
        },
        {
            type: 'input',
            name: 'contributionGuidelines: ',
            message: 'What guidelines should contributors follow? ',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Instructions for testing: '
        }
    ])
}

function writeToFile(answers) {
    `# ${answers.projectName}
    
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



const init = () => {
    readMeQuestions()
      .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();