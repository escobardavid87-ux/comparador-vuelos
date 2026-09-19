import { useEffect, useState } from 'react';

export function useDivisa() {
  const [divisa, setDivisa] = useState('');
  const [listo, setListo] = useState(false);

  useEffect(() => {
    try {
      setDivisa(localStorage.getItem('divisa') || '');
    } catch (e) {}
    setListo(true);
  }, []);

  const cambiar = (nueva) => {
    setDivisa(nueva);
    try {
      if (nueva) localStorage.setItem('divisa', nueva);
      else localStorage.removeItem('divisa');
    } catch (e) {}
  };

  return [divisa, cambiar, listo];
}
