import { ProductHeader } from "./components/ProductHeader";
import { ProductTitle } from "./components/ProductTitle";
import { ProductImageCarousel } from "./components/ProductImageCarousel";
import { ProductInfo } from "./components/ProductInfo";
import { ProductHighlights } from "./components/ProductHighlights";
import { ProductOptions } from "./components/ProductOptions";
import { ProductActions } from "./components/ProductActions";
import { ProductDetails } from "./components/ProductDetails";
import { CustomerReviews } from "./components/CustomerReviews";

export default function App() {
  const productImages = [
    "/ariel-1.jpg",
    "/ariel-2.jpg",
    "/ariel-3.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto">
        <ProductHeader />
      </div>

      <div className="max-w-md mx-auto">
        <ProductTitle />
        <ProductImageCarousel images={productImages} />
        <ProductInfo />
        <ProductActions />
        <ProductHighlights />
        <ProductDetails />
        <CustomerReviews />

        <div className="bg-white px-4 py-6 text-center text-sm text-gray-600 border-t-8 border-gray-100">
          <p className="mb-2">
            See personalized recommendations
          </p>
          <button className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Sign in
          </button>
          <p className="mt-2">
            New customer?{" "}
            <button className="text-[#007185]">
              Start here.
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}