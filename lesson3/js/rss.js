

window.onload = function () {
	
	var indicator = document.getElementById("indicator");
	indicator.style.visibility = "hidden";
	

};



function getFeed(){
	var indicator = document.getElementById("indicator");
	indicator.style.visibility = "visible";
    var width = screen.width;
	var FEED_URL = "http://www.3dnews.ru/news/rss/";

	 
	 $(document).ready(function () {
		    $.ajax({
		        type: "GET",
		        url: FEED_URL,
		        dataType: "xml",
		        success: xmlParser
		    });
		});

		function xmlParser(xml) {

			indicator.style.display = "none";
		    $(xml).find("item").each(function () {
		    	  var url =  $(this).find("enclosure").attr('url')

		        $("#rssContent").append('<div class="feed"><div class="image"><img src=' + url + ' width=' + width + 'px /><div class="title"> Title:' + $(this).find("title").text() 
		        		+ '</div><br><div class="description">Desc: ' + $(this).find("description").text() + '</div></div>');
		       

		    });

		}

}