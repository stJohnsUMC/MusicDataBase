$(document).ready(function(){
	
	$(".show").click(function(){
		$("#overlay").css("display","flex")
	})
	
	$(".close").click(function(){
		$("#overlay").css("display","none")
	})
	
	$(".add").click(function(){
		library.songs.push(new Song(
		$(".title").val(),
		$(".author").val(),
		$(".noCopies").val(),
		$(".arrangement").val(),
		$(".sf").val(),
		$(".tags").val().split(","),
		$(".time").val(),
		$(".dates").val().split(",")
		))
		//clear after use
		$(".title").val("");
		$(".author").val("");
		$(".noCopies").val("");
		$(".arrangement").val("");
		$(".sf").val("");
		$(".tags").val("");
		$(".time").val("");
		$(".dates").val("");
		console.log(library.songs)
	})
	
	$(".update").click(function(){
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
	})
	
	$(".remove").click(function(){
		$(".title").val(library.songs[library.songs.length-1].title);
		$(".author").val(library.songs[library.songs.length-1].author);
		$(".noCopies").val(library.songs[library.songs.length-1].copies);
		$(".arrangement").val(library.songs[library.songs.length-1].arr);
		$(".sf").val(library.songs[library.songs.length-1].specialFeatures);
		$(".tags").val(library.songs[library.songs.length-1].tags.join(", "));
		$(".time").val(library.songs[library.songs.length-1].time);
		$(".dates").val(library.songs[library.songs.length-1].years);
		
		library.songs.pop();
		console.log(library);
	})
})
function Song(title, author, noCopies, arrangement, sf, tags, time, years){
	this.title = title;
	this.author = author;
	this.copies = noCopies;
	this.arr = arrangement;
	this.specialFeatures = sf;
	this.tags = tags;
	this.time = time;
	this.years = years;
}

/*	
*/