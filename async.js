const { asyncify } = require("async");

async function foo(){
    return (1)
}
console.log(foo());

function fOo(){
    return Promise.resolve(1)
}
console.log(fOo());

const p = new Promise((resolve, reject) => {
    resolve(1)
})
console.log(p);

function basic(){
    return Promise.resolve(1)
}
console.log(basic())

async function base() {
    return p
}
console.log(base())

// async function gum(){
//     await 1;
// }
// console.log(gum())

// const getData = async()=>{
//     let x = await "Hi Sanjay";
//     console.log(x)
// }
// console.log("1");
// console.log(getData());
// console.log("3");
// function asynchronous_operational_method() {
//     let first_promise =
//         new Promise((resolve, reject) => resolve("Hello"));
//     let second_promise =
//         new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(" GeeksforGeeks..");
//         }, 1000);
//     });
//     let combined_promise =
//         Promise.all([first_promise, second_promise]);
//     return combined_promise;
// }
 
// async function display() {
//     let data = await asynchronous_operational_method();
//     console.log(data);
// }
 
// display();