let bread1=prompt("which bread you want to have");
let vegeies1=prompt("select the vegetables");
let sauces1=prompt("select the sauce");

function makeSandwich(bread,vegeies,sauce){
    let sandwich=(bread +" "+"bread"+" "+vegeies+" "+"vegetables"+" "+sauce+" "+"sauce");
    console.log(sandwich)
}

let VegSandwich=makeSandwich(bread1,vegeies1,sauces1);
console.log(VegSandwich);