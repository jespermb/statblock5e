const express = require('express')
const fs = require('fs');
const path = require('path');
// Import the module
var readdirp = require('readdirp');
// Create app.
const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/src/views'));

var settings = {
    root: './creatures',
    entryType: 'all'
};

// In this example, this variable will store all the paths of the files and directories inside the providen path
var allFilePaths = [];

// Iterate recursively through a folder
readdirp(settings)
    .on('data', function (entry) {
        let page = {};
        page.name = entry.name;
        page.path = '/creatures/' + entry.name;
        app.get('/creatures/' + entry.name, (req, res) => {
            res.render('creature', page)
        })
        allFilePaths.push(page);
    })
    .on('warn', function(warn){
        console.log("Warn: ", warn);
    })
    .on('error', function(err){
        console.log("Error: ", err);
    })
    .on('end', function(){
        console.log(allFilePaths);
    });
app.get('/', (req, res) => {
    res.render('index', {
      menu: allFilePaths
    })
})
app.use(express.static(__dirname + '/src'));
const port = process.env.PORT || 5656;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
