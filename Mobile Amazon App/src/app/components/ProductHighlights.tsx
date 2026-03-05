import { Check } from "lucide-react";

export function ProductHighlights() {
  const highlights = [
    "Industry-leading noise cancellation with Auto NC Optimizer",
    "Crystal clear hands-free calling with 4 beamforming microphones",
    "Up to 30 hour battery life with quick charging (3 min charge for 3 hours of playback)",
    "Ultra-comfortable, lightweight design with soft fit leather",
    "Multipoint connection allows you to switch between devices",
    "Speak-to-chat and quick attention mode",
  ];

  return (
    <div className="bg-white px-4 py-3 border-t-8 border-gray-100">
      <h2 className="font-semibold mb-3">About this item</h2>
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex gap-2 text-sm">
            <Check size={16} className="text-gray-600 mt-0.5 flex-shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
