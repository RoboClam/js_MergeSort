const fs = require('node:fs/promises');
// console.log("Hello World!");

const fileLocation = 'C:\\Users\\Jacob\\GitHub_Projects\\nodejs\\js_MergeSort\\input.json';
var data = [[1, 2, 3],[4, 5, 6]];
fs.readFile(fileLocation)
    .catch(e => {
        console.log(`couldn't read from file because ${e}`);
        let temp = JSON.stringify([[7, 8,9],[0, 1, 2]]);
        fs.writeFile(fileLocation, temp);
        return temp;
    })
    .then(res => {
        data = JSON.parse(res);
        console.log(data);
    });


