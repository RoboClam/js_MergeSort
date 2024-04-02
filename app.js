const fs = require('node:fs/promises');
const tools = require('./tools');
// console.log("Hello World!");

const inputFileLocation = 'C:\\Users\\Jacob\\GitHub_Projects\\nodejs\\js_MergeSort\\input.json';
const outputFileLocation = 'C:\\Users\\Jacob\\GitHub_Projects\\nodejs\\js_MergeSort\\output.json';
var data = fs.readFile(inputFileLocation)
    .catch(e => {
        let temp = JSON.stringify(tools.createData());
        fs.writeFile(inputFileLocation, temp);
        return temp;
    })
    .then(res => {
        return JSON.parse(res);
    })
    .then((res) => {
        let input = res;
        let sortedInput = [];
        for(let i = 0; i < input.length; i++) {
            sortedInput.push(mergeSort(input[i]));
        }
        return sortedInput;
    })
    .then(res => {
        fs.writeFile(outputFileLocation, JSON.stringify(res));
    });

/*
* 1. Divide the input into a left and right collection 
* 2. If the collection is only a single element, return
* 3. Sort and combine left and right collections, return sorted collection
*/
function mergeSort(input) {
    if(input.length == 0) {
        throw e;
    }
    if(input.length == 1) {
        return input[0];
    }
    if(input.length == 2) {
        if(input[0] < input[1]) {
            return [input[0], input[1]];
        }
        else {
            return [input[1], input[0]];
        }
    }
    
    let middleIndex = Math.floor(input.length / 2);
    let left = input.slice(0, middleIndex);
    let right = input.slice(middleIndex);
    if(input.length > 2) {
        left = mergeSort(left); // slice (start, end) end is "up to but not including"
        right = mergeSort(right);
    }
    if(!Array.isArray(left)) {
        let temp = new Array();
        temp.push(left);
        left = temp;
    }
    if(!Array.isArray(right)) {
        let temp = new Array();
        temp.push(right);
        right = temp;
    }
    let sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;
    for(let i = 0; i < left.length + right.length; i++) {
        if(left[leftIndex === undefined]) {
            sorted.push(right[rightIndex++]);
        }
        else if(right[rightIndex] === undefined) {
            sorted.push(left[leftIndex++]);
        }
        else if(left[leftIndex] < right[rightIndex]) {
            sorted.push(left[leftIndex++]);
        }
        else {
            sorted.push(right[rightIndex++]);
        }
    }
    return sorted;

}