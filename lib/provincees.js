var PVES = (function () {
	var self = {};
	self.provSelect = '#prov-select';
	self.munSelect = '#mun-select';
	self.defaultProvText = "Provincia";
	self.defaultMunText = "Municipio";

	function psAjax(url, success){
		$.ajax({
			url: url,
			type:'get',
			dataType: 'json',
			success: success
		});
	}

	self.init = function() {
		if (typeof jQuery == 'undefined') {
			console.error("Error: Jquery is not defined!");
			return;
		}

		psAjax( 'provincias/index.json', function( json ) {
			$(self.provSelect).append($('<option>').text(self.defaultProvText).attr('value', 00));
			$(self.munSelect).append($('<option>').text(self.defaultMunText).attr('value', 00));
			$.each(json, function(number, item) {
				$(self.provSelect).append($('<option>').text(item.name).attr('value', item.code));
			});
		});

		$(self.provSelect).on('change', function() {
			var jsfile = this.value;
			url = 'provincias/' + jsfile + '.json',
			psAjax(url, function( json ) {
					var municipes = json.municipios;
					$(self.munSelect).empty();
					$.each(municipes, function(number, item) {
						$(self.munSelect).append($('<option>').text(item.name).attr('value', item.code));
					});
			});
		});
	};
	return self;
}());




