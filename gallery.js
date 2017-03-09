$.ezgal = {'coords':[], 'options':[]};
function EZgal_recalculate(){
//kalkulacja gdzie jest pole dopokazywania zawartości
var last;
$('.gallery-category').each(function(a,b){
	$.ezgal.coords[a] = [b.offsetTop, b.offsetTop - last];
	last = b.offsetTop;

});
return $.ezgal.coords;
}

function EZgal_init(id, options){
	$.ezgal.options = options;
	var contrainer = $(id);

	$.each($.ezgal.options, function(k,v){
		if (v.categoryimg) {catimg = v.categoryimg;}else{catimg = v.thumbnail[0];}
		$(id).append('<div class="gallery-category" data-ezgal-id="'+k+'" title="'+v.title+'"><img src="'+catimg+'"><div class="ezgal-cat-title"><span>'+v.title+'<hr class="ezgal-title-underline"></span></div></div>');
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
		miniwinhere = $.ezgal.coords.length-1;// convert 1-based to 0-based
			id++;
		for (var i = id; i <= $.ezgal.coords.length-1; i++) {
			if ($.ezgal.coords[i][1]>0) {
				miniwinhere = i-1;
				break;
			}
		};
		id--;

		var images_in_gallery = '';

		$($.ezgal.options[id].thumbnail).each(function(k,v){
			images_in_gallery +='<li class="ezgal-little" data-ezgal-little-id="'+k+'"><img src="'+v+'"></li>';
		});
		$('[data-ezgal-id='+miniwinhere+']').after('<div id="ezgal-cat-inner" class="ezgal-hidden"><div id="ezgal-inner-left"><img src="'+$.ezgal.options[id].large[0]+'"></div><div id="ezgal-inner-right"><h2 class="ezgal">'+$.ezgal.options[id].title+'</h2><div>'+$.ezgal.options[id].description+'</div><div class="ezgal-little-slides"><div class="ezgal-wrapper"><ul class="egzal-incatgallery">'+images_in_gallery+'</ul></div></div></div></div>');
		$('#ezgal-cat-inner').fadeIn(1000);

		$('#ezgal-inner-left, #ezgal-inner-right').height(Math.max(Math.ceil($('#ezgal-inner-left').height()), Math.ceil($('#ezgal-inner-right').height())));

		//add bigger preview handlers
		$('.ezgal-little').on('click', function(){
			var id = $(this).attr('data-ezgal-little-id');
			$('#ezgal-inner-left').html('<img src="'+$.ezgal.options[id].large[0]+'"></div>');

		});
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
		'description'   : '<div>asdfasd sa fasd f <br><br><br><br><br><br>asf asd f<br><br>asfasf<br><br></div><div>asdfasd sa fasd f <br><br><br><br><br><br>asf asd f<br><br>asfasf<br><br></div><div>asdfasd sa fasd f <br><br><br><br><br><br>asf asd f<br><br>asfasf<br><br></div>',
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

