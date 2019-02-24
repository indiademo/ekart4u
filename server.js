var exp=require("express")
var bp=require("body-parser")

var PORT = process.env.PORT || 5000
var path = require('path');
app=exp()
app.use(bp.json())




app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT,function(){
    console.log("2244")
})



