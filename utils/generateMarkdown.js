// function to generate markdown for README
function generateMarkdown(data) {
  if (data.license === "MIT") {
    data.badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.license === "Creative Commons license family") {
    data.badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (data.license === "The Unlicense") {
    data.badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }

  return `# ${data.title} 
  ## Description
  ${data.description} 

  ## Table of Contents
  ### [Description](##Description) 
  ### [Installation](##Installation)
  ### [Usage](##Usage)
  ### [License](##License)
  ### [Contributing](##Contributing)
  ### [Tests](##Tests)
  ### [Questions](##Questions)
  ### [Badges](##Badges)
  
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

  ## Questions
  For additional questions, please contact me at: ${data.email}
  
  Visit my Github profile page here: https://github.com/${data.username} 
 
  ## Badges 
  ${data.badge} 
`;
}

module.exports = generateMarkdown;
