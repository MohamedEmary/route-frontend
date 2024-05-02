/* // Question 1: Enter a number and display it
var a = prompt("Enter a number:");
a = Number(a);
if (!isNaN(a)) {
  alert(a);
} else {
  alert("Please enter a number!");
} */

// =======================================================

/* // Question 2: Divisible by both 3, 4
var b = prompt("Enter a number:");

if (!isNaN(b) && b % 3 === 0 && b % 4 === 0) {
  alert("yes");
} else {
  alert("no");
} */

// =======================================================

/* // Question 3: Max of 2 integers
var c = prompt("Enter a number:");
var d = prompt("Enter another number:");

if (!isNaN(Number(c)) && !isNaN(Number(d)) && c % 1 === 0 && d % 1 === 0) {
  if (c > d) {
    alert(c + " is the greater number");
  } else if (d > c) {
    alert(d + " is the greater number");
  } else {
    alert("Equal numbers");
  }
} else {
  alert("Please enter numbers!");
} */

// =======================================================

/* // Question 4, 19: Print positive, or negative
var e = prompt("Enter a number:");

// Using if-else
if (!isNaN(Number(e))) {
  if (e > 0) {
    alert("Positive");
  } else if (e < 0) {
    alert("Negative");
  } else {
    alert("Zero");
  }
} else {
  alert("Please enter a number!");
}

// Using Switch Case
if (!isNaN(Number(e))) {
  switch (true) {
    case e > 0:
      alert("Positive");
      break;
    case e < 0:
      alert("Negative");
      break;
    default:
      alert("Zero");
  }
} */

// =======================================================

/* // Question 5: Max between 3 integers
var f = prompt("Enter 1st number:");
var g = prompt("Enter 2nd number:");
var h = prompt("Enter 3rd number:");

// Using built-in functions
if (!isNaN(Number(f)) && !isNaN(Number(g)) && !isNaN(Number(h))) {
  var max = Math.max(f, g, h);
  var min = Math.min(f, g, h);
  alert("Max: " + max + " Min: " + min);
} else {
  alert("Please enter numbers!");
}

// Using if-else
if (!isNaN(Number(f)) && !isNaN(Number(g)) && !isNaN(Number(h))) {
  if (f >= g && f >= h) {
    if (g >= h) {
      alert("Max: " + f + " Min: " + h);
    } else {
      alert("Max: " + f + " Min: " + g);
    }
  } else if (g >= f && g >= h) {
    if (f >= h) {
      alert("Max: " + g + " Min: " + h);
    } else {
      alert("Max: " + g + " Min: " + f);
    }
  } else if (h >= f && h >= g) {
    if (f >= g) {
      alert("Max: " + h + " Min: " + g);
    } else {
      alert("Max: " + h + " Min: " + f);
    }
  }
} else {
  alert("Please enter numbers!");
} */

// =======================================================

/* // Question 6, 18: Check if a number is even or odd
var i = prompt("Enter an integer:");

// Using if-else
if (!isNaN(Number(i)) && i % 1 === 0) {
  if (i % 2 === 0) {
    alert("Even");
  } else {
    alert("Odd");
  }
} else {
  alert("Please enter an integer number!");
}

// Using Switch Case
if (!isNaN(Number(i)) && i % 1 === 0) {
  switch (true) {
    case i % 2 === 0:
      alert("Even");
      break;
    default:
      alert("Odd");
  }
} else {
  alert("Please enter an integer number!");
} */

// =======================================================

/* // Question 7, 16: Vowel or consonant
var j = prompt("Enter a character:");

// Using if-else
if (j.length === 1 && isNaN(Number(j))) {
  if (
    j === "a" ||
    j === "e" ||
    j === "i" ||
    j === "o" ||
    j === "u" ||
    j === "A" ||
    j === "E" ||
    j === "I" ||
    j === "O" ||
    j === "U"
  ) {
    alert("Vowel");
  } else {
    alert("Consonant");
  }
} else {
  alert("Please enter a single alphabet!");
}

// Using Switch Case
switch (j) {
  case "a":
  case "A":
  case "e":
  case "E":
  case "i":
  case "I":
  case "o":
  case "O":
  case "u":
  case "U":
    alert("Vowel");
    break;
  default:
    alert("Consonant");
} */

// =======================================================

/* // Question 8: Numbers from 1 to user input
var k = prompt("Enter a number:");
if (!isNaN(Number(k)) && k >= 1) {
  alert("See the output in the console!");
  for (var i = 1; i <= k; i++) {
    console.log(i);
  }
} else {
  alert("Please enter a number greater than 1!");
} */

// =======================================================

/* // Question 9: Multiplication table to 12
var l = prompt("Enter a number:");
if (!isNaN(Number(l))) {
  alert("See the output in the console!");
  console.log("Multiplication table of " + l + ":");
  for (var i = 1; i <= 12; i++) {
    console.log(l + " x " + i + " = " + l * i);
  }
} else {
  alert("Please enter a number!");
} */

// =======================================================

/* // Question 10: Even numbers between 1 and user input
var m = prompt("Enter a number:");
if (!isNaN(Number(m))) {
  alert("See the output in the console!");
  console.log("Even numbers between 1 and " + m + ":");
  for (var i = 1; i <= m; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
} */

// =======================================================

/* // Question 11: Number to power of another number
var n = prompt("Enter a number:");
var o = prompt("Enter another number:");
// Using built-in function
if (!isNaN(Number(n)) && !isNaN(Number(o))) {
  alert(n + " to the power of " + o + " is " + Math.pow(n, o));
}else {
  alert("Please enter numbers!");
}

// Using for loop
if (!isNaN(Number(n)) && !isNaN(Number(o))) {
  var res = 1;
  for (var i = 0; i < o; i++) {
    res = res * n;
  }
  alert(n + " to the power of " + o + " is " + res);
} else {
  alert("Please enter numbers!");
} */

// =======================================================

/* // Question 12: Total, average, and percentage of 5 subjects
var p = prompt("Enter marks for subject 1 out of 100:");
var q = prompt("Enter marks for subject 2 out of 100:");
var r = prompt("Enter marks for subject 3 out of 100:");
var s = prompt("Enter marks for subject 4 out of 100:");
var t = prompt("Enter marks for subject 5 out of 100:");
if (
  !isNaN(Number(p)) &&
  !isNaN(Number(q)) &&
  !isNaN(Number(r)) &&
  !isNaN(Number(s)) &&
  !isNaN(Number(t))
) {
  var total = Number(p) + Number(q) + Number(r) + Number(s) + Number(t);
  var avg = total / 5;
  var percentage = (total / 500) * 100;
  alert(
    "Total: " +
      total +
      "\nAverage: " +
      avg +
      "\nPercentage: " +
      percentage +
      "%"
  );
} else {
  alert("Please enter numbers!");
} */

// =======================================================

/* // Question 13, 15: Number of days in a month
var u = prompt("Enter a month number (1-12):");

// Using if-else
if (!isNaN(Number(u)) && u % 1 === 0 && u >= 1 && u <= 12) {
  if (
    u === "1" ||
    u === "3" ||
    u === "5" ||
    u === "7" ||
    u === "8" ||
    u === "10" ||
    u === "12"
  ) {
    alert("This month has 31 days.");
  } else if (u === "4" || u === "6" || u === "9" || u === "11") {
    alert("This month has 30 days.");
  } else {
    alert("This month has either 28 days or 29 days in a leap year.");
  }
}

// Using Switch Case
switch (u) {
  case "1":
  case "3":
  case "5":
  case "7":
  case "8":
  case "10":
  case "12":
    alert("This month has 31 days.");
    break;
  case "4":
  case "6":
  case "9":
  case "11":
    alert("This month has 30 days.");
    break;
  case "2":
    alert("This month has either 28 days or 29 days in a leap year.");
    break;
  default:
    alert("Invalid month number. Please enter a number between 1 and 12.");
} */

// =======================================================

/* // Question 14: Percentage and grade for 5 subjects

var v = prompt("Enter marks for Physics out of 100:");
var w = prompt("Enter marks for Chemistry out of 100:");
var x = prompt("Enter marks for Biology out of 100:");
var y = prompt("Enter marks for Mathematics out of 100:");
var z = prompt("Enter marks for Computer out of 100:");
if (
  !isNaN(Number(v)) &&
  !isNaN(Number(w)) &&
  !isNaN(Number(x)) &&
  !isNaN(Number(y)) &&
  !isNaN(Number(z))
) {
  var total = Number(v) + Number(w) + Number(x) + Number(y) + Number(z);
  var percentage = (total / 500) * 100;
  var grade;
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else if (percentage >= 40) {
    grade = "E";
  } else {
    grade = "F";
  }
  alert("Percentage: " + percentage + "%\nGrade: " + grade);
} else {
  alert("Please enter numbers!");
} */

// =========================Switch Case Questions=========================

/* // Question 17: Max of 2 numbers
var aa = prompt("Enter a number:");
var bb = prompt("Enter another number:");

if (!isNaN(Number(aa)) && !isNaN(Number(bb))) {
  switch (true) {
    case aa > bb:
      alert(aa + " is the greater number");
      break;
    case bb > aa:
      alert(bb + " is the greater number");
      break;
    default:
      alert("Equal numbers");
  }
} else {
  alert("Please enter numbers!");
} */

// =======================================================

/* // Question 20: Simple Calculator
var cc = prompt("Enter first number:");
var dd = prompt("Enter second number:");
var ee = prompt("Enter an operator (+, -, *, /):");

if (!isNaN(Number(cc)) && !isNaN(Number(dd))) {
  switch (ee) {
    case "+":
      alert(Number(cc) + Number(dd));
      break;
    case "-":
      alert(Number(cc) - Number(dd));
      break;
    case "*":
      alert(Number(cc) * Number(dd));
      break;
    case "/":
      alert(Number(cc) / Number(dd));
      break;
    default:
      alert("Invalid operator!");
  }
} else {
  alert("Please enter numbers!");
} */
