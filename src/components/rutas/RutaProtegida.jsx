import React from 'react';
import { Navigate } from 'react-router-dom';

function RutaProtegida({ children }) {
  const usuarioGuardado = localStorage.getItem("usuario-supabase");

  if (!usuarioGuardado) {
    // Si no hay usuario, redirigir al login
    return <Navigate to="/login" replace />;
  }

  // Si hay usuario, mostrar el contenido protegido
  return children;
}

export default RutaProtegida;
