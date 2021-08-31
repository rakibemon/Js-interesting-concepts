function welcomeMessage(names, greetHandler){
    greetHandler(names);
}
// const name = ['Rakib Emon','Emon','Avro']
/* const nameObj = {
    name:"Emon",
    age:24
} */
function greetMorning(name){
    console.log("Good Morning"+ name)
}
function greetAfternoon(name){
    console.log("Good Afternoon"+ name)
}
welcomeMessage(" Rakib",greetMorning)
welcomeMessage(" Emon",greetAfternoon)
// greetMorning()