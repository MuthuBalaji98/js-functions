// function declarations
function bike(){
   let bikeName="Royal Enfield";
  return console.log(bikeName);
}
bike();
// function expressions

const a=add(5,3);
function add(b,c){
  return b+c;
}
console.log(a);

// arrow function

const car=()=>{
  let carName="volvo";
  return carName;
}
console.log(car());
console.log(car);


function car1() {
  let carName = "Benz";
  return (typeof carName + " " + carName);
}
console.log(car1());
console.log(typeof carName);