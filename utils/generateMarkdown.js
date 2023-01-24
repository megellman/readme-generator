// var response = require('../index');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
var licenseName = license.toLowerCase().split(' ').join('-');
    if (license === 'No License') {
        return '';
    }
    return `![license badge](https://img.shields.io/badge/license-${licenseName}-blue.svg)`

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'No License') {
        return `  ## Table of Contents

        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)`
    } else {
        return `  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'No License') {
        return '';
    }
    return `## License
  
  This project is cover under the ${license} license. For more information please click [here](https://choosealicense.com/)`
}

function featuresSection(features) {
    if (features != '') {
        return `## Features
${features}`
    } else {
        return ''
    }
}

function contributeSection(contributing, contributingCustom){
    if(contributing === 'Use the Contributor Convenant'){
return `## How to Contribute
[Contributor Covenant](https://www.contributor-covenant.org/)`
    }else if(contributing === 'Write my own contributing guidelines'){
return `## How to Contribute
${contributingCustom}`
    }else if(contributing === 'I don\'t want others to contribute to this'){
return ''
    }
}
// TODO: Create a function to generate markdown for README
//write this md file first for formatting 
function generateMarkdown(response) {
    var markdown = `# ${response.title}
${renderLicenseBadge(response.license)}
    
## Description
    
${response.description}
    
## Installation
    
${response.installation}
    
## Usage
  
${response.usage}
    
## Credits
    
${response.creditCollab}
    
${response.creditAsset}
  
${renderLicenseLink(response.license)}
    
${renderLicenseSection(response.license)}

${featuresSection(response.features)}

${contributeSection(response.contributing, response.contributingCustom)}`;
    return markdown
}

module.exports = generateMarkdown;
