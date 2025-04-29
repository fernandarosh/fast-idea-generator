import { useState, useEffect } from "react";
import {
  Zap, Layers, Maximize, Divide, Plus,
  Minus, Repeat, LogIn, AlertTriangle
} from "lucide-react";

const generatorStyles = {
  "Inversión": { icon: <Zap className="inline w-5 h-5 mr-2" />, color: "bg-red-100 text-red-800" },
  "Integración": { icon: <Layers className="inline w-5 h-5 mr-2" />, color: "bg-blue-100 text-blue-800" },
  "Extensión": { icon: <Maximize className="inline w-5 h-5 mr-2" />, color: "bg-green-100 text-green-800" },
  "Diferenciación": { icon: <Divide className="inline w-5 h-5 mr-2" />, color: "bg-yellow-100 text-yellow-800" },
  "Adición": { icon: <Plus className="inline w-5 h-5 mr-2" />, color: "bg-pink-100 text-pink-800" },
  "Sustracción": { icon: <Minus className="inline w-5 h-5 mr-2" />, color: "bg-gray-200 text-gray-800" },
  "Traducción": { icon: <Repeat className="inline w-5 h-5 mr-2" />, color: "bg-indigo-100 text-indigo-800" },
  "Injerto": { icon: <LogIn className="inline w-5 h-5 mr-2" />, color: "bg-teal-100 text-teal-800" },
  "Exageración": { icon: <AlertTriangle className="inline w-5 h-5 mr-2" />, color: "bg-orange-100 text-orange-800" }
};

const trends = {
  fricase: {
    name: "🌩️ Fricasé de Voltaje",
    cards: [
      {
        type: "Inversión",
        description: "Dar la vuelta al planteamiento común",
        question: "¿Y si transformamos en lugar de comprar?",
        example: "El gobierno apoya kits para convertir autos de combustión en eléctricos."
      },
      {
        type: "Integración",
        description: "Integrar la oferta con otras ofertas",
        question: "¿Y si las estaciones de carga fueran también centros comunitarios?",
        example: "Mercados locales o coworkings móviles en puntos de carga."
      },
      {
        type: "Extensión",
        description: "Extender la oferta",
        question: "¿Y si los autos eléctricos también fueran baterías vecinales?",
        example: "Almacenan energía y abastecen casas cuando están estacionados."
      },
      {
        type: "Diferenciación",
        description: "Segmentar la oferta",
        question: "¿Y si tuviéramos autos eléctricos comunitarios rurales?",
        example: "Modelos accesibles para caminos sin pavimentar y energía solar."
      },
      {
        type: "Adición",
        description: "Agregar un nuevo elemento",
        question: "¿Y si cada auto eléctrico tuviera sensores ambientales?",
        example: "Mapeo ciudadano de calidad del aire en tiempo real."
      },
      {
        type: "Sustracción",
        description: "Eliminar un elemento
