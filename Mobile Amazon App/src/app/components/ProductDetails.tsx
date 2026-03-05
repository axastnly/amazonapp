import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ProductDetails() {
  const [expandedSections, setExpandedSections] = useState<string[]>(["details"]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="bg-white border-t-8 border-gray-100">
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("details")}
          className="w-full px-4 py-3 flex items-center justify-between"
        >
          <span className="font-semibold">Product details</span>
          {expandedSections.includes("details") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("details") && (
          <div className="px-4 pb-3 text-sm space-y-2">
            <div className="flex">
              <span className="w-1/3 text-gray-600">Brand</span>
              <span className="w-2/3">Sony</span>
            </div>
            <div className="flex">
              <span className="w-1/3 text-gray-600">Model Name</span>
              <span className="w-2/3">WH-1000XM5</span>
            </div>
            <div className="flex">
              <span className="w-1/3 text-gray-600">Color</span>
              <span className="w-2/3">Black</span>
            </div>
            <div className="flex">
              <span className="w-1/3 text-gray-600">Form Factor</span>
              <span className="w-2/3">Over Ear</span>
            </div>
            <div className="flex">
              <span className="w-1/3 text-gray-600">Connectivity</span>
              <span className="w-2/3">Wireless, Bluetooth</span>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("features")}
          className="w-full px-4 py-3 flex items-center justify-between"
        >
          <span className="font-semibold">Important information</span>
          {expandedSections.includes("features") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("features") && (
          <div className="px-4 pb-3 text-sm">
            <p className="mb-2 font-semibold">Safety Information</p>
            <p className="text-gray-600 mb-3">
              Keep away from fire or flames. Do not expose to extreme temperatures.
            </p>
            <p className="mb-2 font-semibold">Legal Disclaimer</p>
            <p className="text-gray-600">
              Product packaging may vary from what is shown in images.
            </p>
          </div>
        )}
      </div>

      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("warranty")}
          className="w-full px-4 py-3 flex items-center justify-between"
        >
          <span className="font-semibold">Warranty & Support</span>
          {expandedSections.includes("warranty") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("warranty") && (
          <div className="px-4 pb-3 text-sm text-gray-600">
            <p>
              Amazon.com Return Policy: Regardless of your statutory right of withdrawal, you enjoy a 30-day right of return for many products. For exceptions and conditions, see Return details.
            </p>
            <p className="mt-2">
              Manufacturer's warranty can be requested from customer service.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
