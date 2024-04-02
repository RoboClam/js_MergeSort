const fs = require('node:fs/promises');
const tools = require('./tools');
// console.log("Hello World!");

const fileLocation = 'C:\\Users\\Jacob\\GitHub_Projects\\nodejs\\js_MergeSort\\input.json';
var data = fs.readFile(fileLocation)
    .catch(e => {
        console.log(`couldn't read from file because ${e}`);
        console.log(`continuing with generated file\n`);
        let temp = JSON.stringify(tools.createData());
        fs.writeFile(fileLocation, temp);
        return temp;
    })
    .then(res => {
        return JSON.parse(res);
    });

data.then((res) => {
    // console.log(res);
    return;
});

