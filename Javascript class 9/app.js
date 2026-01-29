// for loop

// Defination :- repeatation of code

// ager ham koi variable multiple time show krwane k liy bar bar console.log ya document.writeln chalate hain to us ko ham aik for loop ki madad se aik hi line main bar bar run krwa sakte hain 

// Syntax :- for(initialization; condition; increment/decrement){}


// var studentNames = ["Faheem", "Nasir", "Hammad", "Hamza", "Abdullah", "Ali", "Rizwan", "Ahmed", "Bilal", "Usman", "Ayaan", "Saad","Zain",
//     "Huzaifa", "Talha", "Danish", "Areeb", "Sameer", "Fahad", "Ibrahim" ];  


// for (var i = 0; i < studentNames.length; i++) {
//     document.writeln("Student " + i + "" + " " + studentNames[i] + "<br />")

// }


// var studentNames = ["Faheem", "Nasir", "Hammad", "Hamza", "Abdullah", "Ali", "Rizwan", "Ahmed", "Bilal", "Usman", "Ayaan", "Saad","Zain",
//     "Huzaifa", "Talha", "Danish", "Areeb", "Sameer", "Fahad", "Ibrahim" ];

//     var checkValue = "Ali";

//     for(var i = 0; i < studentNames.length; i++){
//         if(checkValue == studentNames[i]){
//             document.writeln("Welcome")
//             document.writeln("Value availible")
//         }
//     }


var numbers = [0, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20];

var searchNumber = +prompt("Find Number?");

var found = false;

for(var i = 0; i < numbers.length; i++){

    if(numbers[i] === searchNumber ){
        found = true;
        break
    }
}

if (found === true) {
    document.writeln("Number Found");
} else {
    document.writeln("Number Not Found");
}