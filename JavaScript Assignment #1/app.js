function checkResult() {

    var marks = [85, 72, 66, 90, 55, 40, 35, 28, 20, 10];

    var passCount = 0;
    var failCount = 0;

    var output = "";

    for (var i = 0; i < marks.length; i++) {

        if (marks[i] >= 40) {
            output += "Student " + (i + 1) + " : Pass (" + marks[i] + " marks)<br>";
            passCount++;
        } else {
            output += "Student " + (i + 1) + " : Fail (" + marks[i] + " marks)<br>";
            failCount++;
        }
    }

    output += "<br><strong>Total Pass Students: </strong>" + passCount;
    output += "<br><strong>Total Fail Students: </strong>" + failCount;
        // document.writeln(output)
    document.getElementById("result").innerHTML = output;
}
