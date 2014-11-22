Provincees
==========

Libreria javascript para rellenar selects / dropdowns html con las provincias y municipios Españoles de forma automática.

## Uso
0. Añade la carpeta provincias a tu servidor para que sea accesible desde la web.

1. Añade Jquery y provincees.js a la web.
```html
<script type="text/javascript" src="lib/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="lib/provincees.min.js"></script>
```
2. Añade los selects a la web con sus id correspondientes.
```html
<select id="prov-select"></select>
<select id="mun-select"></select>
```
3. Ejecuta 	PVES.init() para inicializar los selects. 
```html
<script type="text/javascript">
	PVES.init();
</script>
```

##Personalización.
Antes de ejecutar init() puedes personalizar algunos parametros de PVES:

```html
  <script type="text/javascript">
  	PVES.provSelect = '#prov-select'; //Selector por defecto para provincia.
  	PVES.munSelect = '#mun-select'; //Selector por defecto para municipio.
  	PVES.defaultProvText = "Provincia"; //Texto por defecto en el selector de provincia.
  	PVES.defaultMunText = "Municipio"; //Texto por defecto en el selector de municipio.
  </script>
```


