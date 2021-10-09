
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";

    case 'APACHE 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case 'BSD':
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

    case 'GPL 3.0':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    case 'None':
      return '';
  }
}


function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return "(https://opensource.org/licenses/MIT)";

    case 'APACHE 2.0':
      return "(https://opensource.org/licenses/Apache-2.0)";

    case 'BSD':
      return "(https://opensource.org/licenses/BSD-3-Clause)";

    case 'GPL 3.0': 
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    
    case 'None':
      return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
