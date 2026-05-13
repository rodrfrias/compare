const productosRaw = [
  {
    proveedor: {
      proveedor_nombre: "TECH WORLD S.A.",
      CUIT: "30-XXXXXXXX-X",
      dirección_email: "ventas@techworld.com.ar",
      teléfono: "0800-XXX-TECH",
      condicion_fiscal: "Responsable Inscripto",
      dirección: "Av. Corrientes 1234",
      localidad: "CABA",
      codigo_postal: "1043"
    },
    producto: [
      {
        id: 1,
        codigo: "PROC-I7-13700",
        categoria: "COMPONENTES",
        nombre: "PROCESADOR INTEL CORE I7",
        marca: "INTEL",
        modelo: "13700K",
        presentacion: "BOX",
        precio_unitario_neto: 450000.00,
        iva_Incluido: false,
        alicuota_detectada: 10.5,
        precio_final: 497250.00
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "LOGITECH ARGENTINA",
      CUIT: "30-YYYYYYYY-Y",
      dirección_email: "soporte@logitech.com.ar",
      teléfono: "0810-999-LOGI",
      condicion_fiscal: "Responsable Inscripto",
      dirección: "Panamericana Km 25",
      localidad: "Martinez",
      codigo_postal: "1640"
    },
    producto: [
      {
        id: 2,
        codigo: "MOU-G502-HERO",
        categoria: "PERIFERICOS",
        nombre: "MOUSE GAMER LOGITECH G502",
        marca: "LOGITECH",
        modelo: "G502 HERO",
        presentacion: "CAJA",
        precio_unitario_neto: 65000.50,
        iva_Incluido: false,
        alicuota_detectada: 21.0,
        precio_final: 78650.60
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "HARDWARE DEL SUR",
      CUIT: "30-ZZZZZZZZ-Z",
      dirección_email: "info@hardsur.com.ar",
      teléfono: "011-4555-XXXX",
      condicion_fiscal: "Responsable Inscripto",
      dirección: "Ruta 2 Km 40",
      localidad: "Berazategui",
      codigo_postal: "1884"
    },
    producto: [
      {
        id: 3,
        codigo: "SSD-1TB-NVME",
        categoria: "ALMACENAMIENTO",
        nombre: "DISCO SOLIDO SSD 1TB NVME",
        marca: "KINGSTON",
        modelo: "NV2 PCIe 4.0",
        presentacion: "BLISTER",
        precio_unitario_neto: 78512.40,
        iva_Incluido: true,
        alicuota_detectada: 21.0,
        precio_final: 95000.00
      },
      {
        id: 4,
        codigo: "RAM-16GB-D5",
        categoria: "MEMORIAS",
        nombre: "MEMORIA RAM 16GB DDR5",
        marca: "CORSAIR",
        modelo: "VENGEANCE",
        presentacion: "MODULO INDIVIDUAL",
        precio_unitario_neto: 82644.63,
        iva_Incluido: true,
        alicuota_detectada: 21.0,
        precio_final: 100000.00
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "CARLOS TECH SERVICIOS",
      CUIT: "20-KKKKKKKK-K",
      dirección_email: "carlostech@mail.com",
      teléfono: "387-XXXXXXX",
      condicion_fiscal: "Monotributista",
      dirección: "Calle Interior 45",
      localidad: "Salta",
      codigo_postal: "4400"
    },
    producto: [
      {
        id: 5,
        codigo: "SRV-INST-OS",
        categoria: "SERVICIOS",
        nombre: "INSTALACION SISTEMA OPERATIVO",
        marca: "PROPIO",
        modelo: "STANDART",
        presentacion: "SERVICIO",
        precio_unitario_neto: 15000.00,
        iva_Incluido: false,
        alicuota_detectada: 0.0,
        precio_final: 15000.00
      }
    ]
  },
  {
    proveedor: {
      proveedor_nombre: "ANA REDES",
      CUIT: "27-WWWWWWWW-W",
      dirección_email: "ana.redes@mail.com",
      teléfono: "341-XXXXXXX",
      condicion_fiscal: "Monotributista",
      dirección: "Pasaje Las Flores 12",
      localidad: "Rosario",
      codigo_postal: "2000"
    },
    producto: [
      {
        id: 6,
        codigo: "CAB-CAT6-10",
        categoria: "CONECTIVIDAD",
        nombre: "CABLE DE RED CAT6 10MTS",
        marca: "ARMADO",
        modelo: "PATCH CORD",
        presentacion: "BOLSA",
        precio_unitario_neto: 12000.00,
        iva_Incluido: false,
        alicuota_detectada: 0.0,
        precio_final: 12000.00
      }
    ]
  }
];

export default productosRaw;