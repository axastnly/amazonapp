import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function ProductActions() {
  return (
    <div className="bg-white px-4 py-3 border-t-8 border-gray-100">
      <div className="flex items-center gap-2 mb-3 text-sm">
        <MapPin size={16} className="text-gray-600" />
        <span className="text-[#007185]">
          Deliver to John - New York 10001
        </span>
      </div>

      <p className="text-[#007700] text-sm mb-3 font-semibold">In Stock</p>

      <Button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black rounded-full py-3 mb-2">
        Add to Cart
      </Button>

      <Button className="w-full bg-[#ffa41c] hover:bg-[#ff8f00] text-black rounded-full py-3">
        Buy Now
      </Button>

      <div className="mt-3 space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <input type="checkbox" id="gift" className="rounded" />
          <label htmlFor="gift" className="text-[#007185]">
            Add gift options
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="protection" className="rounded" />
          <label htmlFor="protection">
            Add 3-Year Protection Plan for $34.99
          </label>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-600 mb-1">
          <span className="font-semibold">Secure transaction</span>
        </p>
        <p className="text-xs text-gray-600">
          Ships from: <span className="text-[#007185]">Amazon.com</span>
        </p>
        <p className="text-xs text-gray-600">
          Sold by: <span className="text-[#007185]">Sony Electronics</span>
        </p>
      </div>
    </div>
  );
}
