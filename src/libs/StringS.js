export const formatoCorreo = (value) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(value);
};

// Truncar un parrafo a una cantidad X de lineas con css
// display: -webkit-box;
// -webkit-line-clamp: 3; /* Número de líneas antes de cortar */
// -webkit-box-orient: vertical;
// overflow: hidden;
// text-overflow: ellipsis;
