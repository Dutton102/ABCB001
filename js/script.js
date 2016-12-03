// Script
$(document).ready(function(){
	var forside = $('body#forside');
	var Brassøe = $('#brassøeknap');
	var Dutton = $('#duttonknap');
		function swapStyleSheet(sheet) {
		document.getElementById('stylesheet').setAttribute('href', sheet);
	}


	if (forside.length) {
		forside.prepend('<div id="style-selector">' +
		 '<h2>Vælg style:</h2>' +
		  '<button id="duttonknap">Dutton</button>' +
		   '<button id="brassøeknap">Brassøe</button>' +
		    '</div>');

		Brassøe.click(function(){
			swapStyleSheet('style/style.css');
		});
		Dutton.click(function(){
			swapStyleSheet('style/dutton.css');
		});
	}
});