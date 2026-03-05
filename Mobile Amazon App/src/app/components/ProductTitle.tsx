import { Star, ChevronRight } from "lucide-react";

export function ProductTitle() {
  return (
    <div className="bg-white px-4 py-3">
      <p className="text-xs text-gray-600 mb-1">Visit the Sony Store</p>
      
      <h1 className="text-lg mb-2">
        Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones with Auto Noise Canceling Optimizer, Crystal Clear Hands-Free Calling, and Alexa Voice Control, Black
      </h1>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="text-sm">4.6</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                className={star <= 4 ? "fill-[#ff9900] text-[#ff9900]" : "fill-gray-300 text-gray-300"}
              />
            ))}
          </div>
        </div>
        <button className="text-sm text-[#007185] flex items-center">
          23,847 ratings
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
