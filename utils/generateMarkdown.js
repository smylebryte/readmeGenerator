// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Table of Contents
  [Description](#desc)
  [Installation](#install)
  [Questions](#quest)


  ## Title
  ${data.title} 

  <a name="desc"></a>
  ## Description
  ${data.description} 

  <a name="install"></a>
  ## Installation
  ${data.installation} 

  ## Usage
  ${data.usage} 

  ## License
  ${data.license} 

  ## Contributing
  ${data.contributing} 

  ## Tests
  ${data.tests} 
  
  <a name="quest"></a>
  ## Questions
  ${data.username}
  ${data.email}

`;
}

module.exports = generateMarkdown;
