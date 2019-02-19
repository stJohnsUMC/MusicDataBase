$(document).ready(function(){
	
	$(".test").click(function(){
		let myJson = JSON.stringify(library);
		$.ajax({
			url:"https://api.myjson.com/bins/85pfe",
			type:"PUT",
			data:myJson,
			contentType:"application/json; charset=utf-8",
			dataType:"json",
			success: function(data, textStatus, jqXHR){
				console.log(data);
			}
		}); 
		$.ajax({
			url: 'https://api.myjson.com/bins/85pfe',
			success: function(result){
				console.log(result);
				library = result;
			}
		})

	})
})