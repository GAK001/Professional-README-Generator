const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Project description?",
    },

    {
      type: "input",
      name: "installation",
      message: "Installation?",
    },
    {
      type: "input",
      name: "usage",
      message: "Usage?",
    },
    {
      type: "list",
      name: "license",
      message: "License?",
      choices: ["MIT", "Creative Commons license family", "The Unlicense"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Contributing?",
    },
    {
      type: "input",
      name: "tests",
      message: "Tests?",
    },
    {
      type: "input",
      name: "username",
      message: "What's your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What's your email address?",
      validate: function (email) {
        // Regex for email validation
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      },
    },
  ])
  // Write README file
  .then((data) => {
    const filename = `readme.md`;

    // Write file
    fs.writeFile(filename, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log("Readme file created!")
    );
  });
