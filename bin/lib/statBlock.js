const _           = require('lodash');
const fs          = require('fs');
const touch       = require('touch');
const files       = require('./files');

const inquirer    = require('./inquirer');

module.exports = {
  createStatBlock: async () => {

    const answers = await inquirer.askStats();

    const data = {
      title: answers.name,
      statblock: {
        creatureheading: {
          title: answers.name,
          subtitle: answers.size + ' ' + answers.type + ' ' + answers.alignment
        },
        topstats: [],
        propertyBlock: [],
        actions: []
      }
    };
    const folder = './creatures';
    const fileName = answers.name + '.json';
    const file = _.indexOf(fs.readdirSync(folder), fileName);
    if (file !== -1) {
      fs.writeFileSync(folder + '/' + fileName, data);
    } else {
      touch(folder + fileName);
      fs.writeFileSync(folder + '/' + fileName, data);
    }
  },
}
