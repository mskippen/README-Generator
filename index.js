const inquirer = require("inquirer");
const fs = require("fs");
const generateReadmeTemplate = require("./generateReadmeTemplate");

const questionsArray = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please describe your project?",
    name: "Description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "Contributing",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "Tests",
  },
  {
    type: "list",
    message: "Select your license type from the list",
    name: "License",
    choices: ["MIT", "ISC", "Apache", "Microsoft-Public", "The-UniLicense"],
  },
  {
    type: "input",
    message: "What is your Github Username?",
    name: "Username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
];

function createFile(data) {
  const template = generateReadmeTemplate(data);
  fs.writeFile("./dist/README.md", template, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("file created");
    }
  });
}

inquirer
  .prompt(questionsArray)
  .then((answers) => {
    // Use user feedback for... whatever!!
    createFile(answers);
  })
  .catch((error) => {
    console.log(error);
  });
