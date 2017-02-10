import xlrd
import json


def xls_to_json(filename):
    doc = xlrd.open_workbook(filename)
    sheet = doc.sheet_by_index(0)
    nrows = sheet.nrows
    municipios = []
    id = 0

    if not is_valid(sheet):
        print"Error en {0}, el archivo tiene un formato inesperado.".format(filename)
        return

    for row in range(3, nrows):
        cod_prov = sheet.cell_value(row, 1)
        cod_mun = sheet.cell_value(row, 2)
        name_mun = sheet.cell_value(row, 4)

        municipios.append({
            'id': str(cod_prov) + str(cod_mun),
            'nm': name_mun,
        })
        
    with open('../data/municipios.json', 'wb') as fp:
        json_string = json.dumps(municipios, ensure_ascii=False).encode('utf8')
        fp.write(json_string)


def is_valid(sheet):
    """Check if the given datasheet has the expected format."""
    if str(sheet.cell_value(1, 0)) != "CODAUTO":
        print "Se esperaba CPRO y se tiene {0}".format(sheet.cell_value(1, 0))
        return False
    if str(sheet.cell_value(1, 1)) != "CPRO":
        print "Se esperaba CPRO y se tiene [{0}]".format(sheet.cell_value(1, 1))
        return False
    if str(sheet.cell_value(1, 2)) != "CMUN":
        print "Se esperaba CMUN y se tiene {0}".format(sheet.cell_value(1, 2))
        return False
    if str(sheet.cell_value(1, 3)) != "DC":
        print "Se esperaba DC y se tiene {0}".format(sheet.cell_value(1, 3))
        return False
    if str(sheet.cell_value(1, 4)) != "NOMBRE":
        print "Se esperaba NOMBRE y se tiene {0}".format(sheet.cell_value(1, 4))
        return False
    return True

xls_to_json('16codmun.xlsx')
