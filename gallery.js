$.ezgal = {'coords':[]};
function EZgal_recalculate(){
//kalkulacja gdzie jest pole dopokazywania zawartości
var last;
$('.gallery-category').each(function(a,b){
	$.ezgal.coords[a] = [b.offsetTop, b.offsetTop - last];
	last = b.offsetTop;

});
return $.ezgal.coords;
}

function EZgal_init(id, option=null){
	var contrainer = $(id);
	$.each(option, function(k,v){
		if (v.categoryimg) {catimg = v.categoryimg;}else{catimg = v.thumbnail[0];}
		$(id).append('<div class="gallery-category" data-ezgal-id="'+k+'" title="'+v.title+'"><img src="'+catimg+'"></div>');
	});
	
	$(window).resize(function(){$.ezgal.coords = EZgal_recalculate();});
	$.ezgal.coords = EZgal_recalculate();

	$('.gallery-category').on('click', function(){
		if($('#ezgal-cat-inner')){
			$('#ezgal-cat-inner').fadeOut(500, function(){
				$(this).remove();
			});

		}

		var id = $(this).attr('data-ezgal-id');
			//console.log("coords: "+$.ezgal.coords);
			console.log("Kliknięte: "+id);
		miniwinhere = $.ezgal.coords.length-1;// convert 1-based to 0-based
			//console.log("miniwinhere startowe: "+miniwinhere);
			id++;
		for (var i = id; i <= $.ezgal.coords.length-1; i++) {
			//console.log('i: ' + i);
			if ($.ezgal.coords[i][1]>0) {
				//console.log('wybrane: '+i);
				miniwinhere = i-1;
				break;
			}
		};
		id--;
		console.log("miniwinhere: " + miniwinhere);
		var images_in_gallery = '';
		console.log("Kliknięte: "+id);
		$(option[id].thumbnail).each(function(k,v){
			images_in_gallery +='<img src="'+v+'">';
		});
		$('[data-ezgal-id='+miniwinhere+']').after('<div id="ezgal-cat-inner" class="ezgal-hidden"><div id="ezgal-inner-left"><img src="'+option[id].large[0]+'"></div><div id="ezgal-inner-right"><h2 class="ezgal">'+option[id].title+'</h2><div>'+option[id].description+'</div><div class="ezgal-little-slides"><div class="ezgal-wrapper"><div class="ezgal-wrapper-right"></div>'+images_in_gallery+'<div class="ezgal-wrapper-right"></div></div></div></div></div>');
		$('#ezgal-cat-inner').fadeIn(1000);

		$('#ezgal-inner-left, #ezgal-inner-right').height(Math.max(Math.ceil($('#ezgal-inner-left').height()), Math.ceil($('#ezgal-inner-right').height())));


	});

}


$(document).ready(function(){

	var options = 
	[
	{
		'title' : 'Fajerwerki 1',
		'description'   : 'To jest zwykły opi spierwszego elementu w kategroi i jest tak samo dobry jak przypadkowe lorem ipsum ściagnięte z internetu a pisałem to szybciejniż googlałem. (to widać)',
		'categoryimg' :'img/cat1.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/big1.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 2',
		'description'   : 'opis',
		'categoryimg' :'img/cat2.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 3',
		'description'   : 'opis',
		'categoryimg' :'img/cat3.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 4',
		'description'   : 'opis',
		'categoryimg' :'img/cat4.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 5',
		'description'   : 'opis',
		'categoryimg' :'img/cat5.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 6',
		'description'   : 'opis',
		'categoryimg' :'img/cat6.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 7',
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
		'title' : 'Fajerwerki 8',
		'description'   : 'opis',
		'categoryimg' :'img/cat2.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 9',
		'description'   : 'opis',
		'categoryimg' :'img/cat3.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 10',
		'description'   : 'opis',
		'categoryimg' :'img/cat4.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 11',
		'description'   : 'opis',
		'categoryimg' :'img/cat5.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 12',
		'description'   : 'opis',
		'categoryimg' :'img/cat6.jpg',
		'thumbnail' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	},
	{
		'title' : 'Fajerwerki 23',
		'description'   : 'opis',
		'thumbnail' : ['img/cat7.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'large' : ['img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg', 'img/250.jpg'],
		'tags'  : ['All']
	}
	];

	EZgal_init('#gallery', options);


});

