var pselectDataMunicipes = require('../data/municipios');
var pselectDataProvinces = require('../data/provincias');

function Pselect(options) {
  options = options || {};
  this._provData = options.provinces || pselectDataProvinces;
  this._munData = options.municipes || pselectDataMunicipes;
  this.provinceDefaultText = options.provText || 'Provincia';
  this.municipeDefaultText = options.munText || 'Municipio';
}

// Expose data
Pselect.municipesData = pselectDataMunicipes;
Pselect.provincesData = pselectDataProvinces;

Pselect.prototype.create = function (provincesElement, municipesElement) {
  this._provElement = provincesElement;
  this._munElement = municipesElement;

  // Add default options to each select
  _addOption(provincesElement, this.provinceDefaultText, -1, true);
  _addOption(municipesElement, this.municipeDefaultText, -1, true);

  // Add all possible provinces
  this._provData.forEach(function (province) {
    _addOption(provincesElement, province.nm, province.id);
  });

  // Callback when the selected province is changed
  provincesElement.addEventListener('change', this.__onProvinceSelected.bind(this));
};

Pselect.prototype.__onProvinceSelected = function (event) {
  var province = event.target.value;
  // Remove current municipe elements
  this._munElement.innerHTML = '';
  // Append new municipes list filtered by selected province
  this._munData
    .filter(function (mun) {
      return mun.id.startsWith(province);
    })
    .forEach(function (mun) {
      _addOption(this._munElement, mun.nm, mun.id);
    }.bind(this));
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
