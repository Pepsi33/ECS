
module.exports = {
    entry:"./js/main.js",  //需要打包的文件
    output:{
        path:"dist/js/",//打包后的文件路径
        filename:"all.js"//打包后的文件名
    },
    module:{
        loaders:[
            {test:/\.scss$/ ,loaders:["style","css","sass"]},
            {test:/\.png$/,loaders:["url"]},
            {test:/\.gif$/,loaders:["url"]},
            {test:/\.jpg$/,loaders:["url"]}
        ]
    }
}
