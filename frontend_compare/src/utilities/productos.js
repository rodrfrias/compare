/* Nosotros agregamos aqui la propiedad de ahorro para programar el frontend*/

const productosRaw = [
{
proveedor: {
    proveedor_nombre: "CONSTRUCTORA & COLOR",
    CUIT: "30-ZZZZZZZZ-Z",
    dirección_email: "info@constcolor.com.ar",
    teléfono: "011-4555-XXXX",
    condicion_fiscal: "Responsable Inscripto",
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
        precio_unitario_neto: 148760.33,
        iva_Incluido: true,
        alicuota_detectada: 21.0,
        precio_final: 180000.00,
        ahorro: 0
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
        ahorro: 500
    }
    ]
},
{
proveedor: {
    proveedor_nombre: "PINTURERÍAS DEL CENTRO S.A.",
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
        precio_unitario_neto: 144628.10,
        iva_Incluido: false,
        alicuota_detectada: 21.0,
        precio_final: 175000.00, // Precio alternativo de competencia
        ahorro: 5000
    }
    ]
},
{
    proveedor: {
      proveedor_nombre: "DISTRIBUIDORA REVESTIR S.R.L.",
      CUIT: "30-YYYYYYYY-Y",
      dirección_email: "mayorista@revestirsrl.com.ar",
      teléfono: "011-4777-YYYY",
      condicion_fiscal: "Responsable Inscripto",
      dirección: "Av. Pres. Hipólito Yrigoyen 4500",
      localidad: "Lanús",
      codigo_postal: "1824"
    },
    producto: [
      {
        id: 24, // ID único para este nuevo proveedor
        codigo: "LAT-EXT-PREM-20",
        categoria: "PINTURAS",
        nombre: "LATEX EXTERIOR PREMIUM",
        marca: "SHERWIN WILLIAMS",
        modelo: "LOXON",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 138842.98,
        iva_Incluido: true,
        alicuota_detectada: 21.0,
        precio_final: 168000.00, // Mejor precio que la competencia ($12.000 menos que el original)
        ahorro: 12000
      }
    ]
}
];

export default productosRaw;