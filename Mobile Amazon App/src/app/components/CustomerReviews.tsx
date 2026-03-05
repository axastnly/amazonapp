import { Star, ThumbsUp } from "lucide-react";
import { Progress } from "./ui/progress";

export function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      author: "Michael R.",
      date: "February 28, 2026",
      rating: 5,
      verified: true,
      title: "Best noise cancelling headphones I've ever owned",
      content:
        "The noise cancellation on these is absolutely incredible. I use them on my daily commute and they block out all the subway noise. The sound quality is top-notch and they're very comfortable even after wearing for hours.",
      helpful: 234,
    },
    {
      id: 2,
      author: "Sarah K.",
      date: "February 25, 2026",
      rating: 4,
      verified: true,
      title: "Great sound, pricey but worth it",
      content:
        "These headphones are expensive but the quality justifies the price. The battery life is excellent and the quick charge feature is a lifesaver. Only complaint is they can feel a bit tight at first.",
      helpful: 156,
    },
    {
      id: 3,
      author: "David L.",
      date: "February 20, 2026",
      rating: 5,
      verified: true,
      title: "Perfect for working from home",
      content:
        "I bought these for work calls and they're perfect. The microphone quality is crystal clear and the noise cancellation helps me focus. Highly recommend for anyone working from home.",
      helpful: 89,
    },
  ];

  return (
    <div className="bg-white border-t-8 border-gray-100 px-4 py-3">
      <h2 className="font-semibold text-lg mb-3">Customer reviews</h2>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              className="fill-[#ff9900] text-[#ff9900]"
            />
          ))}
        </div>
        <span className="text-sm">4.6 out of 5</span>
      </div>

      <p className="text-sm text-gray-600 mb-4">23,847 global ratings</p>

      <div className="space-y-2 mb-6">
        {[
          { stars: 5, percent: 73 },
          { stars: 4, percent: 15 },
          { stars: 3, percent: 6 },
          { stars: 2, percent: 3 },
          { stars: 1, percent: 3 },
        ].map((item) => (
          <div key={item.stars} className="flex items-center gap-3">
            <button className="text-sm text-[#007185] whitespace-nowrap">
              {item.stars} star
            </button>
            <Progress value={item.percent} className="flex-1 h-5" />
            <span className="text-sm text-gray-600 w-8">{item.percent}%</span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="font-semibold mb-4">Top reviews from the United States</h3>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="pb-4 border-b border-gray-200 last:border-b-0">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold">
                  {review.author[0]}
                </div>
                <span className="text-sm font-semibold">{review.author}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className={
                        star <= review.rating
                          ? "fill-[#ff9900] text-[#ff9900]"
                          : "fill-gray-300 text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold">{review.title}</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                Reviewed in the United States on {review.date}
              </p>
              {review.verified && (
                <p className="text-xs text-[#ff9900] mb-2">
                  ✓ Verified Purchase
                </p>
              )}
              <p className="text-sm mb-3">{review.content}</p>
              <button className="flex items-center gap-1 text-sm text-gray-600">
                <ThumbsUp size={14} />
                Helpful ({review.helpful})
              </button>
            </div>
          ))}
        </div>
        <button className="text-sm text-[#007185] mt-4">
          See all reviews
        </button>
      </div>
    </div>
  );
}
