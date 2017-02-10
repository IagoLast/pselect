import xlrd
import json


def xls_to_json(filename):
    doc = xlrd.open_workbook(filename, encoding_override='cp1252')
    sheet = doc.sheet_by_index(0)
    nrows = sheet.nrows
    municipios = []

    if not is_valid(sheet):
        print"Error en {0}, el archivo tiene un formato inesperado.".format(filename)
        return

    for row in range(1, nrows):
        code_prov = sheet.cell_value(row, 2)
        name_prov = sheet.cell_value(row, 3)
        if not code_prov or not name_prov:
            continue
        municipios.append({
            'id': code_prov,
            'nm': name_prov
        })
    with open('../data/provincias.json', 'wb') as fp:
        json_string = json.dumps(municipios, ensure_ascii=False).encode('utf8')
        fp.write(json_string)


def is_valid(sheet):
    """Check if the given datasheet has the expected format."""
    if str(sheet.cell_value(0, 2)) != "CPRO":
        print "Se esperaba CPRO y se tiene [{0}]".format(sheet.cell_value(0, 2))
        return False
    if str(sheet.cell_value(0, 3)) != "PROVINCIA":
        print "Se esperaba PROVINCIA y se tiene {0}".format(sheet.cell_value(0, 3))
        return False
    return True

xls_to_json('16codprov.xlsx')
