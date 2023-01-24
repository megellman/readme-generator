// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
//type,name,message--- activity from today 20&inquire docs
//list type for license 
const questions = [
    {
        type: 'input',
        message: 'What is your project called?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project about?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How can your project be used? Please provide instructions.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If you collaborated with anyone, list their names and a link to their GitHub profiles. Format: Name - GitHub Profile Link',
        name: 'creditCollab',
    },
    {
        type: 'input',
        message: 'List the third-party assets and link to their web presence. Format: Third-Party - Creator - Link',
        name: 'creditAsset',
    },
    {
        type: 'list',
        message: 'Which license do you want to use?',
        name: 'license',
        choices: ['MIT', 'Apache License 2.0', 'ISC', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unlicense', 'No License'],
    },
    {
        type: 'input',
        message: 'If your project has a lot of features, please list them here',
        name: 'features',
    },
    {
        type: 'list',
        message: 'How would you like other developers to contribute to this?',
        name: 'contributing',
        choices: ['Use the Contributor Covenant', 'Write my own contributing guidelines', 'I don\'t want others to contribute to this']
    },
    {
        type: 'input',
        message: 'What guidelines do you have for contributing?',
        name: 'contributingCustom',
        when: (response) => response.contributing === 'Write my own contributing guidelines'
    },
]


// TODO: Create a function to write README file
//formatting the readme
// create a dist folder and write file into that folder --can call file readme.md
function writeToFile(response) {
    fs.writeFile('READMEsample.md', markdown(response), err => {
        err ? console.log(err) : console.log('Completed!')
    })
}

// TODO: Create a function to initialize app --- calls the prompts
function init() {
    inquirer.prompt(questions).then(response => {
        module.exports = response;
        writeToFile(response);
    });
}

// Function call to initialize app
init();

