// server/api/models/ingresos.model.ts
//import { Schema, model, models } from 'mongoose';
import mongoose, { Schema, model} from 'mongoose';


const ingresoSchema = new mongoose.Schema({
  monto: {
    type: Number,
    required: [true, 'El monto es obligatorio'],
    min: [0, 'El monto no puede ser negativo']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
    maxlength: [255, 'La descripción no puede exceder los 255 caracteres']
  },
  fecha: {
    type: Date,
    required: [true, 'La fecha es obligatoria']
  },
  categoria: {
    type: String,
    required: [true, 'La categoría es obligatoria'],
    enum: ['Salario', 'Freelance', 'Inversiones', 'Otros'], // Ejemplo de categorías permitidas
    message: '{VALUE} no es una categoría válida'
  }
});

const Ingreso = mongoose.model('Ingreso', ingresoSchema);

export default Ingreso;

