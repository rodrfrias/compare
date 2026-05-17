/* Nosotros agregamos aqui la propiedad de ahorro para programar el frontend*/

const productosRaw = [

{
proveedor: {
    proveedor_nombre: "PEDRO S.A",
    CUIT: "30-XXXXXXXX-X",
    dirección_email: "ventas@pinturascentro.com.ar",
    teléfono: "0800-XXX-PINTA",
    condicion_fiscal: "Responsable Inscripto",
    dirección: "Av. Corrientes 1234",
    localidad: "CABA",
    codigo_postal: "1043"
    },
    producto: [
    {
        id: 14, // ID único para distinguir esta variante de proveedor
        codigo: "LAT-EXT-PREM-20",
        categoria: "PINTURAS",
        nombre: "LATEX EXTERIOR PREMIUM",
        marca: "SHERWIN WILLIAMS",
        modelo: "LOXON",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 1000.0,
        iva_Incluido: true,
        alicuota_detectada: 21.0,
        precio_final: 1210.0,
    
    }
    ]
},
{
proveedor: {
    proveedor_nombre: "SIMON S.A",
    CUIT: "30-ZZZZZZZZ-Z",
    dirección_email: "info@constcolor.com.ar",
    teléfono: "011-4555-XXXX",
    condicion_fiscal: "Monotributista",
    dirección: "Ruta 2 Km 40",
    localidad: "Berazategui",
    codigo_postal: "1884"
    },
    producto: [
    {
        id: 4,
        codigo: "LAT-EXT-PREM-20",
        categoria: "PINTURAS",
        nombre: "LATEX EXTERIOR PREMIUM",
        marca: "SHERWIN WILLIAMS",
        modelo: "LOXON",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 0,
        iva_Incluido: true,
        alicuota_detectada: 21.0,
        precio_final: 1180.0,
    },
    {
        id: 3,
        codigo: "ACC-PIN-PRO-4",
        categoria: "ACCESORIOS",
        nombre: "PINCEL PROFESIONAL N°4",
        marca: "EL GALGO",
        modelo: "SERIE ORO",
        presentacion: "UNIDAD",
        precio_unitario_neto: 12396.69,
        iva_Included: true,
        alicuota_detectada: 21.0,
        precio_final: 15000.00,
    
    }
    ]
},
];

export default productosRaw;