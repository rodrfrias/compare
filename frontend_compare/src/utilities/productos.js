const productosRaw = [
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
        id: 1,
        codigo: "LAT-LAT-INT-20",
        categoria: "PINTURAS",
        nombre: "LATEX INTERIOR MATE",
        marca: "ALBA",
        modelo: "ALBALATEX",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 125000.00,
        iva_Incluido: false,
        alicuota_detectada: 21.0,
        precio_final: 151250.00
      },
      {
        id: 7,
        codigo: "ESM-SINT-BLA-04",
        categoria: "PINTURAS",
        nombre: "ESMALTE SINTETICO BRILLANTE BLANCO",
        marca: "ALBA",
        modelo: "ALBACRIL",
        presentacion: "LATA 4 LTS",
        precio_unitario_neto: 42000.00,
        iva_Incluido: false,
        alicuota_detectada: 21.0,
        precio_final: 50820.00
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "DISTRIBUIDORA REVESTIMIENTOS",
      CUIT: "30-YYYYYYYY-Y",
      dirección_email: "pedidos@revestimientos.com.ar",
      teléfono: "0810-999-REVE",
      condicion_fiscal: "Responsable Inscripto",
      dirección: "Panamericana Km 25",
      localidad: "Martinez",
      codigo_postal: "1640"
    },
    producto: [
      {
        id: 2,
        codigo: "IMP-MEM-LIQ-20",
        categoria: "IMPERMEABILIZANTES",
        nombre: "MEMBRANA LIQUIDA TECHOS",
        marca: "SULFATINA",
        modelo: "FRENTES Y TECHOS",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 95000.50,
        iva_Incluido: false,
        alicuota_detectada: 21.0,
        precio_final: 114950.60
      },
      {
        id: 8,
        codigo: "IMP-MUROS-20",
        categoria: "IMPERMEABILIZANTES",
        nombre: "RECUBRIMIENTO ACRILICO MUROS",
        marca: "SULFATINA",
        modelo: "ULTRA PROTECCIÓN",
        presentacion: "BALDE 20 LTS",
        precio_unitario_neto: 105000.00,
        iva_Incluido: false,
        alicuota_detectada: 21.0,
        precio_final: 127050.00
      }
    ]
  },
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
        id: 3,
        codigo: "ACC-PIN-PRO-4",
        categoria: "ACCESORIOS",
        nombre: "PINCEL PROFESIONAL N°4",
        marca: "EL GALGO",
        modelo: "SERIE ORO",
        presentacion: "UNIDAD",
        precio_unitario_neto: 12396.69,
        iva_Incluido: true,
        alicuota_detectada: 21.0,
        precio_final: 15000.00
      },
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
        precio_final: 180000.00
      },
      {
        id: 9,
        codigo: "ACC-RODILLO-22",
        categoria: "ACCESORIOS",
        nombre: "RODILLO ANTIGOTA 22CM",
        marca: "EL GALGO",
        modelo: "PROFESIONAL",
        presentacion: "UNIDAD",
        precio_unitario_neto: 8500.00,
        iva_Incluido: false,
        alicuota_detectada: 21.0,
        precio_final: 10285.00
      },
      {
        id: 10,
        codigo: "ACC-BAN-EXT-01",
        categoria: "ACCESORIOS",
        nombre: "BANDEJA PINTOR GRANDE",
        marca: "EL GALGO",
        modelo: "REFORZADA",
        presentacion: "UNIDAD",
        precio_unitario_neto: 4500.00,
        iva_Incluido: false,
        alicuota_detectada: 21.0,
        precio_final: 5445.00
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "JUAN APLICACIONES",
      CUIT: "20-KKKKKKKK-K",
      dirección_email: "juanpinta@mail.com",
      teléfono: "387-XXXXXXX",
      condicion_fiscal: "Monotributista",
      dirección: "Calle Interior 45",
      localidad: "Salta",
      codigo_postal: "4400"
    },
    producto: [
      {
        id: 5,
        codigo: "SRV-MAN-M2",
        categoria: "SERVICIOS",
        nombre: "MANO DE OBRA PINTURA M2",
        marca: "PROPIO",
        modelo: "ESTANDAR",
        presentacion: "SERVICIO M2",
        precio_unitario_neto: 4500.00,
        iva_Incluido: false,
        alicuota_detectada: 0.0,
        precio_final: 4500.00
      },
      {
        id: 11,
        codigo: "SRV-MAN-FRENTE",
        categoria: "SERVICIOS",
        nombre: "HIDROLAVADO Y PINTURA FRENTES",
        marca: "PROPIO",
        modelo: "PREMIUM",
        presentacion: "SERVICIO GLOBAL",
        precio_unitario_neto: 250000.00,
        iva_Incluido: false,
        alicuota_detectada: 0.0,
        precio_final: 250000.00
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "ANA FERRETERÍA",
      CUIT: "27-WWWWWWWW-W",
      dirección_email: "ana.ferre@mail.com",
      teléfono: "341-XXXXXXX",
      condicion_fiscal: "Monotributista",
      dirección: "Pasaje Las Flores 12",
      localidad: "Rosario",
      codigo_postal: "2000"
    },
    producto: [
      {
        id: 6,
        codigo: "LIM-AGU-01",
        categoria: "DILUYENTES",
        nombre: "AGUARRAS MINERAL",
        marca: "REX",
        modelo: "PURO",
        presentacion: "BOTELLA 1 LT",
        precio_unitario_neto: 3200.00,
        iva_Incluido: false,
        alicuota_detectada: 0.0,
        precio_final: 3200.00
      },
      {
        id: 12,
        codigo: "FER-LIJA-180",
        categoria: "ACCESORIOS",
        nombre: "LIJA AL AGUA GRANO 180",
        marca: "3M",
        modelo: "WETOR",
        presentacion: "PACK 10 UNIDADES",
        precio_unitario_neto: 7500.00,
        iva_Incluido: false,
        alicuota_detectada: 0.0,
        precio_final: 7500.00
      }
    ]
  }
];

export default productosRaw;