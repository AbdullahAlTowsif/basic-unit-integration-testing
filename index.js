const arr = [10, 'a', 'c', 11, 5];
let numArray = [];
let strArray = [];

const seperate = (arr) => {
    arr.filter((curr) => {
        if(typeof curr === 'number') {
            numArray.push(curr);
        }
        else {
            strArray.push(curr);
        }
    })
    console.log(numArray);
    console.log(strArray);
}

seperate(arr);