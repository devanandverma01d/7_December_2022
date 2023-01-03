let news1 = {
    w1: "Amid",
    w2: 'clash',
    w3: `Between`
}
var x = "w1";
let y = `w2`;
const z = 'w3'
// 1. console.log()
//1st way to access js Object property
console.log(news1.w1 + " " + news1.w2 + ' ' + news1.w3);

//This is 2nd way to access js object property
console.log(news1["w1"] + " " + news1['w2'] + ` ` + news1[`w3`]);

//this is 3rd way to access js object code
console.log(news1[x] + " " + news1[y] + ' ' + news1[z]);