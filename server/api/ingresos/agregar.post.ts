// server/api/ingresos.ts
import { defineEventHandler, getQuery, readBody } from 'h3';
import Ingreso from '../models/ingresos.model';

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  if (method === 'GET') {
    // Obtiene todos los ingresos
    return await Ingreso.find();
  }

  if (method === 'POST') {
    // Crea un nuevo ingreso
    const body = await readBody(event);
    const nuevoIngreso = new Ingreso(body);
    return await nuevoIngreso.save();
  }

  return {
    message: 'Método no permitido',
  };
});
