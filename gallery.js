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
		$(id).append('<div class="gallery-category" data-ezgal-id="'+k+'"><img src="'+catimg+'"><br>'+v.title+'</div>');
	});
	$('.gallery-category').on('click', function(){
		var id = $(this).attr('data-ezgal-id');
		console.log(coords[id]);
	for (var i = id; i <= coords.length; i++) {
		
	};


	});
	$(window).resize(EZgal_recalculate());
	//EZgal_recalculate();
}


$(document).ready(function(){

	var options = 
	[
	{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
		{
		'title' : 'Fajerwerki 1',
		'description'   : 'opis',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 2',
		'description'   : 'opis',
		'thumbnail' : ['img/cat1.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	}
	];

	EZgal_init('#gallery', options);


});

