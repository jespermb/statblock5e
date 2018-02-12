const inquirer   = require('inquirer');
const files      = require('./files');

module.exports = {

  askStats: () => {
    const argv = require('minimist')(process.argv.slice(2));
    const validate = (value, error) => {
      if (value.length) {
        return true;
      } else {
        return error;
      }
    }
    const questions = [
      {
        name: 'layout',
        type: 'list',
        message: 'Will this creature be in one or two columns?',
        choices: ["1 Column", "2 Columns"]
      },
      {
        name: 'name',
        type: 'input',
        message: 'Enter the name of your creature',
        validate: (value) => {
          return validate(value, 'Please enter the name of your creature.')
        }
      },
      {
        name: 'size',
        type: 'input',
        message: 'Enter the creatures size',
        validate: (value) => {
          return validate(value, 'Please enter a size.')
        }
      },
      {
        name: 'type',
        type: 'input',
        message: 'Enter the creatures type',
        validate: (value) => {
          return validate(value, 'Please enter a type.')
        }
      },
      {
        name: 'alignment',
        type: 'input',
        message: 'Enther the creature alignment',
        default: argv._[4] || 'unaligned'
      },
      {
        name: 'ac',
        type: 'input',
        message: 'Enter the creatures AC',
        validate: (value) => {
          return validate(value, 'Please enter an AC.')
        }
      },
      {
        name: 'hitpoints',
        type: 'input',
        message: 'Enter the creatures hit points',
        validate: (value) => {
          return validate(value, 'Please enter hit points.')
        }
      },
      {
        name: 'speed',
        type: 'input',
        message: 'Enter the creatures speed',
        validate: (value) => {
          return validate(value, 'Please enter the speed.')
        }
      },
    ];
    return inquirer.prompt(questions);
  },
}
