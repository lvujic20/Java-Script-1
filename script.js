alert("Hello!")
alert("This is my first Java script project!")
prompt ("Try my love calculator by entering your and crush name!");

var love = Math.random() * 100;
love = Math.floor(love) + 1;

if (love > 80) {
    alert("Your love score is " + love + "%" + ". You are in love!"); 
}  else {
    alert("Your love score is " + love + "%.");
}
 
console.log(love);