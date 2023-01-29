/* stack
function:push,pop,peek,length*/ 
var letters=[];  // this is or stack

var words="racecar";

var rword ="";
// put letter of word into stack 
for(var i=0;i<words.length;i++){
    letters.push(words[i]);
}
// pop off the stack in reverse order
for(var i=0;i<words.length;i++){
    rword+= letters.pop();
}
if(rword===words){
console.log("yes")
}else{
    console.log("no")
}