/*require('./instantHello');
var goodbye=require('./talk/goodbye');
var talk=require('./talk');
var question=require('./talk/question');


talk.intro();
talk.hello("komal");

var answer=question.ask("what is the meaning of life?");
console.log(answer);
goodbye();
*/
require('./api/data/dbconnection.js').open();
var express=require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
var routes=require('./api/routes');

app.set('port',3000);
app.use(function(req,res,next){
console.log(req.method,req.url);
next();
});
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',routes);
/*app.get('/',function(req,res){
console.log("welcome to the homepage!!");
res
.status(200)
.sendFile(path.join(__dirname,'public','index.html'));
});
app.get('/json',function(req,res){
    console.log("welcome to the json!!");
    res.status(200);
    res.json({"jsonData":true});
    });
    app.get('/file',function(req,res){
        console.log("welcome to the file!!");
        res.sendFile(path.join(__dirname,'app.js'));
        });*/
var server=app.listen(app.get('port'),function(){
    var port=server.address().port;
    console.log("Magic happens on port"+port);
}
);
console.log("I'm first");