function getValue(){
    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    console.log(firstName.value)
    console.log(lastName.value)
}

function setValue(){
    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    firstName.value = "Arslan";
    lastName.value = "Haider";
}