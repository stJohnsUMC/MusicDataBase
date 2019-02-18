//https://api.myjson.com/bins/85pfe
let library;

$.ajax({
	url: 'https://api.myjson.com/bins/85pfe',
	success: function(result){
		console.log(result);
		library = result;
	}
})
