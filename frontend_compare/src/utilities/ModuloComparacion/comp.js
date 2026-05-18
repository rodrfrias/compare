
const comparacionPrecios = (listaProveedores, condicionFiscalUsuario) => {
    const condicionRI = "Responsable Inscripto";
    const mejoresProductos = {};

    // Estrategia de precio según quién compra
    const getPrecioEfectivo = (prod, condicionFiscalProveedor) => {
        if (condicionFiscalUsuario === condicionRI) {
            // RI recupera IVA solo con proveedores RI
            return condicionFiscalProveedor === condicionRI
                ? prod.precio_unitario_neto
                : prod.precio_final;
        } else {
            // MO siempre paga precio final, sin excepciones
            return prod.precio_final;
        }
    };

    listaProveedores.forEach((item) => {
        const infoProveedor = item.proveedor;

        item.producto.forEach((prod) => {
            const claveUnica = `${prod.nombre}|${prod.marca}|${prod.modelo}|${prod.presentacion}`
                .trim()
                .toUpperCase();

            const precioEfectivo = getPrecioEfectivo(prod, infoProveedor.condicion_fiscal);
            const yaExiste = mejoresProductos[claveUnica] !== undefined;

            if (!yaExiste) {
                mejoresProductos[claveUnica] = {
                    precio_efectivo_mas_bajo: precioEfectivo,
                    precio_efectivo_mas_alto: precioEfectivo,
                    diferencia: 0,
                    proveedor: { ...infoProveedor },
                    producto: { ...prod },
                };
            } else {
                const masBajoActual = mejoresProductos[claveUnica].precio_efectivo_mas_bajo;
                const masAltoActual = mejoresProductos[claveUnica].precio_efectivo_mas_alto;

                if (precioEfectivo < masBajoActual) {
                    mejoresProductos[claveUnica].precio_efectivo_mas_bajo = precioEfectivo;
                    mejoresProductos[claveUnica].proveedor = { ...infoProveedor };
                    mejoresProductos[claveUnica].producto = { ...prod };
                }

                if (precioEfectivo > masAltoActual) {
                    mejoresProductos[claveUnica].precio_efectivo_mas_alto = precioEfectivo;
                }

                mejoresProductos[claveUnica].diferencia = Math.abs(
                    mejoresProductos[claveUnica].precio_efectivo_mas_alto -
                    mejoresProductos[claveUnica].precio_efectivo_mas_bajo
                );
            }
        });
    });

    return Object.values(mejoresProductos).map((item) => ({
        ...item.producto,
        diferencia: item.diferencia,
        precio_efectivo_ganador: item.precio_efectivo_mas_bajo,
        iva: item.producto.alicuota_detectada ?? 21,
        proveedor_nombre: item.proveedor.proveedor_nombre,
        condicion_fiscal: item.proveedor.condicion_fiscal,
    }));
};

export default comparacionPrecios;
