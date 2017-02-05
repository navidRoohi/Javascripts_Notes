
// atom-ternjs   plugin adds auto method suggestion. Make sure active the Node from the
// packages > atom-ternjs > Node too... enjoy...

/*
var NavidObject ={
  name: "navid",
  age: "37"
};
var newPerson = NavidObject; // we just made refrence to NavidObject
// basically we did not make the copy , we just made the refrence to NavidObject
newPerson.name = "ali";

console.log(newPerson);    // { name: 'ali', age: '37' }
console.log("-----");
console.log(NavidObject);  // { name: 'ali', age: '37' }
*/

/*
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);
console.log(obj.employees);
console.log(obj.employees[2]);
console.log(obj.employees[2].firstName);
*/

/*
console.log(12 == "12");  // true
console.log(12 === "12"); // false
console.log(12 === 12);   // true
console.log(12 == 12);    // true
*/

/*
var nameA = "navid roohi broojeni";
var nameB = "navid";

if(nameA == nameB){
  console.log(nameA == nameB);
}

if(nameA.localeCompare(nameB)){ // OR nameA.localeCompare(nameB) == 0
  console.log("nameA.localeCompare(nameB) === 0");
*/

/*
var myArray = ["navid", "jack", 32, 3.4];
console.log(myArray);

myArray.push("new");

var myIndex = myArray.indexOf("navid");
myArray.splice(myIndex,1); // remove an elment from array. Here: first elment  splice(p1, p2) - > p1 => index   \\  p2 => 1 means true

for (var i=0 ; i < myArray.length ; i++){
  console.log(myArray[i]);
}
*/

/*
var Navid = {
  printFirstName: function(){
    console.log(this === Navid);
  }
};
Navid.printFirstName();

function printNothing(){
  console.log(this === global);
}
printNothing();
console.log("------");
console.log(global);
/*

/*  // build simple server
// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/“);
*/

/*
function getOrder(num){
  console.log("this is an order" + num);
}
function setOrder(){
  return 5;
}
getOrder(setOrder());
*/

/*
var sys = require('sys');
sys.puts("hello");
*/
