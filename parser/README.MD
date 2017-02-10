# Parser de provincias y municipios españoles.

Los archivos `.xlsx` contenidos en esta carpeta se obtiene directamente de [la web del instituto nacional de estadística](http://www.ine.es/jaxi/menu.do?type=pcaxis&path=%2Ft20%2Fe245%2Fcodmun%2F&file=inebase&L=0):

En esta carpeta se incluyen dos archivos python que transforman estos documentos en los `.json` que se encuentran en la carpeta `data`.

Para ejecutar estos archivos es necesario tener xlrd instalado. Puede instalarse con `pip` ejecutando:

	pip install xlrd
