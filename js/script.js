// Script
$(document).ready(function(){
	var forside = $('body#forside')
		function swapStyleSheet(sheet) {
		document.getElementById('stylesheet').setAttribute('href', sheet);
	}


	if (forside.length) {
		forside.prepend('<div id="style-selector">' +
		 '<h2>Vælg style:</h2>' +
		  '<button id="duttonknap">Dutton</button>' +
		   '<button id="brassøeknap">Brassøe</button>' +
		    '</div>');

		$('#brassøeknap').click(function(){
			swapStyleSheet('style/style.css');
		});
		$('#duttonknap').click(function(){
			swapStyleSheet('style/dutton.css');
		});
	}
});