/* THE_ORIGIN*/
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
}
];


const obtenerMejoresPrecios = (listaProveedores) => {
    // ETAPA 1: Crear el diccionario vacío
    const mejoresProductos = {};

    // ETAPA 2: Recorrer cada proveedor
    listaProveedores.forEach((item) => {
        const infoProveedor = item.proveedor;

        // ETAPA 3: Recorrer cada producto de ese proveedor
        item.producto.forEach((prod) => {
            
            // ETAPA 4: Crear la clave única
            const claveUnica = `${prod.nombre}|${prod.marca}|${prod.modelo}|${prod.presentacion}`.trim().toUpperCase();

            // ETAPA 5: Verificar si el producto ya existe en el diccionario
            const yaExisteElProducto = mejoresProductos[claveUnica] !== undefined;

            if (!yaExisteElProducto) {
                // Si es la primera vez que lo vemos, este único precio es tanto el más bajo como el más alto por ahora.
                mejoresProductos[claveUnica] = {
                    precio_neto_mas_bajo: prod.precio_unitario_neto,
                    precio_neto_mas_alto: prod.precio_unitario_neto, // Lo usamos solo para controlar los extremos
                    diferencia: 0, // Al haber un solo proveedor, la diferencia lógicamente es 0
                    proveedor: { ...infoProveedor },
                    producto: { ...prod }
                };
            } else {
                // ETAPA 6: Si el producto YA existía, rescatamos los extremos actuales y el precio nuevo
                const precioMasBajoActual = mejoresProductos[claveUnica].precio_neto_mas_bajo;
                const precioMasAltoActual = mejoresProductos[claveUnica].precio_neto_mas_alto;
                const precioNuevo = prod.precio_unitario_neto;

                // Paso A: ¿El precio nuevo es el más BAJO de todos? Si es así, actualizamos el proveedor ganador
                if (precioNuevo < precioMasBajoActual) {
                    mejoresProductos[claveUnica].precio_neto_mas_bajo = precioNuevo;
                    mejoresProductos[claveUnica].proveedor = { ...infoProveedor };
                    mejoresProductos[claveUnica].producto = { ...prod };
                }

                // Paso B: ¿El precio nuevo es el más ALTO de todos? Si es así, actualizamos nuestro faro del más caro
                if (precioNuevo > precioMasAltoActual) {
                    mejoresProductos[claveUnica].precio_neto_mas_alto = precioNuevo;
                }

                // Paso C: Si es un precio intermedio (ni el más bajo ni el más alto), el algoritmo no entra a ningún "if" de arriba.
                // Pero IGUAL recalculamos la diferencia usando los verdaderos extremos (el mínimo absoluto vs el máximo absoluto)
                const extremoMinimo = mejoresProductos[claveUnica].precio_neto_mas_bajo;
                const extremoMaximo = mejoresProductos[claveUnica].precio_neto_mas_alto;
                
                mejoresProductos[claveUnica].diferencia = Math.abs(extremoMaximo - extremoMinimo);
            }
        });
    });

    // ─── ETAPA 7: AQUÍ SE APLANAN TODOS LOS DATOS ───────────────────────────
    return Object.values(mejoresProductos).map(item => {
        return {
            ...item.producto, // Metemos todas las propiedades del producto en la raíz (id, nombre, precio_final, etc.)
            diferencia: item.diferencia, // El ahorro calculado se mete directo en el producto
            iva: item.producto.alicuota_detectada ?? 21, // Dejamos el IVA listo aquí también
            proveedor_nombre: item.proveedor.proveedor_nombre,
            condicion_fiscal: item.proveedor.condicion_fiscal,
        };
    });
};


export default obtenerMejoresPrecios;

