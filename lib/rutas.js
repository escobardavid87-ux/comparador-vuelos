export const RUTAS = [
  // --- Rutas existentes ---
  { slug: 'barcelona-roma', origin: 'BCN', destination: 'FCO', from: 'Barcelona', to: 'Roma' },
  { slug: 'madrid-roma', origin: 'MAD', destination: 'FCO', from: 'Madrid', to: 'Roma' },
  { slug: 'barcelona-paris', origin: 'BCN', destination: 'PAR', from: 'Barcelona', to: 'París' },
  { slug: 'madrid-paris', origin: 'MAD', destination: 'PAR', from: 'Madrid', to: 'París' },
  { slug: 'barcelona-londres', origin: 'BCN', destination: 'LON', from: 'Barcelona', to: 'Londres' },
  { slug: 'madrid-londres', origin: 'MAD', destination: 'LON', from: 'Madrid', to: 'Londres' },
  { slug: 'barcelona-lisboa', origin: 'BCN', destination: 'LIS', from: 'Barcelona', to: 'Lisboa' },
  { slug: 'madrid-lisboa', origin: 'MAD', destination: 'LIS', from: 'Madrid', to: 'Lisboa' },
  { slug: 'barcelona-amsterdam', origin: 'BCN', destination: 'AMS', from: 'Barcelona', to: 'Ámsterdam' },
  { slug: 'madrid-amsterdam', origin: 'MAD', destination: 'AMS', from: 'Madrid', to: 'Ámsterdam' },
  { slug: 'barcelona-milan', origin: 'BCN', destination: 'MIL', from: 'Barcelona', to: 'Milán' },
  { slug: 'madrid-berlin', origin: 'MAD', destination: 'BER', from: 'Madrid', to: 'Berlín' },

  // --- Nuevas: España <-> Latinoamérica ---
  { slug: 'madrid-buenos-aires', origin: 'MAD', destination: 'EZE', from: 'Madrid', to: 'Buenos Aires' },
  { slug: 'madrid-bogota', origin: 'MAD', destination: 'BOG', from: 'Madrid', to: 'Bogotá' },
  { slug: 'madrid-ciudad-de-mexico', origin: 'MAD', destination: 'MEX', from: 'Madrid', to: 'Ciudad de México' },
  { slug: 'madrid-lima', origin: 'MAD', destination: 'LIM', from: 'Madrid', to: 'Lima' },
  { slug: 'madrid-santiago-de-chile', origin: 'MAD', destination: 'SCL', from: 'Madrid', to: 'Santiago de Chile' },
  { slug: 'madrid-la-habana', origin: 'MAD', destination: 'HAV', from: 'Madrid', to: 'La Habana' },
  { slug: 'barcelona-buenos-aires', origin: 'BCN', destination: 'EZE', from: 'Barcelona', to: 'Buenos Aires' },
  { slug: 'barcelona-ciudad-de-mexico', origin: 'BCN', destination: 'MEX', from: 'Barcelona', to: 'Ciudad de México' },
  { slug: 'barcelona-bogota', origin: 'BCN', destination: 'BOG', from: 'Barcelona', to: 'Bogotá' },
  { slug: 'madrid-sao-paulo', origin: 'MAD', destination: 'GRU', from: 'Madrid', to: 'São Paulo' },

  // --- Nuevas: dentro de Latinoamérica ---
  { slug: 'bogota-ciudad-de-mexico', origin: 'BOG', destination: 'MEX', from: 'Bogotá', to: 'Ciudad de México' },
  { slug: 'bogota-miami', origin: 'BOG', destination: 'MIA', from: 'Bogotá', to: 'Miami' },
  { slug: 'ciudad-de-mexico-cancun', origin: 'MEX', destination: 'CUN', from: 'Ciudad de México', to: 'Cancún' },
  { slug: 'ciudad-de-mexico-miami', origin: 'MEX', destination: 'MIA', from: 'Ciudad de México', to: 'Miami' },
