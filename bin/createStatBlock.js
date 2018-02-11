#! /usr/bin/env node
const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');

const files = require('./lib/files');
const stats = require('./lib/statBlock');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Creature stat block creator', { horizontalLayout: 'full' })
  )
);

if (!files.directoryExists('creatures')) {
  console.log(chalk.red('Can\'t find creatures directory!'));
  process.exit();
}

const inquirer  = require('./lib/inquirer');
const Configstore = require('configstore');
const conf = new Configstore('statblock');

const run = async () => {
  // Create .gitignore file
  await stats.createStatBlock();
}

run();