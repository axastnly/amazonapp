import { useState } from "react";
import {
  Search,
  Mic,
  Camera,
  MapPin,
  ChevronDown,
  Home,
  User,
  ShoppingCart,
  Menu,
  Star,
  ChevronRight,
  Eye,
  RotateCcw,
} from "lucide-react";

interface Props {
  onBack: () => void;
}

// ── Hero carousel ──────────────────────────────────────────────────────────
function HeroBannerCarousel() {
  const [slide, setSlide] = useState(0);
  const slides = ["/banner.jpg", "/banner2.jpg"];

  return (
    <div className="relative mx-3 mt-3 rounded-2xl overflow-hidden shadow" style={{ height: 200 }}>
      <img
        src={slides[slide]}
        alt={`Promotional banner ${slide + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        aria-label="Previous banner"
        onClick={() => setSlide((s) => (s === 0 ? slides.length - 1 : s - 1))}
        className="absolute left-0 top-0 bottom-0 w-1/3"
      />
      <button
        aria-label="Next banner"
        onClick={() => setSlide((s) => (s + 1) % slides.length)}
        className="absolute right-0 top-0 bottom-0 w-1/3"
      />
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setSlide(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === slide ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Deal card ──────────────────────────────────────────────────────────────
function DealCard({
  img,
  discount,
  tag,
  bg,
}: {
  img: string;
  discount: string;
  tag: string;
  bg: string;
}) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${bg} flex flex-col`} style={{ height: 140 }}>
      <span className="absolute top-2 left-2 bg-[#CC0C39] text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
        {discount}
      </span>
      <div className="flex-1 flex items-center justify-center p-2">
        <img src={img} alt="" className="w-20 h-20 object-contain" />
      </div>
      <p className="text-[10px] font-semibold text-[#CC0C39] bg-white/90 w-full text-center py-1">
        {tag}
      </p>
    </div>
  );
}

// ── Sponsored product card ─────────────────────────────────────────────────
function SponsoredCard({ img, name, price }: { img: string; name: string; price: string }) {
  return (
    <div className="shrink-0 w-32 bg-white rounded-xl border border-gray-200 p-2 flex flex-col items-center gap-1">
      <div className="w-full h-24 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-contain" />
      </div>
      <p className="text-[10px] text-gray-700 text-center leading-tight line-clamp-2 w-full">{name}</p>
      <p className="text-[11px] font-bold text-gray-900 self-start">{price}</p>
      <span className="text-[9px] text-gray-400 self-start">Sponsored</span>
    </div>
  );
}

// ── Order Again product card ───────────────────────────────────────────────
function OrderAgainCard({
  img,
  name,
  price,
  lastOrdered,
}: {
  img: string;
  name: string;
  price: string;
  lastOrdered: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-2 flex flex-col">
      <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center mb-2">
        <img src={img} alt={name} className="w-full h-full object-contain" />
      </div>
      <p className="text-[11px] text-gray-800 font-medium leading-tight line-clamp-2 flex-1">{name}</p>
      <p className="text-[13px] font-bold text-gray-900 mt-1">{price}</p>
      <p className="text-[10px] text-gray-400 mt-0.5">Ordered {lastOrdered}</p>
      <button className="mt-2 w-full bg-[#FF9900] text-black text-[11px] font-semibold rounded-lg py-1.5 flex items-center justify-center gap-1">
        <RotateCcw size={10} />
        Add to basket
      </button>
    </div>
  );
}

// ── Interactive star rating ────────────────────────────────────────────────
function StarRatingInput() {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => setSelected(n)}
        >
          <Star
            size={18}
            className={
              n <= (hovered || selected)
                ? "text-[#FF9900] fill-[#FF9900]"
                : "text-gray-300 fill-gray-300"
            }
          />
        </button>
      ))}
      {selected > 0 && (
        <span className="text-[11px] text-[#007185] ml-2">Thanks!</span>
      )}
    </div>
  );
}

// ── Keep shopping category pill ────────────────────────────────────────────
function CategoryPill({ img, label }: { img: string; label: string }) {
  return (
    <div className="shrink-0 w-24 bg-white rounded-xl border border-gray-200 flex flex-col items-center py-2 gap-1.5 overflow-hidden">
      <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
        <img src={img} alt={label} className="w-full h-full object-contain" />
      </div>
      <p className="text-[11px] font-medium text-gray-700">{label}</p>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export function ReengagementHome({ onBack }: Props) {
  const categories = ["Everyday Essentials", "Grocery", "Beauty", "Electronics", "Home"];

  const orderAgainProducts = [
    { img: "/ariel-1.jpg",  name: "Ariel All-in-1 PODS Laundry Detergent",      price: "£12.99", lastOrdered: "2 months ago" },
    { img: "/p1.jpg",       name: "NIVEA Cashmere & Cottonseed Shower 250ml",    price: "£3.50",  lastOrdered: "3 months ago" },
    { img: "/p3.jpg",       name: "OGX Argan Oil of Morocco Shampoo 385ml",      price: "£8.49",  lastOrdered: "1 month ago"  },
    { img: "/p2.jpg",       name: "Binit 40 Everyday Refuse Sacks",              price: "£5.99",  lastOrdered: "6 weeks ago"  },
  ];

  return (
    <div className="min-h-screen bg-[#f3f3f3] max-w-md mx-auto flex flex-col">

      {/* ── Sticky orange header ── */}
      <div className="sticky top-0 z-30 bg-[#FF9900]">
        {/* Amazon logo — actual image in white pill so it reads cleanly on orange */}
        <div className="flex items-center justify-center pt-3 pb-1.5">
          <div className="bg-white rounded-lg px-3 py-1">
            <img
              src="/amazon-logo.webp"
              alt="Amazon"
              className="h-6 w-auto object-contain"
            />
          </div>
        </div>

        {/* Search bar */}
        <div className="px-3 pb-2">
          <div className="flex items-center bg-white rounded-full px-3 py-2 gap-2">
            <Search size={18} className="text-gray-500 shrink-0" />
            <span className="flex-1 text-[14px] text-gray-400">Search or ask a question</span>
            <Camera size={18} className="text-gray-500 shrink-0" />
            <Mic size={18} className="text-gray-500 shrink-0 ml-1" />
          </div>
        </div>

        {/* Category chips — black text on orange = 10.13:1 contrast (WCAG AAA) */}
        <div className="flex items-center gap-2 px-3 pb-2 overflow-x-auto no-scrollbar">
          <button className="shrink-0 flex items-center gap-1 bg-white/20 text-black text-[12px] font-medium px-3 py-1.5 rounded-full">
            <MapPin size={12} />
            N1 3 <ChevronDown size={12} />
          </button>
          {categories.map((c) => (
            <button key={c} className="shrink-0 bg-white/20 text-black text-[12px] font-medium px-3 py-1.5 rounded-full">
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto pb-[60px]">

        {/* Hero banner carousel */}
        <HeroBannerCarousel />

        {/* Sponsored horizontal scroll */}
        <div className="mt-4 px-3">
          <p className="text-[13px] text-gray-500 mb-2">For you · <span className="text-[11px]">Sponsored</span></p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <SponsoredCard img="/p1.jpg"  name="NIVEA Cashmere Shower 250ml"         price="£3.50"  />
            <SponsoredCard img="/p7.jpg"  name="CeraVe Hydrating Cleanser 236ml"     price="£9.50"  />
            <SponsoredCard img="/p12.jpg" name="The Inkey List Ceramide Moisturizer" price="£12.00" />
            <SponsoredCard img="/p3.jpg"  name="OGX Argan Oil Shampoo 385ml"         price="£8.49"  />
          </div>
        </div>

        {/* Recommended deals */}
        <div className="mt-4 px-3">
          <p className="text-[17px] font-bold text-gray-900 mb-2">Recommended deals for you</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">

            {/* Card 1 — Deals for you */}
            <div className="shrink-0 w-60 bg-white rounded-xl border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[13px] font-bold text-gray-900">Deals for you</p>
                <ChevronRight size={14} className="text-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <DealCard img="/p11.jpg" discount="24% off" tag="Limited time"  bg="bg-gray-100" />
                <DealCard img="/p10.jpg" discount="15% off" tag="Ends in 40:44" bg="bg-gray-100" />
                <DealCard img="/p4.jpg"  discount="22% off" tag="Limited time"  bg="bg-gray-100" />
                <DealCard img="/p5.jpg"  discount="37% off" tag="Limited time"  bg="bg-gray-100" />
              </div>
            </div>

            {/* Card 2 — Based on your shopping */}
            <div className="shrink-0 w-60 bg-white rounded-xl border border-gray-200 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[13px] font-bold text-gray-900">Based on your shopping</p>
                <ChevronRight size={14} className="text-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <DealCard img="/p1.jpg"  discount="20% off" tag="Limited time" bg="bg-blue-50" />
                <DealCard img="/p3.jpg"  discount="18% off" tag="Limited time" bg="bg-blue-50" />
                <DealCard img="/p7.jpg"  discount="15% off" tag="Limited time" bg="bg-blue-50" />
                <DealCard img="/p8.jpg"  discount="30% off" tag="Limited time" bg="bg-blue-50" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Ready to restock? section ── */}
        <div className="mt-5 px-3">
          <p className="text-[17px] font-bold text-gray-900">Ready to restock?</p>

          {/* Nudge + review prompt */}
          <div className="mt-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-[12px] text-gray-700">
              <Eye size={13} className="text-amber-500 shrink-0" />
              <span>
                <span className="font-semibold text-amber-700">142 people</span> looking at your past buys right now
              </span>
            </div>
            <div className="border-t border-amber-100 pt-2">
              <p className="text-[12px] text-gray-600 mb-1">How was your last Ariel order?</p>
              <StarRatingInput />
            </div>
          </div>

          {/* 2×2 product grid */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            {orderAgainProducts.map((p) => (
              <OrderAgainCard key={p.name} {...p} />
            ))}
          </div>
          <button className="mt-2 text-[13px] font-semibold text-[#007185]">
            See more past orders →
          </button>
        </div>

        {/* Keep shopping for */}
        <div className="mt-5 px-3">
          <p className="text-[17px] font-bold text-gray-900 mb-2">Keep shopping for</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <CategoryPill img="/p12.jpg"   label="Skincare"  />
            <CategoryPill img="/ariel-1.jpg" label="Laundry"   />
            <CategoryPill img="/p5.jpg"    label="Bedding"   />
            <CategoryPill img="/p11.jpg"   label="Tech"      />
            <CategoryPill img="/p6.jpg"    label="Fashion"   />
          </div>
        </div>

        <div className="h-6" />
      </div>

      {/* ── Bottom nav ── */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-30 flex items-center justify-around py-3 px-2 border-t border-gray-100 bg-white">
        <button className="p-2 text-[#FF9900]" aria-label="Home"><Home size={24} /></button>
        <button className="p-2 text-gray-600" aria-label="Account"><User size={24} /></button>
        <button className="relative p-2 text-gray-600" aria-label="Cart">
          <ShoppingCart size={24} />
          <span className="absolute top-0 right-0 bg-[#FF9900] text-black text-[9px] font-bold rounded-full min-w-[15px] h-[15px] flex items-center justify-center px-[2px]">
            14
          </span>
        </button>
        <button className="p-2 text-gray-600" aria-label="Menu"><Menu size={24} /></button>
        <button onClick={onBack} aria-label="Back to prototype hub" className="p-2 relative w-10 h-10 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#FF6900] flex items-end justify-end p-[2px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#3366CC]" />
          </div>
        </button>
      </div>
    </div>
  );
}
