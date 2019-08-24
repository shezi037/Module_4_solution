/*
Assignment Solution MOdule_4:
Expected output:
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

window.onload = function (e) {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var msg = "";

for (var i = names.length-1;i>=0; i--) {

 var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j')
   msg= "Hello " + (names[i]);
  
  else 
    msg= "Good Bye" + (names[i]);

  console.log(msg);
  
}

}
