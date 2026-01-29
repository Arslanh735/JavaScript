// Nested conditon
// Condition k ander condition ager lag jay to us ko nested condition kaha jata hy.

// Example

// var userEmail = "arslan@gmail.com";

// var userPass = "abcd123"

// if (userEmail === "arslan@gmail.com"){
//     console.log("Your Welcom");

//     if (userPass === "ab123"){
//         console.log("Your Welcom")
//     }else {
//         console.log("Inviled Pass")
//     }
    
// }else {
//     console.log("Email or Password is Not Match")
// }


var email = "admin@gmail.com"
var password = "78"

// Nested COndition
if (email === "admingmail.com") {
    console.log("theek hai");

    if (password === "123456") {
        console.log("User login")

    } else {
        console.log("Invalid Password")
    }



} else {
    console.log("Email Address not found")
}