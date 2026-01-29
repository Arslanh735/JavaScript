// function checkResult() {

//     document.getElementById("result").innerHTML = output;
// }

// var now = new Date()
// console.log(now.toDateString())
// console.log(now.toLocaleDateString())

// console.log(now.toTimeString())
// console.log(now.toLocaleTimeString())
// console.log(now.slice(0 ,3));

// var now = new Date().getDay() //day of week
// var now = new Date().getMonth() //current month
// var now = new Date().getDate() //current month
// var now = new Date().getFullYear    () //current month
// var now = new Date().getMilliseconds() //current month
// console.log(now)


// var now  = new Date().getTime()
// console.log(now)
// var now = new Date();
// var oldDate = new Date("10 Oct 1998");

// var oldDateMiliSec = oldDate.getTime();
// var currentMiliSec = now.getTime();
// console.log("oldDateMiliSec", oldDateMiliSec);
// console.log("currentMiliSec", currentMiliSec);

// var diffMili = currentMiliSec - oldDateMiliSec;
// console.log("diffMili", diffMili);
// var diff = Math.floor(diffMili / (1000 * 60 * 60 * 24 * 365)) //sec

// console.log(diff);


function showAgeDetail() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var age = document.getElementById("age").value;

    if(isNaN(age) || age === ""){
        alert("Inviled Age");
        return;
    }

    age = Number(age);

    var months = age * 12;
    var days = age * 365;

    console.log("Name: " + name);
    console.log("Roll Number: " + roll);
    console.log("You are " + age + " years old");
    console.log("That is equal to:");
    console.log(months + " months");
    console.log(days + " days");
}