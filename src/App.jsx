import { useState } from "react";
import { Zap, Layers, Maximize, Divide, Plus, Minus, Repeat, LogIn, AlertTriangle } from "lucide-react";

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

// trends debe ser pegado aquí si quieres incluir todo

export default function FastIdeaGenerator() {
  const [selectedTrend, setSelectedTrend] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);

  const selectTrend = (trendKey) => {
    setSelectedTrend(trendKey);
    drawCard(trendKey);
  };

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 text-center">
      <h1 className="text-3xl font-bold mb-8">Fast Idea Generator</h1>

      {!selectedTrend ? (
        <div className="space-y-4">
          <p className="text-lg">¿Sobre qué tema quieres idear?</p>
          <button
            onClick={() => selectTrend("fricase")}
            className="bg-blue-500 text-white px-6 py-2 rounded-xl shadow-lg"
          >
            🌩️ Fricasé de Voltaje
          </button>
          <button
            onClick={() => selectTrend("fermentacion")}
            className="bg-green-500 text-white px-6 py-2 rounded-xl shadow-lg"
          >
            🧵 Fermentación de Fibras
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">{trends[selectedTrend].name}</h2>
          {currentCard && (
            <div className={\`border rounded-2xl p-6 shadow-xl max-w-lg \${cardStyle.color}\`}>
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
