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

//stolen from https://stackoverflow.com/questions/210717/using-jquery-to-center-a-div-on-the-screen
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
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
		$('[data-ezgal-id='+miniwinhere+']').after('<div id="ezgal-cat-inner" class="ezgal-hidden"><div id="ezgal-inner-left"><a href="'+$.ezgal.options[id].large[0]+'" class="ezgal-preview"><img id="ezgal-big-img" src="'+$.ezgal.options[id].large[0]+'"></a></div><div id="ezgal-inner-right"><h2 class="ezgal">'+$.ezgal.options[id].title+'</h2><div>'+$.ezgal.options[id].description+'</div><div class="ezgal-little-slides"><div class="ezgal-wrapper"><ul class="egzal-incatgallery">'+images_in_gallery+'</ul></div></div></div></div>');
		$('#ezgal-cat-inner').fadeIn(1000);

		$('#ezgal-big-img').on('load', function(){
			$('#ezgal-inner-left, #ezgal-inner-right').animate({height:Math.max(Math.ceil($('#ezgal-inner-left').height()), Math.ceil($('#ezgal-inner-right').height()))}, 1000);
		});


		//add bigger preview handlers
		$('.ezgal-little').on('click', function(){
			var id = $(this).attr('data-ezgal-little-id');
			$('#ezgal-inner-left').html('<a href="'+$.ezgal.options[id].large[0]+'" class="ezgal-preview"><img id="ezgal-big-img" src="'+$.ezgal.options[id].large[0]+'"></a></div>');

		$('#ezgal-big-img').on('load', function(){//repeadted code (engeeniering way, like tape, nails or WD40)
			$('#ezgal-inner-left, #ezgal-inner-right').css('height', 'inherit');
			$('#ezgal-inner-left, #ezgal-inner-right').animate({height:Math.max(Math.ceil($('#ezgal-inner-left').height()), Math.ceil($('#ezgal-inner-right').height()))}, 1000);
		});
		});
	});

}
function preview(){
	$('body').addClass('noscroll').append('<div class="ezgal-overlay"></div>').append('<div id="ezgal-preview-insider"><img src="img/big1.jpg"></div>');
	$('#container').addClass('noscroll');
	$('#ezgal-preview-insider img').center();
	$('.ezgal-overlay').on('click', function(){close_preview();});
	$('body').on('keydown', function(e){
		if (e.keyCode === 27){
			close_preview();
		}
		
	});
}

function close_preview(){
	$('body').removeClass('noscroll');
	$('#container').removeClass('noscroll');
	$('.ezgal-overlay,#ezgal-preview-insider').remove();
	$('body').off('keydown');
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

