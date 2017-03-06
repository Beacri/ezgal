var coords=[];
function EZgal_recalculate(){
//kalkulacja gdzie jest pole dopokazywania zawartości
	var last;
$('.gallery-category').each(function(a,b){
	// /console.log(b.offsetTop);
	coords[a] = [b.offsetTop, b.offsetTop - last]
	last = b.offsetTop;
	//console.log(coords[a]);
});
return coords;
}

function EZgal_init(id, option=null){
	var contrainer = $(id);
	//console.log(option);
	$.each(option, function(k,v){
		//console.log(k + " | " + v);
		if (v.categoryimg) {catimg = v.categoryimg;}else{catimg = v.thumbnail[0];}
/*		$.each(v, function(k,v){
			console.log(k + " | " + v);
		});*/
		$(id).append('<div class="gallery-category" data-ezgal-id="'+k+'" title="'+v.title+'"><img src="'+catimg+'"></div>');
	});
	
	$(window).resize(coords = EZgal_recalculate());
	$('.gallery-category').on('click', function(){
		$('#ezgal-cat-inner').hide(500, function(){$(this).remove()});
		var id = $(this).attr('data-ezgal-id');
		console.log(id + ' ' + coords[id][1]);
		miniwinhere = coords.length;
	for (var i = id; i <= coords.length-1; i++) {
		if (coords[i][1]>0) {
			miniwinhere = i-1;
			break;
		}
	};

	var images_in_gallery = '';
	$(option[id].thumbnail).each(function(k,v){
		images_in_gallery +='<img src="'+v+'">';
		console.log(k + ' '+v);
	});
	$('[data-ezgal-id='+miniwinhere+']').after('<div id="ezgal-cat-inner"><div id="ezgal-inner-left"><img src="'+option[id].thumbnail[0]+'"></div><div id="ezgal-inner-right"><h2 class="ezgal">'+option[id].title+'</h2><div>'+option[id].description+'</div><div class="ezgal-little-slides">'+images_in_gallery+'</div></div></div>');


	});

}


$(document).ready(function(){

	var options = 
	[
	{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat2.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat3.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
			{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat4.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
			{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat5.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
			{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat6.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 2',
		'description'   : 'opis',
		'thumbnail' : ['img/cat7.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat2.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat3.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
			{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat4.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
			{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat5.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
			{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat6.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 2',
		'description'   : 'opis',
		'thumbnail' : ['img/cat7.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	}
	];

	EZgal_init('#gallery', options);


});

