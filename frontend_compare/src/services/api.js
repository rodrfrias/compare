import axios from 'axios';

// Esta es la dirección de tu backend que ya tienes corriendo
const API_URL = 'http://127.0.0.1:8000/api/v1';

export const enviarPDFAlBackend = async (archivo) => {
  const formData = new FormData();
  formData.append('file', archivo); // "file" debe coincidir con lo que espera Django

  try {
    const respuesta = await axios.post(`${API_URL}/upload-pdf/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return respuesta.data; // Aquí recibimos el texto CSV que extrajo pdfplumber
  } catch (error) {
    console.error("Error al conectar con el servidor:", error);
    throw error;
  }
};