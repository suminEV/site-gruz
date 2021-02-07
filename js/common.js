// Настройка слайдера slick
$(function() {
		$('.top-slider').slick({
		autoplay: true,
		slidesToShow: 1,
		autoplaySpeed: 10000,
		draggable: false,
		prevArrow: '<i class="fa fa-caret-left slick-prev" aria-hidden="true"></i>',
		nextArrow: '<i class="fa fa-caret-right slick-next" aria-hidden="true"></i>'
	});

	$('.counter').counterUp({
		delay: 3,
		time: 500
	});
});


// Инициализация анимации wow.js
new WOW().init();


// Настройка Google Maps
function initMap() {
	var uluru = {lat: 49.946723, lng: 36.260517};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru,
		zoomControl: true,
		streetViewControl: true,
		fullscreenControl: true,
		disableDefaultUI: true
	});
	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		// icon: iconBase + 'parking_lot_maps.png'
		// icon: 'Здесь может быть прямая ссылка на изображение .png или .ico'
	});
}


// Функция которая делает плавный скроллинг к элементу
jQuery(function($){
	// Функция которая делает плавный скроллинг к элементу с id или class указанным в атрибуте href ссылки
	$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = "#" + $(this).attr('href'); // возьмем содержимое атрибута href. В первых скобках указываем или решетку (#) или точку (.), это необходимо для того чтобы указать как искать элемент для перехода, по id или class.
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 20 }, 500); // анимируем скроллинг к элементу scroll_el
		}
		return false; // выключаем стандартное действие
	});
});


// Функция которая делает плавный скроллинг к началу страницы
jQuery(function($){
	$('#go_to_top').click( function(){ // ловим клик по ссылке с id - go_to_top
		$('html, body').animate({ scrollTop: 0 }, 500); // анимируем скроолинг к верху страницы
		return false; // выключаем стандартное действие
	});
});


// Появление кнопки вверх при скроллинге
$(window).scroll(function(){
	if ($(this).scrollTop() > 300) {
		$('#go_to_top').addClass("go_to_top_visible");
	} else {
		$('#go_to_top').removeClass("go_to_top_visible");
	}
});


// Добавление стилей к верхнему меню при пролистывании
$(window).scroll(function(){
	if ($(this).scrollTop() > 300) {
		$('.top-section').addClass("top-section-scroll");
	} else {
		$('.top-section').removeClass("top-section-scroll");
	}
});


// Функция добавления активного меню
$('#li1-menu').addClass("active");

$(window).scroll(function(){
	// console.log("scroll");
	let li1 = $('#start').offset().top;
	let li2 = $('#our-advantages').offset().top - 100;
	let li3 = $('#characteristics').offset().top - 100;
	let li4 = $('#services').offset().top - 100;
	let li5 = $('#our-company').offset().top - 100;
	let li6 = $('#map').offset().top - 100;
	let li7 = $('#reviews').offset().top - 300;

	let scrollPosition = $(window).scrollTop();

	$('#li1-menu').removeClass("active");
	$('#li2-menu').removeClass("active");
	$('#li3-menu').removeClass("active");
	$('#li4-menu').removeClass("active");
	$('#li5-menu').removeClass("active");
	$('#li6-menu').removeClass("active");
	$('#li7-menu').removeClass("active");

	if (scrollPosition >= li1 && scrollPosition < li2) {
		$('#li1-menu').addClass("active");
	} else if (scrollPosition >= li2 && scrollPosition < li3) {
		$('#li2-menu').addClass("active");
	} else if (scrollPosition >= li3 && scrollPosition < li4) {
		$('#li3-menu').addClass("active");
	} else if (scrollPosition >= li4 && scrollPosition < li5) {
		$('#li4-menu').addClass("active");
	} else if (scrollPosition >= li5 && scrollPosition < li6) {
		$('#li5-menu').addClass("active");
	} else if (scrollPosition >= li6 && scrollPosition < li7) {
		$('#li6-menu').addClass("active");
	} else if (scrollPosition >= li7) {
		$('#li7-menu').addClass("active");
	}
});


// Настройка мобильного меню
function openNav() {
	document.getElementById("mobyle-menu").style.width = "100%";
}
function closeNav() {
	document.getElementById("mobyle-menu").style.width = "0%";
}
$('#mobyle-menu a').bind('click', function(){
	closeNav();
});


// Модальное окно
var modal = document.getElementById('myModal');
var elem = document.getElementById('modal-img');
elem.onclick = function(){
	modal.style.display = "block";
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
	modal.style.display = "none";
}