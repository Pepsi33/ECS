var express = require("express");
//post 请求处理模块
var bodyparser = require("body-parser");

var app = new express();
//处理post请求 将请求数据封装为json
app.use(bodyparser.urlencoded({
	extended: true
}));

//加载token模块
require("./token.js")(app);
require("./jssdk.js")(app);

var path = require("path");
var saticpath = path.join(__dirname,"../static");
app.use(express.static(saticpath));
app.listen(8000,function(){
	console.log("open http://127.0.0.1:8000");
})
