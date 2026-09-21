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
cat > /mnt/user-data/outputs/rutas.js << 'EOF'
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

  // --- Rutas existentes: dentro de Latinoamérica ---
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

  // --- Nuevas: más Europa desde España ---
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

  // --- Nuevas: Norteamérica desde España ---
  { slug: 'madrid-nueva-york', origin: 'MAD', destination: 'JFK', from: 'Madrid', to: 'Nueva York' },
  { slug: 'madrid-miami', origin: 'MAD', destination: 'MIA', from: 'Madrid', to: 'Miami' },
  { slug: 'madrid-los-angeles', origin: 'MAD', destination: 'LAX', from: 'Madrid', to: 'Los Ángeles' },
  { slug: 'barcelona-nueva-york', origin: 'BCN', destination: 'JFK', from: 'Barcelona', to: 'Nueva York' },
  { slug: 'madrid-toronto', origin: 'MAD', destination: 'YYZ', from: 'Madrid', to: 'Toronto' },
  { slug: 'madrid-chicago', origin: 'MAD', destination: 'ORD', from: 'Madrid', to: 'Chicago' },

  // --- Nuevas: Asia y Oriente Medio desde España ---
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

  // --- Nuevas: África desde España ---
  { slug: 'madrid-casablanca', origin: 'MAD', destination: 'CMN', from: 'Madrid', to: 'Casablanca' },
  { slug: 'madrid-el-cairo', origin: 'MAD', destination: 'CAI', from: 'Madrid', to: 'El Cairo' },
  { slug: 'madrid-marrakech', origin: 'MAD', destination: 'RAK', from: 'Madrid', to: 'Marrakech' },
  { slug: 'barcelona-marrakech', origin: 'BCN', destination: 'RAK', from: 'Barcelona', to: 'Marrakech' },
  { slug: 'madrid-tunez', origin: 'MAD', destination: 'TUN', from: 'Madrid', to: 'Túnez' },

  // --- Nuevas: Oceanía desde España ---
  { slug: 'madrid-sidney', origin: 'MAD', destination: 'SYD', from: 'Madrid', to: 'Sídney' },

  // --- Nuevas: rutas intercontinentales sin España (tráfico internacional) ---
  { slug: 'nueva-york-londres', origin: 'JFK', destination: 'LHR', from: 'Nueva York', to: 'Londres' },
  { slug: 'nueva-york-paris', origin: 'JFK', destination: 'CDG', from: 'Nueva York', to: 'París' },
  { slug: 'dubai-londres', origin: 'DXB', destination: 'LHR', from: 'Dubái', to: 'Londres' },
  { slug: 'singapur-londres', origin: 'SIN', destination: 'LHR', from: 'Singapur', to: 'Londres' },
  { slug: 'los-angeles-tokio', origin: 'LAX', destination: 'NRT', from: 'Los Ángeles', to: 'Tokio' },
  { slug: 'miami-buenos-aires', origin: 'MIA', destination: 'EZE', from: 'Miami', to: 'Buenos Aires' },
  { slug: 'nueva-york-ciudad-de-mexico', origin: 'JFK', destination: 'MEX', from: 'Nueva York', to: 'Ciudad de México' },
  { slug: 'dubai-nueva-york', origin: 'DXB', destination: 'JFK', from: 'Dubái', to: 'Nueva York' },
];
EOF
{"returncode":0,"stdout":"Total rutas: 72\n","stderr":""}
echo "Total rutas: $(grep -c 'slug:' /mnt/user-data/outputs/rutas.js)"
