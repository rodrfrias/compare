
const comparacionPreciosUsuarioRI = (listaProveedores) => {
    const condicionRI = "Responsable Inscripto";
    const condicionMO = "Monotributista";
    const mejoresProductos = {};

    listaProveedores.forEach((item) => {
        const infoProveedor = item.proveedor;

        item.producto.forEach((prod) => {
            const claveUnica = `${prod.nombre}|${prod.marca}|${prod.modelo}|${prod.presentacion}`
                .trim()
                .toUpperCase();

            // ── El precio que realmente paga un usuario RI ──────────────────
            // Si el proveedor es RI  → usa precio_unitario_neto (se descuenta IVA al comprar)
            // Si el proveedor es MO → usa precio_final (no hay IVA crédito fiscal, paga el total)
            const precioEfectivo =
                infoProveedor.condicion_fiscal === condicionRI
                    ? prod.precio_unitario_neto
                    : prod.precio_final;

            const yaExiste = mejoresProductos[claveUnica] !== undefined;

            if (!yaExiste) {
                // Primera vez: inicializamos con este único proveedor
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

                // ¿Es el más barato hasta ahora? → actualiza ganador
                if (precioEfectivo < masBajoActual) {
                    mejoresProductos[claveUnica].precio_efectivo_mas_bajo = precioEfectivo;
                    mejoresProductos[claveUnica].proveedor = { ...infoProveedor };
                    mejoresProductos[claveUnica].producto = { ...prod };
                }

                // ¿Es el más caro hasta ahora? → actualiza el techo
                if (precioEfectivo > masAltoActual) {
                    mejoresProductos[claveUnica].precio_efectivo_mas_alto = precioEfectivo;
                }

                // Recalculamos diferencia con los extremos reales
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
        precio_efectivo_ganador: item.precio_efectivo_mas_bajo, // lo que paga el usuario RI
        iva: item.producto.alicuota_detectada ?? 21,
        proveedor_nombre: item.proveedor.proveedor_nombre,
        condicion_fiscal: item.proveedor.condicion_fiscal,
    }));
};

export default comparacionPreciosUsuarioRI;
