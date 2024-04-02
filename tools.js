module.exports = {
    createData: function() {
        return innerCreateData();
    }
}

function innerCreateData() {
    let list = [];
    for(let i = 0; i < 50; i++) {
        let innerList = [];
        for(let j = 0; j < 100; j++) {
            innerList.push(getRandomInt(0, 1000));
        }
        list.push(innerList);
    }
    return list;
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  