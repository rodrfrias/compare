/* Nosotros agregamos aqui la propiedad de ahorro para programar el frontend*/

const productosRaw = [
{
    proveedor: {
    proveedor_nombre: "PEDRO S.A",
    condicion_fiscal: "Monotributista",
    },
    producto: [
    {
        id: 14,
        nombre: "LATEX EXTERIOR PREMIUM",
        marca: "SHERWIN WILLIAMS",
        modelo: "LOXON",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 0,
        alicuota_detectada: 21.0,
        precio_final: 1700.0, // ← precio efectivo para RI: $1.700
    },
    ],
},
{
    proveedor: {
    proveedor_nombre: "SIMON S.A",
    condicion_fiscal: "Monotributista",
    },
    producto: [
    {
        id: 4,
        nombre: "LATEX EXTERIOR PREMIUM",
        marca: "SHERWIN WILLIAMS",
        modelo: "LOXON",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 0,
        alicuota_detectada: 21.0,
        precio_final: 1600.0, // ← precio efectivo para RI: $1.600
    },
    ],
},
{
    proveedor: {
    proveedor_nombre: "LAURA S.A",
    condicion_fiscal: "Responsable Inscripto",
    },
    producto: [
    {
        id: 21,
        nombre: "LATEX EXTERIOR PREMIUM",
        marca: "SHERWIN WILLIAMS",
        modelo: "LOXON",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 1363.64, // ← precio efectivo para RI: $1.363,64 (neto)
        alicuota_detectada: 21.0,
        precio_final: 1650.0,
    },
    ],
},
];
export default productosRaw;