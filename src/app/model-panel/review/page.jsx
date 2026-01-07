import { Star, ThumbsUp } from "lucide-react";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const page = () => {
  const ratings = [
    { stars: 5, count: 38 },
    { stars: 4, count: 3 },
    { stars: 3, count: 1 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  const totalReviews = ratings.reduce((sum, r) => sum + r.count, 0);

  const reviews = [
    {
      id: 1,
      name: "Julian Vance",
      role: "Creative Director, Vogue IT",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      time: "2 weeks ago",
      text: `Elena is a consummate professional. Her ability to take direction
    and translate it into compelling poses is unmatched. We worked together
    on a 12-hour editorial shoot and her energy remained high until the last frame.`,
      tag: "September Issue Editorial",
      helpful: 12,
    },
    {
      id: 2,
      name: "Sophia Reynolds",
      role: "Fashion Photographer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      time: "1 month ago",
      text: `Very professional and punctual. Communication was smooth and the
    final outcome exceeded expectations.`,
      tag: "Studio Shoot",
      helpful: 7,
    },
    {
      id: 1,
      name: "Julian Vance",
      role: "Creative Director, Vogue IT",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      time: "2 weeks ago",
      text: `Elena is a consummate professional. Her ability to take direction
    and translate it into compelling poses is unmatched. We worked together
    on a 12-hour editorial shoot and her energy remained high until the last frame.`,
      tag: "September Issue Editorial",
      helpful: 12,
    },
    {
      id: 2,
      name: "Sophia Reynolds",
      role: "Fashion Photographer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      time: "1 month ago",
      text: `Very professional and punctual. Communication was smooth and the
    final outcome exceeded expectations.`,
      tag: "Studio Shoot",
      helpful: 7,
    },
  ];

  return (
    <div>
      <h2 className="text-lg  md:text-xl lg:text-2xl font-medium">
        Client Review & Feedback
      </h2>

      <div className="grid grid-cols-1 lg:gap-6 lg:gap-8 lg:mt-8 mt-4 lg:grid-cols-3">
        <div
          className="col-span-1
    flex flex-col
    md:flex-row md:gap-6
    lg:flex-col "
        >
          <div className="flex flex-col lg:mb-8 mb-6 rounded-md border-gray-700 border p-4 bg-gray-800/50 items-center">
            <h2 className="text-2xl font-semibold lg:text-5xl">4.9</h2>
            <div className="flex gap-1 mt-3">
              <FaStar className="text-primary text-xl lg:text-2xl" />
              <FaStar className="text-primary text-xl lg:text-2xl" />
              <FaStar className="text-primary text-xl lg:text-2xl" />
              <FaStar className="text-primary text-xl lg:text-2xl" />
              <FaRegStar className="text-primary text-xl lg:text-2xl" />
            </div>
            <p className="text-stone-400 text-sm lg:text-base mt-2">
              Based on total (123) Reviews
            </p>
          </div>
          <div className="space-y-3 w-full">
            {ratings.map((r) => {
              const percentage =
                totalReviews === 0 ? 0 : (r.count / totalReviews) * 100;

              return (
                <div key={r.stars} className="flex items-center gap-3">
                  {/* Star Number */}
                  <span className="w-4 text-sm lg:text-base text-stone-300">
                    {r.stars}
                  </span>

                  {/* Star Icon */}
                  <Star size={16} className="text-primary fill-primary" />

                  {/* Progress Bar */}
                  <div className="flex-1 h-3 rounded-full bg-gray-700 overflow-hidden">
                    <div
                      className="h-full bg-primary/50 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  {/* Count */}
                  <span className="w-6 text-right text-sm lg:text-base text-stone-400">
                    {r.count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-2 mt-6 lg:mt-0">
           <div className="mb-2">
             <h2 className="text-base   md:text-lg font-medium">
        Reviews
      </h2>
           </div>
          <div className="space-y-3 lg:space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 lg:p-6"
              >
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-medium text-stone-300 ">
                        {review.name}
                      </h4>
                      <p className="text-xs text-stone-400">{review.role}</p>

                      {/* Stars */}
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < review.rating
                                ? "text-primary fill-primary"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <span className="text-sm text-gray-400">{review.time}</span>
                </div>

                {/* Review Text */}
                <p className="text-stone-400 lg:text-base text-sm mt-4 leading-relaxed">
                  “{review.text}”
                </p>

                {/* Footer */}
                {/* <div className="flex flex-wrap justify-between items-center mt-5 gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
              {review.tag}
            </span> */}

                {/* <div className="flex items-center gap-4 text-sm text-gray-500">
              <button className="flex items-center gap-1 hover:text-primary transition">
                <ThumbsUp size={14} />
                Helpful ({review.helpful})
              </button>
              <button className="hover:text-red-500 transition">
                Report
              </button>
            </div> */}
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
