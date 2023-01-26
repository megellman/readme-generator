
const inquirer = require('inquirer');
const fs = require('fs');
var markdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is your project called?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Briefly describe your project.',
        name: 'what',
    },
    {
        type: 'input',
        message: 'How did you achieve this?',
        name: 'how',
    },
    {
        type: 'input',
        message: 'Why did you create this project?',
        name: 'why',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? If there are none, leave blank.',
        name: 'install',
        default: '',
    },
    {
        type: 'input',
        message: 'How can your project be used? Please provide instructions.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If you collaborated with anyone, list their names here. If you didn\'t, leave this blank. Format as: Name1, Name2, Name3',
        name: 'creditName',
        default: '',
    },
    {
        type: 'input',
        message: 'Link the collaborators\'s GitHub profiles here. Format as: GitHubURL1, GitHubURL2, GitHubURL3',
        name: 'creditLink',
        when: (response) => response.creditName !== '',
    },
    {
        type: 'input',
        message: 'If you used any third-party assets that require attribution, list the creators here. If you didn\'t, leave this blank. Format as: Creator1, Creator2, Creator3',
        name: 'creator',
        default: '',
    },
    {
        type: 'input',
        message: 'List the links to the creators\' web presences here. Format: Link1, Link2, Link3',
        name: 'creatorLink',
        when: (response) => response.creator !== '',
    },
    {
        type: 'input',
        message: 'If you followed any tutorials, list them here. If you didn\'t, leave this blank. Format as: Tutorial1, Tutorial2, Tutorial3',
        name: 'tutorial',
        default: '',
    },
    {
        type: 'input',
        message: 'List the links of the tutorials you followed. Format: Link1, Link2, Link3',
        name: 'tutorialLink',
        when: (response) => response.tutorial !== '',
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
        type: 'input',
        message: 'Please provide test instructions. If there are none, leave blank.',
        name: 'contribute',
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
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
]


// write README file
function writeToFile(response) {
    fs.writeFile('READMEsample.md', markdown(response), err => {
        err ? console.log(err) : console.log('Completed!')
    })
}

// initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        module.exports = response;
        writeToFile(response);
    });
}


init();

