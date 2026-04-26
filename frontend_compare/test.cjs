const fs = require('fs');
const path = require('path');
const pdfParseModule = require('pdf-parse');
const pdfParse = pdfParseModule.default ?? pdfParseModule;

async function testConversion() {
    const rutaPdf = path.resolve('./src/utilities/fase1/proveedorA_catalogo.pdf');
    
    const buffer = fs.readFileSync(rutaPdf);
    const data = await pdfParse(buffer);

    const csvContent = data.text
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n');

    const salida = `resultado_test.csv`;
    fs.writeFileSync(salida, csvContent, 'utf8');
    console.log(`✅ CSV guardado como: ${salida}`);
    console.log(`📄 Páginas procesadas: ${data.numpages}`);
    console.log(`📝 Primeras líneas:\n${csvContent.split('\n').slice(0, 10).join('\n')}`);
}

testConversion();