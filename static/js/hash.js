define(["$"],function($){

		function hash(){
		/**
		 * 添加路由
		 * url ： 路由地址
		 * callback ： 触发这个路由所执行的回调函数
		 */

		this.refresh = hashchange;


		//监听地址栏中的 hash 改变
		$(window).on("hashchange",hashchange);

		function hashchange(){
			//把 hash 值总的 # 号开头的字符给去掉，剩下的就是需要的值
			var url = location.hash.replace(/^#\//i,"");

			console.log(url)

			if(url == ''){

				$(".wrap").load("html/Home.html");

			}else{
				$(".wrap").empty().load("html/"+url+".html");
			}
		}
	}
	
	return new hash();

})