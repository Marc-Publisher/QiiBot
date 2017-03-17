window.onload = (function(){
	var url = window.location.href;
	var urlArray = url.split("/");
	var len = urlArray.length;
	var id = parseInt((urlArray[len-1]).replace("#",""));
	var nextURL = "https://qiibee.com/app/feed/"+(id-1).toString()+"#";
	var selector = "a.post-like-btn";
	setTimeout(function(){
		//CLICK
		function like(){
			var a = $(selector);
			a[0].click();
			setTimeout(function(){window.location=nextURL;},3000);
		}
		function checkForExists(){
			var ex = $(selector).length != 0;
			if(ex)like();
			else setTimeout(checkForExists, 700);
		}
		checkForExists();
	},8000);
});
