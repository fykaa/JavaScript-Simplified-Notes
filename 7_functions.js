console.log("This is tutorial 53");

let names = "Harry";
let name1 = "Shubham";



console.log(names + " is a good boy");
console.log(name1 + " is a good boy");


function greet(names) {
    console.log(names + " is functinally a good boy");
}

greet(names);
greet(name1);


function greeting(name, greetText) {
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");

}

let greetText = "Good Morning";
greeting(names, greetText);
greeting(name1, greetText);

function sum(a,b,c){
    let d = a + b + c;
    return d;
}
let returnVal = sum(1,2,3);
console.log(returnVal)

function check(a, b){
    if(a>=b){
        return a;
    }
    return b;
}
let a = 3;
let b = 2;

console.log("The greater among " + a + " and " + b + " is " + check(a,b));