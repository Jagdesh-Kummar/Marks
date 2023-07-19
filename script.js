
// }
// Create a program that print the grade according to your marks
// 100 => A+1
// 80 => A+1
// 80 > A
// 70 > B
// 60 > C
// 50 > D
// 33 > fail
// use the prompt
// }

let marks = prompt("Enter your marks",);
if(marks > 100){
    alert("Write your correct marks")
}
else if (marks >= 90 && marks <= 100)
{
    alert("Your grade is A+1");
}
else if (marks >= 80)
{
    alert("Your grade is A+1")
}
else if (marks >= 70)
{
    alert("Your grade is A")
}
else if (marks >= 60)
{
    alert("Your grade is B")
}
else if (marks >= 50)
{
    alert("Your grade is C")
}
else if (marks < 50 && marks > 33)
{
    alert("Your grade is D")
}
else if (marks < 33){
    alert("You are fail");
}
else{
alert("Write your correct marks");
}



