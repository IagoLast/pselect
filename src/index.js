var municipesData = require('../data/municipios');
var provincesData = require('../data/provincias');

// Expose data
Pselect.municipesData = municipesData;
Pselect.provincesData = provincesData;

function Pselect(options) {
  options = options || {};
  this.provinceDefaultText = options.provText || 'Provincia';
  this.municipeDefaultText = options.munText || 'Municipio';
}


Pselect.prototype.create = function (provincesElement, municipesElement) {
  this._provElement = provincesElement;
  this._munElement = municipesElement;

  // Add default options to each select
  _addOption(provincesElement, this.provinceDefaultText, -1, true);
  _addOption(municipesElement, this.municipeDefaultText, -1, true);

  for (var i = 0; i < provincesData.length; i++) {
    var province = provincesData[i];
    _addOption(provincesElement, province.nm, province.id);
  }

  // Callback when the selected province is changed
  provincesElement.addEventListener('change', this.__onProvinceSelected.bind(this));
};

Pselect.prototype.__onProvinceSelected = function (event) {
  var province = event.target.value;
  // Remove current municipe elements
  this._munElement.innerHTML = '';

  // Append new municipes list filtered by selected province
  for (var i = 0; i < municipesData.length; i++) {
    var municipe = municipesData[i];
    if (municipe.id.indexOf(province) === 0) {
      _addOption(this._munElement, municipe.nm, municipe.id);
    }
  }
};

function _addOption(parentElement, text, value, disabled) {
  var optionElement = document.createElement('option');
  optionElement.value = value;
  optionElement.innerHTML = text;
  if (disabled) {
    optionElement.setAttribute('selected', '');
    optionElement.setAttribute('disabled', '');
  }
  parentElement.appendChild(optionElement);
}

module.exports = Pselect;
