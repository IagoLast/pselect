var psProto = {
	create: create,
	init: init,
}

function PS(options) {
	return Object.create(psProto).init(options);
}

function init(options) {
	options = options ? options : {};
	this.provinces = options.provinces || pselectDataProvinces;
	this.municipes = options.municipes || pselectDataMunicipes;
	this.provinceDefaultText = options.provText || 'Provincia';
	this.municipeDefaultText = options.munText || 'Municipio';

	return this;
}

function create(provincesElement, municipesElement) {
	var self = this;
	_addOption(provincesElement, this.provinceDefaultText, -1, true);
	_addOption(municipesElement, this.municipeDefaultText, -1, true);

	this.provinces.forEach(function (province) {
		_addOption(provincesElement, province.nm, province.id);
	});

	provincesElement.addEventListener("change", function () {
		// Remove current municipe elements
		municipesElement.innerHTML = '';
		var province = provincesElement[provincesElement.selectedIndex].value;
		// Append new possible municipes filtered by province
		self.municipes.filter(function (mun) {
			return mun.pv == province;
		}).forEach(function (mun) {
			_addOption(municipesElement, mun.nm, mun.id);
		});
	});
}

function _addOption(parent, text, value, disabled) {
	var opt = document.createElement('option');
	opt.value = value;
	opt.innerHTML = text;
	if (disabled) {
		opt.setAttribute('selected', '');
		opt.setAttribute('disabled', '');
	}
	parent.appendChild(opt);
}
