/*
function countSheeps(arrayOfSheep){
    if(arrayOfSheep == 0){
        return console.log("")
    }else{
        for(let i = 0; i < arrayOfSheep; i++){
            console.log(i + " sheep...")
        }
    }
}

console.log(countSheeps(5))
*/

/*function countSheeps(arrayOfSheep){
    let i = 1;
    while(i < arrayOfSheep){
        console.log(i + " sheep...");
        i++;
    }
}

console.log(countSheeps(5));
*/

/*
// Standard-issue for loop solution.
const countSheep = function(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
      result += i.toString() + ' sheep...';
    }
    return result;
  }

*/

function countSheep(num){
    let result = '';
    for(let i = 1; i <= num; i++){
        result += i.toString() + " sheep...";
    }
    return result;
}

console.log(countSheep(5));


const person = {
    fname:"Islom",
    lname:"Sattorov",
    age:23
};

let text = "";

for(let x in person){
    text += person[x];
}
