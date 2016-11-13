
require(["$","bt","fl","fc","hash"],function($,bt,fl,fc,hash){

    $(function(){
    	(function(){
    		var oBody = $('body');
    		var x = parseInt(Math.random()*17+1);
    		oBody.css({
    			backgroundImage:"url(img/image"+x+".jpg)"
    		})
	    	oBody.on('click',function(e){
	    		var num = parseInt(Math.random()*17+1);
	    		if(e.target==oBody[0]){
	    			oBody.css({
		    			backgroundImage:"url(img/image"+num+".jpg)"
		    		})
	    			return false;
	    		}
	    	})

    	})()
    	
    	
    	require(["hash"],function(hash){
			//刷新停留当前页面
			hash.refresh();
		})
    })
    
    
});