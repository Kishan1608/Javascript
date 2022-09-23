// let count = 0;
// function increment(){
//     count++;
//     document.getElementById("count").innerHTML = count;
// }

// function reset(){
//     count = 0;
//     document.getElementById("count").innerText = count;
// }

// let str = document.getElementById("input-string");
//let output = document.getElementById("output");
// function show(){
//     console.log(str);
//     let str1 = reverseString(str);
// }

//var str = window.prompt("Enter a String");

// const newString = str.split('').reverse().join('');

// let nwstr = '';
// for(let i=str.length - 1; i>=0; i--){
//     nwstr += str[i];
// }

// document.write("Using functions: "+ newString + "<br>");
// document.write("Using Loop: " + nwstr+ "<br>");
// document.write(str.length+ "<br>");
// document.write(str.charAt(1)+ "<br>");
// document.write(str.indexOf("llo") + "<br>")
// document.write(str.substring(2) + "<br>")
// document.write(str.substring(1,3) + "<br>")



// function reverseString(str){
//     var newString="";
//     for(var i = str.length; i>=0; i--){
//         newString += str[i];
//     }
//     console.log(newString);
//     output.innerHTML = newString;
//     return newString;
// }


// var numberGrid = [ [1,2] , [3,4] ];

// console.log(numberGrid[0][0]);

// document.write(numberGrid[0][0] + "<br>");
// document.write(numberGrid[0][1] + "<br>");

// document.write(numberGrid[1][1] + "<br>");


// var header = document.getElementById('myHeader');

// header.addEventListener("click", () => {
//     alert("You clicked "+ header.id);
// })

//duplicate elements


const duplicatedArray = [1, 2, 4, 5, 1, 5, 6];

const duplicates = duplicatedArray.filter((ele, index, arr) => arr.indexOf(ele) !== index);

document.write(duplicatedArray + "<br>");
document.write(duplicates);
