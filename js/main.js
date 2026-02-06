console.log("JS file is connected")

//Functions
function logId(){
    console.log(`User Clicked on: ${this.id}`);
}

//Variables
const orange = document.querySelector("#orange");
console.log(orange)

//EventListener 
orange.addEventListener("click",logId)

//Variables
const strawberryseeds = document.querySelector("#strawberry-seeds");
console.log(strawberryseeds)

//EventListener 
strawberryseeds.addEventListener("click",logId)

//Variables
const mango = document.querySelector("#mango");
console.log(mango)

//EventListener 
mango.addEventListener("click",logId)

//Variables
const raspberry = document.querySelector("#raspberry");
console.log(raspberry)

//EventListener 
raspberry.addEventListener("click",logId)

//Variables
const blueberry = document.querySelector("#blueberry");
console.log(blueberry)

//EventListener 
blueberry.addEventListener("click",logId)

//Variables
const peach = document.querySelector("#peach");
console.log(peach)

//EventListener 
peach.addEventListener("click",logId)