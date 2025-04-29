import { useState } from "react";
import {
  Zap, Layers, Maximize, Divide, Plus,
  Minus, Repeat, LogIn, AlertTriangle
} from "lucide-react";

// Estilos por tipo de generador
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

// Contenido de las tendencias y cartas
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
        description: "Eliminar un elemento",
        question: "¿Y si nadie pudiera tener auto privado?",
        example: "Solo flotas compartidas o comunitarias permitidas."
      },
      {
        type: "Traducción",
        description: "Aplicar una práctica de otro campo",
        question: "¿Y si aplicamos mantenimiento predictivo como en aviación?",
        example: "Flotas eléctricas gestionadas por IA para prevenir fallos."
      },
      {
        type: "Injerto",
        description: "Insertar una práctica externa",
        question: "¿Y si diseñamos barrios energéticos como ecosistemas agrícolas?",
        example: "Autos, techos solares y parques producen y almacenan energía en red."
      },
      {
        type: "Exageración",
        description: "Empujar a su estado más extremo",
        question: "¿Y si en 3 años se prohíben todos los autos de combustión?",
        example: "Transición obligatoria a movilidad eléctrica en todas las ciudades."
      }
    ]
  },
  fermentacion: {
    name: "🧵 Fermentación de Fibras",
    cards: [
      {
        type: "Inversión",
        description: "Dar la vuelta al planteamiento común",
        question: "¿Y si el residuo fuera el origen?",
        example: "La ropa nueva se crea solo a partir de textiles desechados."
      },
      {
        type: "Integración",
        description: "Integrar la oferta con otras ofertas",
        question: "¿Y si cada prenda tuviera un pasaporte digital?",
        example: "Historial visible de origen, transformación y reciclaje."
      },
      {
        type: "Extensión",
        description: "Extender la oferta",
        question: "¿Y si compostar ropa fuera parte del reciclaje cotidiano?",
        example: "Máquinas de fermentación textil en supermercados."
      },
      {
        type: "Diferenciación",
        description: "Segmentar la oferta",
        question: "¿Y si las marcas compitieran por durabilidad?",
        example: "Premios a prendas más reparadas y modulares."
      },
      {
        type: "Adición",
        description: "Agregar un nuevo elemento",
        question: "¿Y si la ropa incluyera sensores biodegradables?",
        example: "Te avisa cuándo compostarla o repararla."
      },
      {
        type: "Sustracción",
        description: "Eliminar un elemento",
        question: "¿Y si prohibimos las mezclas sintéticas no reciclables?",
        example: "Todas las telas deben poder reintegrarse al ecosistema."
      },
      {
        type: "Traducción",
        description: "Aplicar una práctica de otro campo",
        question: "¿Y si usamos fermentación microbiana como en la comida?",
        example: "Transformar ropa usada en nuevas fibras regeneradas."
      },
      {
        type: "Injerto",
        description: "Insertar una práctica externa",
        question: "¿Y si injertamos economía del cuidado en la moda?",
        example: "Valorar saberes textiles locales y empleo digno por encima de la velocidad."
      },
      {
        type: "Exageración",
        description: "Empujar a su estado más extremo",
        question: "¿Y si cada prenda tuviera fecha de muerte ecológica?",
        example: "Todo lo que uses debe indicar cuándo y cómo se reintegrará a la Tierra."
      }
    ]
  }
};

export default function FastIdeaGenerator() {
  const [selectedTrend, setSelectedTrend] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);

  const drawCard = (trendKey) => {
    const cards = trends[trendKey].cards;
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCard(cards[randomIndex]);
  };

  const reset = () => {
    setSelectedTrend(null);
    setCurrentCard(null);
  };

  const cardStyle = currentCard ? generatorStyles[currentCard.type] : {};
import { useEffect } from "react"; // asegúrate de que esté importado arriba

useEffect(() => {
  if (selectedTrend && trends[selectedTrend]) {
    drawCard(selectedTrend);
  }
}, [selectedTrend]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 text-center">
      <h1 className="text-3xl font-bold mb-8">Fast Idea Generator</h1>

      {!selectedTrend ? (
        <div className="space-y-4">
          <p className="text-lg">¿Sobre qué tema quieres idear?</p>
          <button
        onClick={() => setSelectedTrend("fricase")}
            }}
            className="bg-blue-500 text-white px-6 py-2 rounded-xl shadow-lg"
          >
            🌩️ Fricasé de Voltaje
          </button>
          <button
             onClick={() => setSelectedTrend("fermentacion")}
            }}
            className="bg-green-500 text-white px-6 py-2 rounded-xl shadow-lg"
          >
            🧵 Fermentación de Fibras
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">{trends[selectedTrend].name}</h2>
          {currentCard && (
            <div className={"border rounded-2xl p-6 shadow-xl max-w-lg " + (cardStyle.color || "")}>
              <p className="text-xl font-bold mb-1">
                {cardStyle.icon}{currentCard.type}
              </p>
              <p className="text-sm italic mb-2">{currentCard.description}</p>
              <p className="text-lg font-medium mb-4">Ejemplo de pregunta: {currentCard.question}</p>
              <p className="italic mb-6">Ejemplo de idea: {currentCard.example}</p>
              <p className="font-semibold">✨ Cuando tengas tu idea, anótala en el mural de Miro.</p>
            </div>
          )}

          <div className="space-x-4">
            <button
              onClick={() => drawCard(selectedTrend)}
              className="bg-purple-500 text-white px-4 py-2 rounded-xl shadow-md"
            >
              Otra carta
            </button>
            <button
              onClick={reset}
              className="bg-gray-400 text-white px-4 py-2 rounded-xl shadow-md"
            >
              Cambiar de tema
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
