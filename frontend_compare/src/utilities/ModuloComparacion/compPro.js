const comparacionPreciosPro = (listaProveedores, condicionFiscalUsuario) => {
    const condicionRI = "Responsable Inscripto";
    const mejoresProductos = {};
    const productosRechazados = [];

    const getPrecioEfectivo = (prod, condicionFiscalProveedor) => {
        if (condicionFiscalUsuario === condicionRI) {
            return condicionFiscalProveedor === condicionRI
                ? prod.precio_unitario_neto
                : prod.precio_final;
        } else {
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
                    // El actual ganador pasa a rechazados
                    productosRechazados.push({
                        ...mejoresProductos[claveUnica].producto,
                        precio_efectivo: masBajoActual,
                        proveedor_nombre: mejoresProductos[claveUnica].proveedor.proveedor_nombre,
                        condicion_fiscal: mejoresProductos[claveUnica].proveedor.condicion_fiscal,
                        
                    });

                    mejoresProductos[claveUnica].precio_efectivo_mas_bajo = precioEfectivo;
                    mejoresProductos[claveUnica].proveedor = { ...infoProveedor };
                    mejoresProductos[claveUnica].producto = { ...prod };
                } else {
                    // El entrante pierde, va a rechazados
                    productosRechazados.push({
                        ...prod,
                        precio_efectivo: precioEfectivo,
                        proveedor_nombre: infoProveedor.proveedor_nombre,
                        condicion_fiscal: infoProveedor.condicion_fiscal,
                        
                    });
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

    const ganadores = Object.values(mejoresProductos).map((item) => ({
        ...item.producto,
        diferencia: item.diferencia,
        precio_efectivo_ganador: item.precio_efectivo_mas_bajo,
        iva: item.producto.alicuota_detectada ?? 21,
        proveedor_nombre: item.proveedor.proveedor_nombre,
        condicion_fiscal: item.proveedor.condicion_fiscal,
    }));

    return [ganadores, productosRechazados];
};

export default comparacionPreciosPro;