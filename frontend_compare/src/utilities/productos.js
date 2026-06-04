/* Nosotros agregamos aqui la propiedad de ahorro para programar el frontend*/

const productosRaw = [
{
    proveedor: {
    proveedor_nombre: "PEDRO S.A",
    condicion_fiscal: "Monotributista",
    },
    producto: [
    {
        id: 1,
        codigo: "1-04245-20",
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
        id: 2,
        codigo: "1-04245-20",
        nombre: "LATEX EXTERIOR PREMIUM",
        marca: "SHERWIN WILLIAMS",
        modelo: "LOXON",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 0,
        alicuota_detectada: 21.0,
        precio_final: 1600.0, // 
    },
    {
        id: 3,
        codigo: "1-04246-10",
        nombre: "LATEX INTERIOR MATE",
        marca: "SHERWIN WILLIAMS",
        modelo: "Z10",
        presentacion: "BALDE 10 LTS",
        precio_unitario_neto: 0,
        alicuota_detectada: 21.0,
        precio_final: 800.0
    }
    ],
},
{
    proveedor: {
    proveedor_nombre: "LAURA S.A",
    condicion_fiscal: "Responsable Inscripto",
    },
    producto: [
    {
        id: 4,
        codigo: "1-04245-20",
        nombre: "LATEX EXTERIOR PREMIUM",
        marca: "SHERWIN WILLIAMS",
        modelo: "LOXON",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 1363.64, // ← precio efectivo para RI: $1.363,64 (neto)
        alicuota_detectada: 21.0,
        precio_final: 1650.0,
    },
    {
        id: 5,
        codigo: "1-04246-10",
        nombre: "LATEX INTERIOR MATE",
        marca: "SHERWIN WILLIAMS",
        modelo: "Z10",
        presentacion: "BALDE 10 LTS",
        precio_unitario_neto: 826.45,
        alicuota_detectada: 21.0,
        precio_final: 1000.0
    },
    ],
},

{
    proveedor: {
    proveedor_nombre: "DISTRIBUIDORA COLOR S.R.L.",
    condicion_fiscal: "Responsable Inscripto",
    },
    producto: [
    {
        id: 6,
        codigo: "1-04247-20",
        nombre: "ENDUIDO PLASTICO INTERIOR",
        marca: "SHERWIN WILLIAMS",
        modelo: "LOXON EXTRALATE",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 991.74, 
        alicuota_detectada: 21.0,
        precio_final: 1200.0
    },
    ],
},

];
export default productosRaw;