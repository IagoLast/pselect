var provinceCssSelector = '.ps-prov';
var municipeCssSelector = '.ps-mun';
var provinceDefaultText = 'Provincia';
var municipeDefaultText = 'Municipio';


$().ready(function() {
	// Set default text
	$(provinceCssSelector).append($('<option>').text(provinceDefaultText).attr('value', -1));
	$(municipeCssSelector).append($('<option>').text(municipeDefaultText).attr('value', -1));

	// Populate province select
	$.each(provinces, function(number, province) {
		$(provinceCssSelector).append($('<option>').text(province.name).attr('value', province.code));
	});

	// When selected province changes, populate municipe select
	$(provinceCssSelector).change(function() {
		var selectedProvince = this.value;
		$(municipeCssSelector).empty();
		$(municipeCssSelector).append($('<option>').text(municipeDefaultText).attr('value', -1));
		$.each(municipes, function(number, municipe) {
			if (municipe.cod_prov == selectedProvince) {
				$(municipeCssSelector).append($('<option>').text(municipe.name).attr('value', number.toString()));
			}
		});
	});
});
