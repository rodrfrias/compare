const productosRaw = [
  {
    proveedor: {
      proveedor_nombre: "COCA COLA ANDINA",
      CUIT: "30-XXXXXXXX-X",
      dirección_email: "contacto@andina.com.ar",
      teléfono: "0800-XXX-XXXX",
      condicion_fiscal: "Responsable Inscripto",
      dirección: "Calle Falsa 123",
      localidad: "Córdoba",
      codigo_postal: "5000"
    },
    producto: [
      {
        id: 1,
        codigo: "COC-600-PET",
        categoria: "BEBIDAS",
        nombre: "COCA COLA ORIGINAL",
        marca: "COCA COLA",
        modelo: "CLASSIC",
        presentacion: "BOTELLA PET 1.5L",
        precio_unitario_neto: 1200.00,
        iva_Incluido: false,
        alicuota_detectada: 21.0,
        precio_final: 1452.00
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "CERVECERIA QUILMES",
      CUIT: "30-YYYYYYYY-Y",
      dirección_email: "ventas@quilmes.com.ar",
      teléfono: "0810-XXX-XXXX",
      condicion_fiscal: "Responsable Inscripto",
      dirección: "Av. Antártida Argentina 123",
      localidad: "Quilmes",
      codigo_postal: "1878"
    },
    producto: [
      {
        id: 2,
        codigo: "CER-001-PAT",
        categoria: "BEBIDAS",
        nombre: "CERVEZA PATAGONIA AMBER",
        marca: "PATAGONIA",
        modelo: "AMBER LAGUERN",
        presentacion: "LATA 473ML",
        precio_unitario_neto: 850.50,
        iva_Incluido: false,
        alicuota_detectada: 21.0,
        precio_final: 1029.11
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "DISTRIBUIDORA DEL SUR",
      CUIT: "30-ZZZZZZZZ-Z",
      dirección_email: "info@delsur.com.ar",
      teléfono: "011-XXXX-XXXX",
      condicion_fiscal: "Responsable Inscripto",
      dirección: "Ruta 2 Km 40",
      localidad: "Berazategui",
      codigo_postal: "1884"
    },
    producto: [
      {
        id: 3,
        codigo: "AGU-500-VIV",
        categoria: "BEBIDAS",
        nombre: "AGUA MINERAL VILLAVICENCIO",
        marca: "VILLAVICENCIO",
        modelo: "SIN GAS",
        presentacion: "BOTELLA 500ML",
        precio_unitario_neto: 371.90,
        iva_Incluido: true,
        alicuota_detectada: 21.0,
        precio_final: 450.00
      },
      {
        id: 4,
        codigo: "AGU-500-VIV",
        categoria: "BEBIDAS",
        nombre: "AGUA MINERAL VILLAVICENCIO",
        marca: "VILLAVICENCIO",
        modelo: "SIN GAS",
        presentacion: "BOTELLA 500ML",
        precio_unitario_neto: 371.90,
        iva_Incluido: true,
        alicuota_detectada: 21.0,
        precio_final: 450.00
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "JUAN PEREZ REPOSTERIA",
      CUIT: "20-KKKKKKKK-K",
      dirección_email: "juanperez@mail.com",
      teléfono: "XXX-XXXXXXX",
      condicion_fiscal: "Monotributista",
      dirección: "Calle Interior 45",
      localidad: "Salta",
      codigo_postal: "4400"
    },
    producto: [
      {
        id: 5,
        codigo: "ALM-050-ART",
        categoria: "ALIMENTOS",
        nombre: "ALFAJOR ARTESANAL DE MAICENA",
        marca: "DULCES DEL VALLE",
        modelo: "TRADICIONAL",
        presentacion: "UNIDAD 50G",
        precio_unitario_neto: 350.00,
        iva_Incluido: false,
        alicuota_detectada: 0.0,
        precio_final: 350.00
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "ANA GARCIA",
      CUIT: "27-WWWWWWWW-W",
      dirección_email: "ana.horno@mail.com",
      teléfono: "XXX-XXXXXXX",
      condicion_fiscal: "Monotributista",
      dirección: "Pasaje Las Flores 12",
      localidad: "Rosario",
      codigo_postal: "2000"
    },
    producto: [
      {
        id: 6,
        codigo: "PAN-001-CAS",
        categoria: "PANADERIA",
        nombre: "PAN INTEGRAL SEMILLADO",
        marca: "EL HORNO DE ANA",
        modelo: "INTEGRAL",
        presentacion: "BOLSA 400G",
        precio_unitario_neto: 900.00,
        iva_Incluido: false,
        alicuota_detectada: 0.0,
        precio_final: 900.00
      }
    ]
  }
];

export default productosRaw;