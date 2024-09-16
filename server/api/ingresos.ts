// server/api/ingresos.ts
import { defineEventHandler, getQuery, readBody } from 'h3';
import IngresoModel from './models/ingresos.model';

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  if (method === 'GET') {
    // Obtiene todos los ingresos
    return await IngresoModel.find();
  }

  if (method === 'POST') {
    // Crea un nuevo ingreso
    const body = await readBody(event);
    const nuevoIngreso = new IngresoModel(body);
    return await nuevoIngreso.save();
  }

  return {
    message: 'Método no permitido',
  };
});
