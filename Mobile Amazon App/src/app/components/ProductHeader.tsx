import { ArrowLeft, Search, ShoppingCart } from "lucide-react";

export function ProductHeader() {
  return (
    <div className="sticky top-0 z-50 bg-[#232f3e] px-4 py-3 flex items-center justify-between">
      <button className="text-white">
        <ArrowLeft size={24} />
      </button>
      <div className="flex-1 mx-3">
        <div className="bg-white rounded-md px-3 py-2 flex items-center">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-1 outline-none text-sm"
          />
        </div>
      </div>
      <button className="text-white relative">
        <ShoppingCart size={24} />
        <span className="absolute -top-1 -right-1 bg-[#ff9900] text-xs rounded-full w-4 h-4 flex items-center justify-center text-black">
          2
        </span>
      </button>
    </div>
  );
}
