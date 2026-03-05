import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function ProductOptions() {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedStyle, setSelectedStyle] = useState("Headphones Only");

  const colors = ["Black", "Silver", "Midnight Blue"];
  const styles = [
    { name: "Headphones Only", price: "$298.00" },
    { name: "With Case Bundle", price: "$327.99" },
    { name: "With Travel Adapter", price: "$315.50" },
  ];

  return (
    <div className="bg-white px-4 py-3 border-t-8 border-gray-100">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold">Color: {selectedColor}</span>
        </div>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`flex-1 px-3 py-2 border rounded-lg text-sm transition-all ${
                selectedColor === color
                  ? "border-[#ff9900] bg-[#fff8e6]"
                  : "border-gray-300"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold">Style</span>
        </div>
        <div className="space-y-2">
          {styles.map((style) => (
            <button
              key={style.name}
              onClick={() => setSelectedStyle(style.name)}
              className={`w-full px-3 py-2 border rounded-lg text-left transition-all ${
                selectedStyle === style.name
                  ? "border-[#ff9900] bg-[#fff8e6]"
                  : "border-gray-300"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm">{style.name}</span>
                <span className="text-sm font-semibold">{style.price}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <button className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm flex items-center justify-between">
          <span>Qty: 1</span>
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}
