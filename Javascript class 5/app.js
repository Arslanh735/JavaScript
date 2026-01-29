// Gates
// and oprator && oprator ko if condition main multiple condition ko check krne k liy use kia jata hy aur is ko dono sides pr ture milne se if condition true ati hy warna opration els pr chala jata hy aur condition stop ho jati hy


// or oprator || oprator ko b if conition main use ki jata hy lakin is ko koi aik condition b true mil jay to if condtion chal jati hy yani dono sides main se koi aik condition true honi chahy

var html = +prompt("Enter your HTML marks")
var css = +prompt("Enter your CSS marks")
var javaScript = +prompt("Enter your Javascript marks")
var python = +prompt("Enter your Python marks")
var graphicDesigning = +prompt("Enter your Graphic Designing marks")

var totalMarks = 500

var obtainMarks = html + css + javaScript + python + graphicDesigning

var result = (obtainMarks/totalMarks) * 100


console.log("Your percentage is: " + result + "%")


if(result >= 80 && result <= 100){
    console.log("A+")
}else if(result >= 70 && result <= 79){
    console.log("A")
}else if(result >= 60 && result <= 69){
    console.log("B")
}else if(result >= 0 && result <= 59){
    console.log("Fail")
}else{
    console.log("Inviled Marks Entry")
}