export default function findSumA(a, b){

    return a + b

}

export const findSumB = (a,b) => {
    return a + b
}

// Anon funcs

<button onClick = {() => {

    console.log("hello world")
}}>

</button>

// terniary operators

let age = 18;
let status = age < 18 && "minor";
console.log(status);