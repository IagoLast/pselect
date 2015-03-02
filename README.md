PSelect.js
==========

Libreria javascript para rellenar selects / dropdowns html con las provincias y municipios Españoles de forma automática.

## Uso

- Añadir Jquery y PSelect.js a la web.
```html
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script type="text/javascript" src="lib/pselect.min.js"></script>
```
- Añadir los selects a la web donde se mostraran las provincias y los municipios. (Por defecto se buscan aquellos con id="prov-select","mun-select")
```html
<select id="prov-select"></select>
<select id="mun-select"></select>
```
- Ejecutar PS.init() para inicializar los selects. 
```html
<script type="text/javascript">
	PS.init();
</script>
```

##Personalización.
Antes de ejecutar init() se pueden personalizar algunos parametros de PVES:

```html
  <script type="text/javascript">
  	PS.provSelect = '#prov-select'; //Selector por defecto para provincia.
  	PS.munSelect = '#mun-select'; //Selector por defecto para municipio.
  	PS.defaultProvText = "Provincia"; //Texto por defecto en el selector de provincia.
  	PS.defaultMunText = "Municipio"; //Texto por defecto en el selector de municipio.
  </script>
```



