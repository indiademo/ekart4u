var exp=require("express")
var bp=require("body-parser")

var PORT = process.env.PORT || 5000
var path = require('path');
app=exp()
app.use(bp.json())




app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/ok', function(req, res) {
    var data = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
    res.json({
        status:'200',
        message:'sucess',
        data:data
    });
});
app.listen(PORT,function(){
    console.log("2244")
})



