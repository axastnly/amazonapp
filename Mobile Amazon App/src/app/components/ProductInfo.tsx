import { Badge } from "./ui/badge";

export function ProductInfo() {
  return (
    <div className="bg-white px-4 py-3">
      <Badge className="bg-[#cc0c39] hover:bg-[#cc0c39] mb-2">
        Limited time deal
      </Badge>

      <div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-xs text-gray-600">Deal</span>
          <span className="text-2xl text-[#cc0c39]">$298</span>
          <span className="text-xs text-gray-600">List:</span>
          <span className="text-xs text-gray-600 line-through">$399.99</span>
        </div>
        <p className="text-xs text-gray-600 mb-2">
          Save $101.99 (26%) with coupon
        </p>
        <p className="text-sm mb-1">
          <span className="text-[#007185]">FREE Returns</span>
        </p>
        <p className="text-sm text-[#007185]">
          FREE delivery <span className="font-semibold">Friday, March 7</span>
        </p>
        <p className="text-xs text-gray-600">
          Or fastest delivery <span className="font-semibold">Tomorrow, March 6</span>
        </p>
      </div>
    </div>
  );
}
