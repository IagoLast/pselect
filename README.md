# PSelect.js

Libreria javascript para rellenar selects con las provincias y municipios Españoles de forma 

## Instalacion

###CommonJs

	npm install --save pselect.js

```javascript
var Pslect = require('pselect.js');
```

###Script

Copiar el [archivo js](https://github.com/IagoLast/pselect/blob/master/dist/pselect.js) que se encuentra en la carpeta `dist`.
Este archivo expone una variable global `Pselect`.

## Uso

```html
<html>
	<head>
		<meta charset="UTF-8">
		<title>Ejemplo Select provincias Españolas.</title>
		<script type="text/javascript" src="dist/pselect.js"></script>
	</head>

	<body>
		<h2>Seleccione provincia</h2>
		<select id="ps-prov"></select>
		<select id="ps-mun"></select>
	</body>
	<script>
	var prov = document.getElementById('ps-prov');
	var mun = document.getElementById('ps-mun');
	// Crear el selector pasandole los elementos del dom.
	new Pselect().create(prov, mun);
	</script>

</html
```

Recuerda utilizar el operador `new` para crear un nuevo contexto.

## Parametros opcionales

A la función `Pselect()` se le puede pasar un diccionario con parametros opcionales para permiten personalizar el comportamiento.

* **provinceDefaultText:** El texto que se muestra por defecto en el select de provincias.
* **municipesDefaultText:** El texto que se muestra por defecto en el select de municipios.
## Listado de datos
El objet Pselect incluye dos propiedades a traves de las cuales se puede acceder a los datos de las provincias y los municipios.


```javascript
const Pselect = require('pselect.js');

Pselect.provincesData[0]  // {id: "04", nm: "Almería"}

Pselect.municipesData[0] // {id: "01002", nm: "Amurrio"}
```

# Origien de los datos

Los datos se obtienen directamente de [la web del instituto nacional de estadística](http://www.ine.es/jaxi/menu.do?type=pcaxis&path=%2Ft20%2Fe245%2Fcodmun%2F&file=inebase&L=0) donde se pueden descargar dos hojas de cálculo que contienen los códigos de las provincias y los municipios de España.

Estos datos son transformados a `json` utilizando un dos scripts en python que se encuentran en la carpeta parser junto a las hojas de calculo utilizadas.

Si te interesan solamente los archivos `json` puedes encontrarlos en la carpeta `data`.
