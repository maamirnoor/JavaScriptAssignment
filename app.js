// chapter no 1

 Q1 alert("welcome to javascript");
// Q2
alert("Error! Please enter a valid password");

// Q3
alert("Welcome to JS Land...\n Happy coding!");
//Q4

   alert("Welcome to JS land...");
   alert("Happy coding! \n Prevent this page from creating additional dailogue");

//Q5

alert("Hello... i can run JS through my  web browser console");

console.log("Hello... i can run JS through my  web browser console");


//         Chapter no 2

// Q1
var username;

//Q2
var myName = "Muhammad Aamir Noor";

// Q3

var message = "Hello World";
alert(message);

//Q4

var name = "Jhone Doe";
var age = "15 years old";
var qualification = "Certified Mobile Application Development";

alert(name);
alert(age);
alert(qualification);

// Q5

var pizza ="pizza";
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");


//Q6

var email ="maaamirnoor096@gmail.com";
alert("my email address is " + email);

// Q7
var book = "A smarter way to learn JavaScript";
alert(book);

// Q8

document.write("Yah! i can write HTML content through JavaScript");

// Q9 
var task9="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(task9); 


//Chapter No 3 

//  Q1

var age = "25";
alert("i am " + age + " years old");


// Q2

var visit = "14";
alert("You have visited this site " + visit + " times");


// Q3

var birthYear = "1994";
document.writeln("My birthday year is " + birthYear);
document.writeln(" \n Data type of my declare variable is number");


// Q4


var name = "John Doe";
var productTitle = "T-Shirt(s)";
var quantity = "5";
document.writeln(name + " ordered " + quantity + productTitle + " on XYZ clothing store");

//      Chapter No 4 

// Q1
var num;

// Q2

// legal variable


var num;
var _num1;
var $num;
var numPlus;
var Num;

// illegal variable

// var 1num;
// var num 1;
// var 10;
// var  1stname;
// var -name;


//  Q3

var name = "numbers";
var $name = "$";
var _name = " _"
document.write("<h1>Rules for naming JS variables</h1>");
document.write("\n  Variable names can only contain, " + name + " , " + $name +" and " +  _name  + ". For example $my_1stVariable <br>");
var name = "letter";
document.writeln("\n Variables must begin with a " + name + ", " + $name + " or " + _name + ". For example $name, _name or name <br>");
var caseSensitive = "sensitive";
document.writeln(" Variable names are case " + caseSensitive + "<br>");
var keyWord = "keywords";
document.writeln("Variable names should not be JS " +keyWord);

//      Chapter no 5

// Q1

var num1 = 3;
var num2 = 5;
var result;
result=num1+num2;
document.writeln("Sum of " + num1 + " and " + num2 + " is " + result);


// Q2
//  Subtract
var num1 = 3;
var num2 = 5;
var result;
result=num1-num2;
document.writeln("Subtract of " + num1 + " and " + num2 + " is " + result);

// Multiplication

var num1 = 3;
var num2 = 5;
var result;
result=num1*num2;
document.writeln("<br>Multiplication of " + num1 + " and " + num2 + " is " + result);

// Division

var num1 = 3;
var num2 = 5;
var result;
result=num1/num2;
document.writeln("<br> Division of " + num1 + " and " + num2 + " is " + result);


// Modulus

var num1 = 3;
var num2 = 5;
var result;
result=num1%num2;
document.writeln("<br> Modulus of " + num1 + " and " + num2 + " is " + result);


//      Q3


var value;
document.writeln("<h1>Value after variable declaration is " +value + "</h1> <br>");
value=5;
document.writeln("Initial value: " + value + "<br>");
value++;
document.writeln("Value after increment is: " + value + "<br>");
value+=7;
document.writeln("Value after addition is: " + value + "<br>");
value--;
document.writeln("Value after decrement is: " + value + "<br>");
value%=3;
document.writeln("The reminder is: " + value);


//     Q4 

var ticket = 600;
document.writeln("Total cost to buy 5 tickets to a movie is " + ticket*5 + "PKR ");

//  Q5
var num = 5;
for(var i = 1; i<=10; i++){
    
    document.writeln("5 x " + i + "=" + num*i);
    document.writeln("<br>");
}

//     Q6
var celTemp = "25";
var farTemp = "70";
// document.writeln(celTemp + "<sup>0</sup>C is " + farTemp + "<sup>0</sup>F");
celTemp = (farTemp - 32)* 5/9;
document.writeln(celTemp +"<sup>0</sup>C is" + farTemp + "<sup>0</sup>F <br>");
farTemp = (celTemp * 9/5) + 32;
document.writeln(farTemp +"<sup>0</sup>F is " + celTemp + "<sup>0</sup>C");


// Q7
var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;
var totalCost;
document.writeln("<h1>Shopping Cart</h1><br>");
document.writeln("Price of item 1 is " + item1 + "<br>");
document.writeln("Quantity of item 1 is " +quantity1 + "<br>");
document.writeln("Price of item 2 is " + item2 + "<br>");
document.writeln("Quantity of item 1 is " +quantity2 + "<br>");
document.writeln("Shipping Charges" + shippingCharges +"<br><br><br>");
totalCost = (item1*quantity1) + (item2*quantity2) + shippingCharges;
document.writeln("Total cost of  your order is " + totalCost);


// Q8
var totalMarks = 980;
var obtMarks = 804;
var percentage;
percentage = (obtMarks/totalMarks)*100;

document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Obtained Marks: " + obtMarks + "<br>");
document.writeln("Percentage: " + percentage + "%<br>");

// Q9


 var $us = "10";
 var riyal = "25";
 var totalCurrency;
 totalCurrency = ($us*104.80) + (riyal*28);
 document.writeln("Total Currency in PKR: " + totalCurrency);


// Q10


 var num = 10;
 var result;
 result=((num+5)+(num*10))/2;
 document.writeln("Total Calculation" + result);



// Q11
 var currentYear = "2020";
 var birthYear   = "1994";
 var age;
 age =currentYear-birthYear;
 document.write("<h1>Age Calculator</h1>");
 document.write("Current Year: " + currentYear + "<br>");
 document.write("Birth Year: " + birthYear + "<br>");
 document.write("Your age is: " + age);

//      Q12

var radius = 20;
var  circumference;
var pi = 3.142;
var area;
circumference = 2 * pi * radius;
area = pi* radius * radius;
document.writeln("<h1>The Geometrizer</h1>");
document.writeln("Radius of a circle: " + radius + "<br>");
document.writeln("The circumference is: " + circumference + "<br>");
document.writeln("The area is: " + area + "<br>");

// Q13
document.writeln("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br><br><br><br>");
var favSnack = "lays";
var currentAge = 15;
var maxAge = 65;
var amountSnack = 3;
document.writeln("Favourite Snack: " + favSnack + "<br>");
document.writeln("Current age: " + currentAge + "<br>");
document.writeln("Estimated Maximum Age: " + maxAge + "<br>");
document.writeln("Amount of snack per day: " + amountSnack + "<br>");
var total = maxAge-currentAge;
total*=amountSnack;
document.writeln("You will need " + total + " lays to last you until the ripe old age  of " + maxAge);


// Chapter No  6 to 9

// Q1

var a=10;
document.writeln("Result: <br>");
document.writeln("The value of a is " + a +"<br>");
document.writeln("..................................<br><br><br><br>");
document.writeln("the value of a is: "+ ++a + "<br>");
document.writeln("Now the value of a is: "+ a+ "<br><br><br><br>");
document.writeln("the value of a is: "+ a++ + "<br>");
document.writeln("Now the value of a is: "+ a+ "<br><br><br><br>");
document.writeln("the value of  a is: " + --a +  "<br>");
document.writeln("Now the value of a is: "+ a + "<br><br><br><br>");
document.writeln("the value of  a is: " + a-- +  "<br>");
document.writeln("Now the value of a is: "+ a + "<br><br><br><br>");



// Q2

var a = 2, b = 1; 

var result = --a - --b + ++b + b--; 
      //   1 - 0   +  1  +  1  result = 3; a = 1 , b = 0
//Explain the output at each stage: 

--a; 
// 0 a=0;
    --a - --b; 
//   -1  -  -1  a = -1, b = -1;
    --a - --b + ++b; 
//  -2  -  -2 +  -1  a = -2 , b = -1 
    --a - --b + ++b + b--; 
//  -3  -  -2 +  -1 +  -1    a = -3, b = -2  

document.write(" a is: " + a + "<br>");
document.write(" b is: " + b + "<br>");
document.write(" result is: " + result + "<br>");


// Q3
var name =prompt("Enter your Name");
document.write("Welcome " + name);


// Q4,  Q5
var num = +prompt("Enter the number you want to generate the table");
for(var i = 1; i<=10; i++){
    if(num===5){
        document.writeln("5 x " + i + "=" + 5*i);
        document.writeln("<br>");
    }
    else{
        document.writeln( num + " x " + i + "=" + num*i);
        document.writeln("<br>");   
    }
}


//   Q6
var subjectName1 = prompt("Enter subject name");
var subjectName2 = prompt("Enter subject name");
var subjectName3 = prompt("Enter subject name");

var totalMark = 100;
var obtMarks1 = +prompt("Enter the obtained Marks of "+subjectName1);
var obtMarks2 = +prompt("Enter the obtained Marks of "+subjectName2);
var obtMarks3 = +prompt("Enter the obtained Marks of "+subjectName3);
var percentage1,percentage2,percentage3;
var totalPercentage;

percentage1 = (obtMarks1/totalMark)*100;
percentage2 = (obtMarks2/totalMark)*100;
percentage3 = (obtMarks3/totalMark)*100;

document.write("<table><tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr></table>");
document.write("<table><tr><td>"+subjectName1+"</td><td>"+totalMark+"</td><td>"+obtMarks1+"</td><td>"+percentage1+"%</td></tr></table>");
document.write("<table><tr><td>"+subjectName2+"</td><td>"+totalMark+"</td><td>"+obtMarks2+"</td><td>"+percentage2+"%</td></tr></table>");
document.write("<table><tr><td>"+subjectName3+"</td><td>"+totalMark+"</td><td>"+obtMarks3+"</td><td>"+percentage3+"%</td></tr></table>");
totalMark=300;
var totalObt = +obtMarks1+(+obtMarks2)+(+obtMarks3);
totalPercentage =(totalObt/totalMark)*100;
document.write("<table><tr><td></td><td>"+totalMark+ "</td><td>"+totalObt+"</td><td>"+totalPercentage+"%</td></tr></table>");

// 9 TO 11


// Q1
var city=prompt("Enter the city name");
if(city==="karachi"||city==="Karachi"){
    document.write("<h1>Welcome to city of lights</h1>");
}
else{
    document.write("<h1>Welcome to the " + city + " city</h1>");
}
//Q2
var gender = prompt("Enter your gender");
if(gender==="male"){
    document.writeln(" Good Morning Sir.");
}
else{
    document.writeln(" Good Morning Ma'am.");
}


// Q3
var signal = prompt("Enter the  traffic signal");
if(signal==="red"){
    document.writeln("Must Stop!");
}
else if(signal==="yellow"){
    document.writeln("Ready to Move!");
}
else{
    document.writeln("Move now!");
}

//  Q4

var fuel=prompt("Check the remaining fuel in car and enter the liter");
if(fuel<0.25){
    document.writeln("Please refill the fuel in your car");
}
else{
    document.writeln("Enjoy The Journey");
}


// Q5

//  a) Condition is true

var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
}


//  b) condition is not true
var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
}


//   c) condtion 2 and 4 is true. condition 2 is equal and condition 4 is also equal because of the 1st condition and 3rd condition increment
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
} if (c === 14) {
    alert("condition 4 is true");
}

//  d) cost is equals
var materialCost = 20000;
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}


//  e). This condition is true 
if (true){ 
    alert("True"); 
} 
if (false)
{ 
    alert("False"); 
}

//  e) condition is true

if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}



// Q6

document.writeln("<h1> Marks Sheet</h1>");
var subject1 = +prompt("Enter the obtained marks");
var subject2 = +prompt("Enter the obtained marks");
var subject3 = +prompt("Enter the obtained marks");
var totalMarks = 300;
var percentage, obtMarks;
obtMarks = +subject1 + (+subject2) + (+subject3);
percentage = (obtMarks / totalMarks) * 100;
if (percentage >= 80) {
    document.write("Total Marks: 300 <br>");
    document.write("Obtained Marks: " + obtMarks + "<br>");
    document.write("Percentage: " + percentage + "<br>");
    document.write("Grade: A-one <br>");
    document.write("Remarks: Excellent <br>");
}
else if (percentage >= 70 && percentage<80) {
    document.write("Total Marks: 300 <br>");
    document.write("Obtained Marks: " + obtMarks + "<br>");
    document.write("Percentage: " + percentage + "<br>");
    document.write("Grade: A <br>");
    document.write("Remarks: Good <br>");
}
else if (percentage >= 60 && percentage<70) {
    document.write("Total Marks: 300 <br>");
    document.write("Obtained Marks: " + obtMarks + "<br>");
    document.write("Percentage: " + percentage + "<br>");
    document.write("Grade: B <br>");
    document.write("Remarks: You need to improve <br>");
}
else {
    document.write("Total Marks: 300 <br>");
    document.write("Obtained Marks: " + obtMarks + "<br>");
    document.write("Percentage: " + percentage + "<br>");
    document.write("Grade: Fail <br>");
    document.write("Remarks: Sorry <br>");
}


//  Q7

var secretNumber = 7;
var guessNumber = +prompt("Enter the secret number");
if(guessNumber===secretNumber){
    document.write("Bingo! Correct answer");
}
else if(guessNumber===secretNumber+1){
    document.writeln("Close enough to the correct answer");
}
else{
    document.writeln("you have choose incorrect number");
}


//  Q8

var num=+prompt("Enter the number which is divisble for 3 like 6,9,12 and so on");
if(num%3===0){
    document.writeln("Yes it can divisble by 3");
}
else{
    document.writeln("this number can't be divisble by 3");
}

// Q9

var num = +prompt("Enter the number to check it even or odd");
if(num%2===0){
    alert("the number is even");
}
else{
    alert("the number is odd");
}


//  Q10
var temperature = +prompt("Enter the temperature");
if(temperature>40){
    alert("It is too hot outside");
}
else if(temperature>30 && temperature<40){
    alert("The Weather today is Normal");
}
else if(temperature>20 && temperature<30){
    alert("“Today’s Weather is cool");
}
else if(temperature>10 && temperature<20){
    alert("OMG! Today’s weather is so Cool.");
}
else{
    alert("you are not belong to sindh");
}



//  Q11


var num1 =+prompt("Enter 1st number");
var  num2 =+prompt("Enter 2nd number");
var result;
var operator =prompt("Enter the operatorion operator you want to perform");
if(operator==='+'){
    result=+num1+(+num2);
    document.writeln("Result of two number addition "+result);
}
else if(operator==='-'){
    result=num1-num2;
    document.writeln("Result of two number Subtraction "+result);
}
else if(operator==='*'){
    result=num1*num2;
    document.writeln("Result of two number Multiplication "+result);
}
else if(operator==='/'){
    result=num1/num2;
    document.writeln("Result of two number Division "+result);
}
else if(operator==='%'){
    result=num1%num2;
    document.writeln("Result of two number Reminder "+result);
}
else{
    document.writeln("you choose incorrect operator");
}


//  CHapter No 12 to 13
//  Q1
var character =prompt("Enter any one Character");
if(character>=65 && character<=90){
    alert(character+" is in UpperCase")
}
else if(character>=97 && character<=122){
    alert(character+ " is lowercase");
}
else if(character>=48 && character<=57){
    alert(character+ " is Number");
}
else{
    alert(character+" is a special character")
}

// Q2
var num1 =prompt("Enter 1st Number");
var num2 =prompt("Enter 2nd Number");
if(num1>num2){
    alert(num1+" Number 1 is larger");
}
else if(num1===num2){
    alert("both numberss are equal");
}
else{
    alert(num2+" Number 2 is larger " +num1);
}



//   Q3
var num =prompt("Enter any number");
if(num>=0){
    alert(num +" is positive number");
}
else if(num===0){
    alert(num +" is zero number");
}
else{
    alert(num +" is negative number");
}


//  Q4
var vowel =prompt("Enter any character");
if(vowel==='a' || vowel==='e' || vowel ==='i' || vowel ==='o' || vowel==='u' || vowel==='A' || vowel==='E' || vowel ==='I' || vowel ==='O' || vowel==='U'){
    alert(vowel+" is  a vowel");
}
else{
    alert(vowel + " is consonants");
}


//  Q5
var password = prompt("Enter your password");
var enterPassword=prompt("Enter your password");
if(password===enterPassword){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}


// Q6

var greeting; 
var hour = 13;
 if (hour < 18){ 
     greeting = "Good day";
     alert(greeting);
  } 
  else {
  greeting = "Good evening"; 
  alert(greeting);
} 

// Q7

var time=prompt("Enter time  24 hours clock format like: 1900 = 7pm");
if(time>=0000 && time<1200){
    alert("Good Morning!");
}
else if(time>=1200 && time<1700){
    alert("Good Afternoon!");
}
else if(time>=1700 && time<2100){
    alert("Good evening!");
}
else if(time>=2100 && time<2359){
    alert("Good Night!");
}
else{
    alert("You have entered  invalid time");
}


// Chapter 14 to 16

// task no 1 
var studentName=[""];
// task no 2 
var studentName = new Array("");
// task no 3
var stringArray = ["Muhammad","Aamir","Noor"];
// task no 4
var numberArray = [2,3,4,5,6];
// task no 5 
var booleanArray = [true,false];
// task no 6 
var mixArray = [" ", "Muhammad Aaimr Noor", 786, true];

// task no 7 
var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.writeln("<h1>Qualification</h1><br><br><br>");
for(var i = 0;i<qualification.length;i++){
    document.writeln((i+ 1) +") " + qualification[i] + "<br>");
} 
// task no 8
var studentName = ["Aamir","Noor","Ali"];
var studentScore = [320,230,480];
var totalMarks=500;
var percentage = [];
for(var i = 0; i<studentName.length;i++){
    percentage[i] = (studentScore[i]/totalMarks)*100;
    document.writeln("Score of " + studentName[i] + " is " + studentScore[i] + " . Percentage: " + percentage[i]+ " %. " +"<br>");
}


// task no 9
var colorName = ["Red", "Green","Blue"];
document.writeln("Colors before addition "+colorName +"<br>");

var userColor = prompt("what color you wants to add to the beginning");
// unshift is used for add an element at the beginning of an array
colorName.unshift(userColor);
document.writeln("Colors after addition at the begining "+colorName +"<br>");

userColor = prompt("what color you wants to add to the end");
// push is used for add an element at the end of an array
colorName.push(userColor);
document.writeln("Colors after addition at the end "+colorName+ "<br>");
// unshift is used for add an element at the beginning of an array
colorName.unshift("purple","gray");
document.writeln("two more Colors addition at the beginning "+colorName+ "<br>");
// unshift is used for removing an element at the beginning of an array
colorName.shift();
document.writeln("After Removing one Color at the beginning "+colorName+ "<br>");
colorName.pop();
document.writeln("After Removing one Color at the end "+colorName+ "<br>");

var indexNo = prompt("which index you wants to add a color");
userColor = prompt("what color you wants to add to the index number");
// splice is used to add and remove the element anywhere in the array

colorName.splice(indexNo,0,userColor);
document.writeln("Colors after addition at the user index "+colorName +"<br>");

indexNo  = prompt("which index you wants to remove a color");
userColor = prompt("how many colors you wants to delete");
colorName.splice(indexNo, userColor)
document.writeln("Colors after removing at the user index "+colorName +"<br>");

// task no 10
var studentScore = [320,230,480,120];
document.writeln("Score of students before sorting: " + studentScore + "<br>")
studentScore.sort();
document.writeln("Score of students after sorting: "+studentScore);

// task no 11
var cityNames = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.writeln("cities list: " + cityNames + " <br> ");
var copyCities = cityNames.slice(2,4);
document.writeln("Selected cities list: " + copyCities);

// task no 12
var array=["this "," is "," my ", " cat "];
document.writeln("Array: " + array + "<br>");
var string = array.join(' ');
document.writeln("String: " + string + "<br>");

// task no 13
var devices = [ ];
devices.unshift("keyboard");
devices.splice(1,0,"mouse");
devices.splice(2,0,"printer");
devices.push("monitor");
document.writeln("Devices: " + devices + "<br><br><br><br><br>");
for(var i = 0; i<devices.length;i++){
    document.writeln("Out: <br>");
    document.writeln(devices[i]+"<br>");
}

// task no 14

var devices = [];
devices.unshift("keyboard");
devices.splice(1,0,"mouse");
devices.splice(2,0,"printer");
devices.push("monitor");
document.writeln("Devices: " + devices + "<br><br><br><br><br>");
for(var i = devices.length-1; i>=0;i--){
    document.writeln("Out: <br>");
    document.writeln(devices[i]+"<br>");
}

// TASK NO 15

var mobile = ["Apple","Samsung","Motorolla","Nokia","Sony", "Haier"];

document.writeln("<br><br><br>");
document.writeln("<select>");
for(var i = 0;i<mobile.length;i++){
    document.writeln("<option>" + mobile[i] + "</option>");
}
document.writeln("</select>");


// Chapter start from 17 to 20
// Chapter No 17 to 20

// Q1
var array =[[1],[2],[3]];


// Q2

var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

// Q3

for(var i=1; i<=10;i++){
    document.writeln(i+"<br>");
}

// Q4

var num = prompt("Enter the number you want to generate the table");
var len = prompt("Enter the length of you ant to generate");
document.writeln("Multiplication table of "+num + "<br>");
document.writeln("Length "+ len + "<br>");
for(var i = 1; i<=len; i++){   
        document.writeln( num + " x " + i + "=" + num*i + "<br>");
}



// Q5

var fruits=["apple", "banana", "mango", "orange", "strawberry"];
document.writeln(fruits[0]+"<br>");
document.writeln(fruits[1]+"<br>");
document.writeln(fruits[2]+"<br>");
document.writeln(fruits[3]+"<br>");
document.writeln(fruits[4]+"<br>");

for(var i=0; i<fruits.length;i++){
    document.writeln("Element at index " + i + " is " + fruits[i]+"<br>");
}
// Q6

// a)
document.writeln("Counting: ");
for(var i=1; i<=15;i++){
    document.writeln(i);
}
document.writeln("<br>");
document.writeln("Reverse: ");
// b)
for(var i=10; i>=1;i--){
    document.writeln(i);
}

// c)
document.writeln("<br>");
document.writeln("Even: ");

for(var i=0;i<=20;i++){
    document.writeln(i);
    i+=1;
}

document.writeln("<br>");
document.writeln("Odd: ");

for(var i=1;i<=20;i++){
    document.writeln(i);
    i+=1;
}
// d)
document.writeln("<br>");
document.writeln("Series: ");

for(var i=2;i<=20;i++){
    document.writeln(i+"k,");
    i+=1;
}

// Q7
var a =["cake","apple pie","cookie","chips","patties"];
var flag = false;
var x = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

for(var i=0;i<=a.length;i++){
    if(x === a[i]){
        flag = true;
        document.write(x + " is available at index " + i + " in our bakery");
    }
}

if(flag == false){
    document.write("We are sorry. "+ x +"  is not available in our bakery");
}



// Q8

var a = [24,53,78,91,12];
var largest = a[0];
document.writeln("Array Items");
for(var i = 0;  i<a.length;i++){
    document.writeln(a[i]);
    if(largest<a[i]){
    largest=a[i];
    }
}
document.writeln("<br>The Largest element is "+largest);


// Q9
var a = [24,53,78,91,12];
var smallest = a[0];
document.writeln("Array Items");
for(var i = 0;  i<a.length;i++){
    document.writeln(a[i]);
    if(smallest>a[i]){
    smallest=a[i];
    }
}
document.writeln("<br>The smallest element is "+smallest);



// Q 10

for(var i=1; i<=100;i++){
    if(i%5===0){
        document.writeln(i+",");
    }
}

