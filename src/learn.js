// export default function findSumA(a, b){

//     return a + b

// }

// export const findSumB = (a,b) => {
//     return a + b
// }

// // Anon funcs

// <button onClick = {() => {

//     console.log("hello world")
// }}>

// </button>

// // terniary operators

// const age = 21;
// let status = age < 18 ? "minor" : "major";
// console.log(status);

// const Component = () => {
//     return age < 18 ? "minor" : "major";
// }

const person = {
    name: "Kazi Priom",
    age: 28,
    isMarried: false,
};

const {name, age, isMarried} = person;
const person2 = {...person, name: "Jack"};
const names = ["Kazi", "Jack", "John"];
const names2 = [...names, "James"];


names2.map((name) => {


    return name + "1";


});

names.filter((name) => {

    return name == "Kazi";

});


