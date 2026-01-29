function addNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

function showResult() {
    var result = addNumbers(100, 200);
    document.getElementById("result").innerHTML = "Sum is: " + result;
}
