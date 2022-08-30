/* eslint-disable import/newline-after-import */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
const geocoder = require('../utils/geocoder')

const { Schema } = mongoose;

const localidadeManausSchema = new Schema(
    {
    __v: {
      type: Number,
      select: false,
    },
    tipo_acidente: {
      type: mongoose.Schema.Types.String,
      lowercase: true,
    },
    location: {
        type: {
            type: String, 
            default: ['Point'], 
        },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},
  { versionKey: false },
);

const LocalidadeManaus = mongoose.model('LocalidadeManaus', localidadeManausSchema);

export { LocalidadeManaus };
