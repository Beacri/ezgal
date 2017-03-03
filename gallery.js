function EZgal_init(id, option=null){
	var contrainer = $(id);
	console.log(option);
	$.each(option, function(k,v){
		console.log(k + " | " + v);
		$(id).append('<div> k </div>');
	});

}

function EZgal_debug(id, option=null){
	if ($(id).length>0){var exists=' istnieje'}else{var exists = ' nie istnieje'}
		console.log($(id).length);
	console.log("Wybrany selector - "+ id + exists);

}


$(document).ready(function(){

var options = 
		[
			{
			'title' : 'Fajerwerki 1',
			'description'   : 'opis',
			'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
			'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
			'tags'  : ['All']
			},
			{
			'title' : 'Fajerwerki 1',
			'description'   : 'opis',
			'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
			'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
			'tags'  : ['All']
			}
			];

EZgal_init('#gallery', options);
// EZgal_debug('#gallery');

});

