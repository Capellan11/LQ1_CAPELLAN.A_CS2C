let persona1name = "Maria Delos Santos Las Marias ";
let persona1age = 25;
let persona1address = "Upper Session Road, Baguio City, Benguet";

let persona2name = "Juan Gamoso Dela Cruz";
let persona2age = 28;
let persona2address = "San Nicolas, Candon City, Ilocos Sur";

let p1nameRearrange = persona1name.split(" ");
let p2nameRearrange = persona2name.split(" ");

let p1namelength = persona1name.length;
let p2namelength = persona2name.length;
let p1addlength = persona1address.length;
let p2addlength = persona2address.length;

let sumofall = persona1age + persona2age + p1namelength+ p2namelength + p1addlength + p2addlength;
let p1Addp2 = persona1age + persona2age;
let subtractp1 = p1Addp2 - p1namelength;
let multiplyp2 = subtractp1 * p2namelength;
let p1ToThePowerp2 = p1addlength ** p2addlength;

console.log("name:", p1nameRearrange[3].toUpperCase(), p1nameRearrange[4].toUpperCase()+",",p1nameRearrange[0] , p1nameRearrange[1] , p1nameRearrange[2]+",", "age: ",persona1age,"address: ",persona1address);
console.log("name: ", p2nameRearrange[2].toUpperCase(), p2nameRearrange[3].toUpperCase()+",",p2nameRearrange[0] , p2nameRearrange[1]+",", "age: ",persona2age, "address:  ",persona2address);



console.log(sumofall);
console.log(p1Addp2);
console.log(subtractp1);
console.log(multiplyp2);
console.log(p1ToThePowerp2);