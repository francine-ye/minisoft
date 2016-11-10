$(function() {
	
	$('ul.menu li').on('click', 'a', function(e) {
		e.preventDefault();
		var that = $(this);
		$.ajax({
			method: 'GET',
			url: 'partials/'+that.text().toLowerCase()+".html"
		}).done(function(data){
			$('.contenu').hide().html(data).fadeIn();
			that.parent().siblings('li').removeClass('active');
			that.parent().addClass('active');
		})
	})

	$('ul.menu li a').first().trigger('click'); // à vous de deviner ce que ce code fait...

	// http://api.icndb.com/jokes/random

	function chuck() {
		var couleurs = ['lightblue', 'yellow', 'grey'];
		var couleur_au_hasard = couleurs[Math.floor(Math.random() * couleurs.length)];
		$.getJSON('http://api.icndb.com/jokes/random').done(function(data) {
			$('.sidebar').hide().html(data.value.joke).fadeIn().css('background-color', couleur_au_hasard);
		})
	}
	chuck();
	setInterval(chuck, 5000);

})