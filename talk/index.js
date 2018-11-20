var hello=function(name){
console.log("hello"+name);
};

var intro=function(){
    console.log("hello i'm index.js");
};

module.exports={
    hello:hello,
    intro:intro
};