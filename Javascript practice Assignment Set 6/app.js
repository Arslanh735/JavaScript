// Task 21:
// Current date & time alert mein show karo.
// var currentDate = new Date();


// alert(currentDate)

// Task 22:
// Sirf current year show karo.

// var currentDate = new Date();

// var currentYear = currentDate.getFullYear()

// alert(currentYear)


// Task 23:
// Simple function banao jo alert kare:

// Hello JavaScript


// function greet(){
//     alert("Hello JavaScript")
// }

// greet()


// Task 24:
// Function banao jo 2 numbers le aur un ka sum return kare.


// function addition(){
//     var num1 = 50;
//     var num2 = 100;
//     var sum = num1 + num2
//     alert(sum)
// }

// addition()

// Task 25:
// Function ko button click se call karo (HTML + JS).

// function greet(){
//     alert("Hello World!")
// }


// 🔥 PRACTICE CHALLENGE (Bonus)

// Mini Project:
// Ek Result System banao:

// Array of marks

// Loop

// if/else

// Pass/Fail count

// Final result screen par show



// // 1. Data
// var marks = [20, 60, 30, 80, 90, 98, 70, 89];
// var passingMarks = 50;   // tum change kar sakte ho 33, 40, 50, 60 jo chaho

// // 2. Counters
// var passCount = 0;
// var failCount = 0;

// // 3. Result calculation + beautiful output
// document.write("<h2>Student Result Sheet</h2>");
// document.write("<table border='1' cellpadding='10'>");
// document.write("<tr><th>Roll No</th><th>Marks</th><th>Status</th></tr>");

// for (var i = 0; i < marks.length; i++) {
//     var status = (marks[i] >= passingMarks) ? "Pass" : "Fail";
    
//     if (status === "Pass") {
//         passCount++;
//     } else {
//         failCount++;
//     }
    
//     // colorful row
//     var color = (status === "Pass") ? "green" : "red";
    
//     document.write(`
//         <tr style="color:${color};">
//             <td>${i + 1}</td>
//             <td>${marks[i]}</td>
//             <td><strong>${status}</strong></td>
//         </tr>
//     `);
// }

// document.write("</table>");

// // 4. Final Summary – yeh sabse zaroori part hai
// document.write("<br><br>");
// document.write("<h3>Final Summary</h3>");
// document.write(`Total Students: <b>${marks.length}</b><br>`);
// document.write(`Passed: <b style="color:green">${passCount}</b><br>`);
// document.write(`Failed: <b style="color:red">${failCount}</b><br>`);

// var passPercentage = ((passCount / marks.length) * 100).toFixed(1);
// document.write(`Pass Percentage: <b>${passPercentage}%</b>`);