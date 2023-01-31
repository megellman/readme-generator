// var response = require('../index');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'No License') {
        return '';
    }
    var licenseName = license.split(' ').join('-');
    return `![license badge](https://img.shields.io/static/v1?label=license&message=${licenseName}&color=blue)`

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'No License') {
        return `  ## Table of Contents

        * [Installation](#installation)
* [Usage](#usage)
* [Author Info](#author-info)
* [Credits](#credits)`
    } else {
        return `  ## Table of Contents

        * [Installation](#installation)
* [Usage](#usage)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'No License') {
        return '';
    }
    return `## License
  
  This project is covered under the ${license} license. For more information please click [here](https://choosealicense.com/)`
}

function featuresSection(features) {
    if (features !== '') {
        return `## Features
${features}`
    } else {
        return ''
    }
}

function contributeSection(contributing, contributingCustom){
    if(contributing === 'Use the Contributor Covenant'){
return `## How to Contribute
[Contributor Covenant](https://www.contributor-covenant.org/)`
    }else if(contributing === 'Write my own contributing guidelines'){
return `## How to Contribute
${contributingCustom}`
    }else if(contributing === 'I don\'t want others to contribute to this'){
return ''
    }
}

function collabSection(creditName, creditLink){
    if(creditName == ''){
        return ''
    } else {
        var names = creditName.split(', ');
        var links = creditLink.split(', ');
       var section = '';
       names.forEach((names, index) => {
        const link = links[index]
        section += 
`### ${names}
[GitHub](${link})
`;
       });
    }
   return section
}

function creatorSection(creator, creatorLink){
    if(creator == ''){
        return ''
    } else {
    var creator = creator.split(', ');
    var links = creatorLink.split(', ');
   var section = '';
   creator.forEach((creator, index) => {
    const link = links[index]
    section += 
`### ${creator}
- ${link}
`;
   });
}
   return section
}

function tutorialSection(tutorial, tutorialLink){
    if(tutorial== ''){
        return ''
    } else {
    var tutorial = tutorial.split(', ');
    var links = tutorialLink.split(', ');
   var section = '';
   tutorial.forEach((tutorial, index) => {
    const link = links[index]
    section += `### ${tutorial}
- ${link}
`;
   });
}
   return section
}

// TODO: Create a function to generate markdown for README
//write this md file first for formatting 
function generateMarkdown(response) {
    var markdown = `# ${response.title}
${renderLicenseBadge(response.license)}

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML) |      |   
| Git | [git-scm.com](https://git-scm.com/)     |    
| Node.js | [nodejs.org/docs](https://nodejs.org/docs/latest-v16.x/api/) |
    
## Description

[Visit the Deployed Site](${response.deployed-link})
    
${response.what}

${response.how}

${response.why}

![Project Demo](${demo-gif})

${renderLicenseLink(response.license)}

## Code Example

```
${response.example}
```

${response.example-info}

## Installation
    
${response.install}
    
## Usage
  
${response.usage}

## Author Info

### Megan Ellman

[LinkedIn](https://www.linkedin.com/in/megan-ellman/)

[GitHub](https://github.com/megellman)

[Portfolio](https://megellman.github.io/portfolio/)
    
## Credits
    
${collabSection(response.creditName, response.creditLink)}
    
${creatorSection(response.creator, response.creatorLink)}

${tutorialSection(response.tutorial, response.tutorialLink)}
    
${renderLicenseSection(response.license)}

${featuresSection(response.features)}

${contributeSection(response.contributing, response.contributingCustom)}

## Tests

${response.contribute}

## Questions

[GitHub](github.com/${response.username})

If you have any additional questions, you can reach me at ${response.email}
`;
    return markdown
}

module.exports = generateMarkdown;
