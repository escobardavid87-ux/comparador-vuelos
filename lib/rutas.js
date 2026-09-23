export const RUTAS = [
  // --- Rutas existentes: Europa desde España ---
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

  // --- Rutas existentes: España <-> Latinoamérica ---
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

  // --- Rutas existentes: dentro de Latinoamérica (internacional) ---
  { slug: 'bogota-ciudad-de-mexico', origin: 'BOG', destination: 'MEX', from: 'Bogotá', to: 'Ciudad de México' },
  { slug: 'bogota-miami', origin: 'BOG', destination: 'MIA', from: 'Bogotá', to: 'Miami' },
  { slug: 'ciudad-de-mexico-cancun', origin: 'MEX', destination: 'CUN', from: 'Ciudad de México', to: 'Cancún' },
  { slug: 'ciudad-de-mexico-miami', origin: 'MEX', destination: 'MIA', from: 'Ciudad de México', to: 'Miami' },
  { slug: 'buenos-aires-santiago-de-chile', origin: 'EZE', destination: 'SCL', from: 'Buenos Aires', to: 'Santiago de Chile' },
  { slug: 'lima-bogota', origin: 'LIM', destination: 'BOG', from: 'Lima', to: 'Bogotá' },
  { slug: 'sao-paulo-buenos-aires', origin: 'GRU', destination: 'EZE', from: 'São Paulo', to: 'Buenos Aires' },
  { slug: 'bogota-panama', origin: 'BOG', destination: 'PTY', from: 'Bogotá', to: 'Panamá' },
  { slug: 'ciudad-de-mexico-bogota', origin: 'MEX', destination: 'BOG', from: 'Ciudad de México', to: 'Bogotá' },
  { slug: 'lima-miami', origin: 'LIM', destination: 'MIA', from: 'Lima', to: 'Miami' },

  // --- Rutas existentes: más Europa desde España ---
  { slug: 'madrid-viena', origin: 'MAD', destination: 'VIE', from: 'Madrid', to: 'Viena' },
  { slug: 'madrid-praga', origin: 'MAD', destination: 'PRG', from: 'Madrid', to: 'Praga' },
  { slug: 'madrid-atenas', origin: 'MAD', destination: 'ATH', from: 'Madrid', to: 'Atenas' },
  { slug: 'madrid-dublin', origin: 'MAD', destination: 'DUB', from: 'Madrid', to: 'Dublín' },
  { slug: 'barcelona-dublin', origin: 'BCN', destination: 'DUB', from: 'Barcelona', to: 'Dublín' },
  { slug: 'madrid-bruselas', origin: 'MAD', destination: 'BRU', from: 'Madrid', to: 'Bruselas' },
  { slug: 'madrid-zurich', origin: 'MAD', destination: 'ZRH', from: 'Madrid', to: 'Zúrich' },
  { slug: 'madrid-estocolmo', origin: 'MAD', destination: 'ARN', from: 'Madrid', to: 'Estocolmo' },
  { slug: 'barcelona-viena', origin: 'BCN', destination: 'VIE', from: 'Barcelona', to: 'Viena' },
  { slug: 'madrid-varsovia', origin: 'MAD', destination: 'WAW', from: 'Madrid', to: 'Varsovia' },

  // --- Rutas existentes: Norteamérica desde España ---
  { slug: 'madrid-nueva-york', origin: 'MAD', destination: 'JFK', from: 'Madrid', to: 'Nueva York' },
  { slug: 'madrid-miami', origin: 'MAD', destination: 'MIA', from: 'Madrid', to: 'Miami' },
  { slug: 'madrid-los-angeles', origin: 'MAD', destination: 'LAX', from: 'Madrid', to: 'Los Ángeles' },
  { slug: 'barcelona-nueva-york', origin: 'BCN', destination: 'JFK', from: 'Barcelona', to: 'Nueva York' },
  { slug: 'madrid-toronto', origin: 'MAD', destination: 'YYZ', from: 'Madrid', to: 'Toronto' },
  { slug: 'madrid-chicago', origin: 'MAD', destination: 'ORD', from: 'Madrid', to: 'Chicago' },

  // --- Rutas existentes: Asia y Oriente Medio desde España ---
  { slug: 'madrid-tokio', origin: 'MAD', destination: 'NRT', from: 'Madrid', to: 'Tokio' },
  { slug: 'madrid-pekin', origin: 'MAD', destination: 'PEK', from: 'Madrid', to: 'Pekín' },
  { slug: 'madrid-dubai', origin: 'MAD', destination: 'DXB', from: 'Madrid', to: 'Dubái' },
  { slug: 'madrid-bangkok', origin: 'MAD', destination: 'BKK', from: 'Madrid', to: 'Bangkok' },
  { slug: 'madrid-singapur', origin: 'MAD', destination: 'SIN', from: 'Madrid', to: 'Singapur' },
  { slug: 'madrid-estambul', origin: 'MAD', destination: 'IST', from: 'Madrid', to: 'Estambul' },
  { slug: 'barcelona-estambul', origin: 'BCN', destination: 'IST', from: 'Barcelona', to: 'Estambul' },
  { slug: 'madrid-doha', origin: 'MAD', destination: 'DOH', from: 'Madrid', to: 'Doha' },
  { slug: 'madrid-seul', origin: 'MAD', destination: 'ICN', from: 'Madrid', to: 'Seúl' },
  { slug: 'madrid-shanghai', origin: 'MAD', destination: 'PVG', from: 'Madrid', to: 'Shanghái' },

  // --- Rutas existentes: África desde España ---
  { slug: 'madrid-casablanca', origin: 'MAD', destination: 'CMN', from: 'Madrid', to: 'Casablanca' },
  { slug: 'madrid-el-cairo', origin: 'MAD', destination: 'CAI', from: 'Madrid', to: 'El Cairo' },
  { slug: 'madrid-marrakech', origin: 'MAD', destination: 'RAK', from: 'Madrid', to: 'Marrakech' },
  { slug: 'barcelona-marrakech', origin: 'BCN', destination: 'RAK', from: 'Barcelona', to: 'Marrakech' },
  { slug: 'madrid-tunez', origin: 'MAD', destination: 'TUN', from: 'Madrid', to: 'Túnez' },

  // --- Rutas existentes: Oceanía desde España ---
  { slug: 'madrid-sidney', origin: 'MAD', destination: 'SYD', from: 'Madrid', to: 'Sídney' },

  // --- Rutas existentes: intercontinentales sin España ---
  { slug: 'nueva-york-londres', origin: 'JFK', destination: 'LHR', from: 'Nueva York', to: 'Londres' },
  { slug: 'nueva-york-paris', origin: 'JFK', destination: 'CDG', from: 'Nueva York', to: 'París' },
  { slug: 'dubai-londres', origin: 'DXB', destination: 'LHR', from: 'Dubái', to: 'Londres' },
  { slug: 'singapur-londres', origin: 'SIN', destination: 'LHR', from: 'Singapur', to: 'Londres' },
  { slug: 'los-angeles-tokio', origin: 'LAX', destination: 'NRT', from: 'Los Ángeles', to: 'Tokio' },
  { slug: 'miami-buenos-aires', origin: 'MIA', destination: 'EZE', from: 'Miami', to: 'Buenos Aires' },
  { slug: 'nueva-york-ciudad-de-mexico', origin: 'JFK', destination: 'MEX', from: 'Nueva York', to: 'Ciudad de México' },
  { slug: 'dubai-nueva-york', origin: 'DXB', destination: 'JFK', from: 'Dubái', to: 'Nueva York' },

  // --- Nuevas: vuelos nacionales España ---
  { slug: 'madrid-barcelona', origin: 'MAD', destination: 'BCN', from: 'Madrid', to: 'Barcelona' },
  { slug: 'madrid-sevilla', origin: 'MAD', destination: 'SVQ', from: 'Madrid', to: 'Sevilla' },
  { slug: 'madrid-valencia', origin: 'MAD', destination: 'VLC', from: 'Madrid', to: 'Valencia' },
  { slug: 'madrid-bilbao', origin: 'MAD', destination: 'BIO', from: 'Madrid', to: 'Bilbao' },
  { slug: 'madrid-malaga', origin: 'MAD', destination: 'AGP', from: 'Madrid', to: 'Málaga' },
  { slug: 'madrid-palma-de-mallorca', origin: 'MAD', destination: 'PMI', from: 'Madrid', to: 'Palma de Mallorca' },
  { slug: 'madrid-gran-canaria', origin: 'MAD', destination: 'LPA', from: 'Madrid', to: 'Gran Canaria' },
  { slug: 'madrid-tenerife', origin: 'MAD', destination: 'TFN', from: 'Madrid', to: 'Tenerife' },
  { slug: 'madrid-santiago-de-compostela', origin: 'MAD', destination: 'SCQ', from: 'Madrid', to: 'Santiago de Compostela' },
  { slug: 'barcelona-sevilla', origin: 'BCN', destination: 'SVQ', from: 'Barcelona', to: 'Sevilla' },
  { slug: 'barcelona-malaga', origin: 'BCN', destination: 'AGP', from: 'Barcelona', to: 'Málaga' },
  { slug: 'barcelona-palma-de-mallorca', origin: 'BCN', destination: 'PMI', from: 'Barcelona', to: 'Palma de Mallorca' },
  { slug: 'barcelona-gran-canaria', origin: 'BCN', destination: 'LPA', from: 'Barcelona', to: 'Gran Canaria' },
  { slug: 'barcelona-tenerife', origin: 'BCN', destination: 'TFN', from: 'Barcelona', to: 'Tenerife' },
  { slug: 'barcelona-bilbao', origin: 'BCN', destination: 'BIO', from: 'Barcelona', to: 'Bilbao' },

  // --- Nuevas: vuelos nacionales México ---
  { slug: 'ciudad-de-mexico-guadalajara', origin: 'MEX', destination: 'GDL', from: 'Ciudad de México', to: 'Guadalajara' },
  { slug: 'ciudad-de-mexico-monterrey', origin: 'MEX', destination: 'MTY', from: 'Ciudad de México', to: 'Monterrey' },
  { slug: 'ciudad-de-mexico-tijuana', origin: 'MEX', destination: 'TIJ', from: 'Ciudad de México', to: 'Tijuana' },
  { slug: 'ciudad-de-mexico-merida', origin: 'MEX', destination: 'MID', from: 'Ciudad de México', to: 'Mérida' },
  { slug: 'ciudad-de-mexico-puerto-vallarta', origin: 'MEX', destination: 'PVR', from: 'Ciudad de México', to: 'Puerto Vallarta' },
  { slug: 'ciudad-de-mexico-los-cabos', origin: 'MEX', destination: 'SJD', from: 'Ciudad de México', to: 'Los Cabos' },

  // --- Nuevas: vuelos nacionales Colombia ---
  { slug: 'bogota-medellin', origin: 'BOG', destination: 'MDE', from: 'Bogotá', to: 'Medellín' },
  { slug: 'bogota-cartagena', origin: 'BOG', destination: 'CTG', from: 'Bogotá', to: 'Cartagena' },
  { slug: 'bogota-cali', origin: 'BOG', destination: 'CLO', from: 'Bogotá', to: 'Cali' },
  { slug: 'bogota-san-andres', origin: 'BOG', destination: 'ADZ', from: 'Bogotá', to: 'San Andrés' },
  { slug: 'medellin-cartagena', origin: 'MDE', destination: 'CTG', from: 'Medellín', to: 'Cartagena' },

  // --- Nuevas: vuelos nacionales Argentina ---
  { slug: 'buenos-aires-cordoba', origin: 'EZE', destination: 'COR', from: 'Buenos Aires', to: 'Córdoba' },
  { slug: 'buenos-aires-mendoza', origin: 'EZE', destination: 'MDZ', from: 'Buenos Aires', to: 'Mendoza' },
  { slug: 'buenos-aires-bariloche', origin: 'EZE', destination: 'BRC', from: 'Buenos Aires', to: 'Bariloche' },
  { slug: 'buenos-aires-salta', origin: 'EZE', destination: 'SLA', from: 'Buenos Aires', to: 'Salta' },

  // --- Nuevas: vuelos nacionales Brasil, Perú y Chile ---
  { slug: 'sao-paulo-rio-de-janeiro', origin: 'GRU', destination: 'GIG', from: 'São Paulo', to: 'Río de Janeiro' },
  { slug: 'lima-cusco', origin: 'LIM', destination: 'CUZ', from: 'Lima', to: 'Cusco' },
  { slug: 'santiago-de-chile-antofagasta', origin: 'SCL', destination: 'ANF', from: 'Santiago de Chile', to: 'Antofagasta' },

  // --- Nuevas: más España <-> Latinoamérica ---
  { slug: 'madrid-montevideo', origin: 'MAD', destination: 'MVD', from: 'Madrid', to: 'Montevideo' },
  { slug: 'madrid-quito', origin: 'MAD', destination: 'UIO', from: 'Madrid', to: 'Quito' },
  { slug: 'madrid-san-jose', origin: 'MAD', destination: 'SJO', from: 'Madrid', to: 'San José (Costa Rica)' },
  { slug: 'madrid-santo-domingo', origin: 'MAD', destination: 'SDQ', from: 'Madrid', to: 'Santo Domingo' },
  { slug: 'madrid-guatemala', origin: 'MAD', destination: 'GUA', from: 'Madrid', to: 'Ciudad de Guatemala' },
  { slug: 'madrid-asuncion', origin: 'MAD', destination: 'ASU', from: 'Madrid', to: 'Asunción' },
  { slug: 'barcelona-lima', origin: 'BCN', destination: 'LIM', from: 'Barcelona', to: 'Lima' },
  { slug: 'barcelona-santiago-de-chile', origin: 'BCN', destination: 'SCL', from: 'Barcelona', to: 'Santiago de Chile' },
  { slug: 'barcelona-montevideo', origin: 'BCN', destination: 'MVD', from: 'Barcelona', to: 'Montevideo' },

  // --- Nuevas: más rutas dentro de Latinoamérica ---
  { slug: 'ciudad-de-mexico-san-salvador', origin: 'MEX', destination: 'SAL', from: 'Ciudad de México', to: 'San Salvador' },
  { slug: 'ciudad-de-mexico-guatemala', origin: 'MEX', destination: 'GUA', from: 'Ciudad de México', to: 'Ciudad de Guatemala' },
  { slug: 'bogota-quito', origin: 'BOG', destination: 'UIO', from: 'Bogotá', to: 'Quito' },
  { slug: 'lima-santiago-de-chile', origin: 'LIM', destination: 'SCL', from: 'Lima', to: 'Santiago de Chile' },
  { slug: 'sao-paulo-lima', origin: 'GRU', destination: 'LIM', from: 'São Paulo', to: 'Lima' },
  { slug: 'panama-bogota', origin: 'PTY', destination: 'BOG', from: 'Panamá', to: 'Bogotá' },
  { slug: 'montevideo-buenos-aires', origin: 'MVD', destination: 'EZE', from: 'Montevideo', to: 'Buenos Aires' },
  { slug: 'quito-guayaquil', origin: 'UIO', destination: 'GYE', from: 'Quito', to: 'Guayaquil' },
  { slug: 'sao-paulo-santiago-de-chile', origin: 'GRU', destination: 'SCL', from: 'São Paulo', to: 'Santiago de Chile' },
  { slug: 'ciudad-de-mexico-lima', origin: 'MEX', destination: 'LIM', from: 'Ciudad de México', to: 'Lima' },

  // --- Nuevas: más España <-> Europa ---
  { slug: 'madrid-copenhague', origin: 'MAD', destination: 'CPH', from: 'Madrid', to: 'Copenhague' },
  { slug: 'madrid-helsinki', origin: 'MAD', destination: 'HEL', from: 'Madrid', to: 'Helsinki' },
  { slug: 'madrid-munich', origin: 'MAD', destination: 'MUC', from: 'Madrid', to: 'Múnich' },
  { slug: 'barcelona-munich', origin: 'BCN', destination: 'MUC', from: 'Barcelona', to: 'Múnich' },
  { slug: 'barcelona-copenhague', origin: 'BCN', destination: 'CPH', from: 'Barcelona', to: 'Copenhague' },
];
