// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var matchFound = false;
//  for (var i = 0; i <= 4; i++);
//  if ( cityToCheck === cleanestCities[i]) {
//  matchFound = true;
//  alert("It's one of the cleanest cities");
//  break;
//  }

// if (matchFound === false) {
//  alert("It's not on the list");
//  }

// if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//      alert("Come to our tryout!");
//      }
//      else {
//      alert("Come to our cookout!");
//     }
//  var x = prompt("Where does the Pope live?");
//  if (x === "Vatican") {
//  alert("Correct!");
//  }
//  if (x !== "Vatican") {
//  alert("Wrong answer");
//  }

// var y =prompt("where is sary live")
// if (y ==="karachi"){
// alert("correct!");
// }
// else{
// alert("Incorrect!");
// }

// var lucky = prompt("Enter your ticket no:");
// if (yourTicketNumber !== 487208) {
//     alert("Better luck next time.");
     
//     }
//  var correctAnswer = prompt("Vatican");
//  if (x === correctAnswer) {
//  score++;
//  userIQ = "genius";
//  alert("Correct!");
//  }

// var x = prompt("Where does the Pope live?");
//  if (x === "Vatican") {
//  alert("Correct!");
// }
// var numberOfCats = prompt("How many cats?");
//  var tooManyCats = numberOfCats ;

// var question = "Your species?";
//  var defaultAnswer = "human";
//  var spec = prompt(question, defaultAnswer);

// alert("2 plus 2 equals " + "2" + "2");

// const nam=[];
// const mystu=new Array();
// const str=["str1","str2","str3"];
// const nums=[2,4,6,7,8];
// var bool=new Array();

// bool=[true,false];
// alert("bool is "+bool[1]);

// const networks=["Jazz","Zong","Ufone","Telenor"];

//8
// const ed_U=["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"];
// document.write("Qualifications:<br/>");

// for(var i=0;i<ed_U.length;i++){
// document.write(i+1 +") "+ed_U[i]+"<br/>");

// }

//9
// const movies=new Array();
// movies.push("Avengers:Age of Ultron");
// movies.push("Spectre");
// movies.push("Jurrasic World");
// movies.push("Inside Out");
// document.write("Top Movies of 2015:<br/>");
// for (let index = 0; index < movies.length; index++) {

//     document.write(index+1 +") "+movies[index]+"<br/>");

// }
// document.write("Length of Array:"+ movies.length);

//10
// var cars=["Audi","Volvo","Ford","Lamborghini"];
// var index=cars.indexOf("Audi");
// document.write("First index of array "+index+"<br/>");
// document.write("Car at first index "+cars[0]+"<br/>");
// var index1=cars.indexOf("Lamborghini");
// document.write("Last index of array "+index1+"<br/>");
// document.write("Car at last index "+cars[3]+"<br/>");

//11
// var stdName=["Hasan","Anas","Hamza"];
// var obtMarks=[400,380,410];

// document.write("Score of Hasan is "+obtMarks[0]+" Percentage:"+(obtMarks[0]/500)*100+"<br/>");
// document.write("Score of Anas is "+obtMarks[1]+" Percentage:"+(obtMarks[1]/500)*100+"<br/>");
// document.write("Score of Hamza is "+obtMarks[2]+" Percentage:"+(obtMarks[2]/500)*100+"<br/>");

//12
var colours=["Red","Green ","Blue"];

// var first_Col=prompt("What colour you want to add in the beginning?");
// colours.unshift(first_Col);
// document.write("part a: "+colours+"<br/>");

// var last_Col=prompt("Color you want to add in the end?");
// colours.push(last_Col);
// document.write("part b: "+colours+"<br/>");

// var last_Col1=prompt("Color you want to add in the start?");
// colours.unshift(last_Col1);
// document.write("part c: "+colours+"<br/>");

// var last_Col2=prompt("Another Color you want to add in the start?");
// colours.unshift(last_Col2);
// document.write("part c: "+colours+"<br/>");

// colours.shift();
// document.write("part d: "+colours+"<br/>");

// colours.pop();
// document.write("part e: "+colours+"<br/>");

// var user=prompt("On which index you want to add colour? ie(0,1,2,3..");
// var cont_Ent=prompt("Which Colour?");

// colours.splice(user,0,cont_Ent);
// document.write("part e: "+colours+"<br/>");

//13
// var scores=["320 ","230","480","120"]
// scores.sort();
// document.write("Ordered Scores "+scores+"<br/>");

//14
// var fruits=["strawberry","apple","orange","banana"]
// fruits.sort();
// document.write("Sorted Fruits "+fruits+"<br/>");


//15
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(2,5);

// document.write("<br /><br />Cities list:<br />" + cities);
// document.write("<br /><br />Selected cities list:<br />" + selectedCities);


//16
// var arr=["This","is","my","cat"];
// var text=arr.join(" ");
// document.write("Joined array:"+text);

//17
// var computerDevices = [];

// computerDevices.push("keyboard");
// computerDevices.push("mouse");
// computerDevices.push("printer");
// computerDevices.push("monitor");

// document.write("<h2>Devices:<br />" + computerDevices + "</h2>");

// for (var i = 0; i < computerDevices.length; i++){
//     document.write("<br/>Out:<br />" + computerDevices[i]);
// }


//18
// document.write("<h2>Devices:<br />" + computerDevices + "</h2>");

// for (var i = computerDevices.length - 1; i >= 0; i--){
//     document.write("<br/>Out:<br />" + computerDevices[i]);
// }



//19
// phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

// var str;

// for (var i = 0; i < phoneManufacturers.length; i++){
//     if (i == 0){
//         str= "<select id='phman' name='phman'>" + "<option value='" + phoneManufacturers[i].toLowerCase() + "'>" + phoneManufacturers[i] + "</option>"
//     }
//     else{
//         str = str + "<option value='" + phoneManufacturers[i].toLowerCase() + "'>" + phoneManufacturers[i] + "</option>"
//     }
// }
// str = str + "</select>"

// console.log(str);

// document.write("<br /><br />" + str);

//20
// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];

// for (var i = 0; i < 5; i++) {
//     for(var j=0;j<2;j++){
//         document.write(activities[i][j]);
//     }
//     document.write("<br/>");
// }

// console.table(activities);