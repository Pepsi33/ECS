var express = require("express");

var app = new express();

//加载token模块
require("./token")(app)

var path = require("path");
var saticpath = path.join(__dirname,"../");
app.use(express.static(saticpath));
app.listen(80,function(){
	console.log("open http://127.0.0.1:80");
})
