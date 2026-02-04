import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function ReviewDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const foundReview = reviews.find((r) => r.id === parseInt(id));

    if (foundReview) {
      setReview(foundReview);
    } else {
      navigate("/contact");
    }
  }, [id, navigate]);

  if (!review) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/contact"
          className="inline-flex items-center text-indigo-900 hover:text-indigo-700 mb-8 text-lg font-semibold"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Contact
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-linear-to-r from-[#ffbbb6] to-[#b32a20] p-12 text-white">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-4xl font-bold">
                {review.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-5xl font-bold">{review.name}</h1>
              </div>
            </div>
          </div>

          <div className="p-12">
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
              Full Review
            </h2>
            <p className="text-2xl text-[#ffffff] leading-relaxed whitespace-pre-wrap mb-8">
              {review.comment}
            </p>

            <div className="pt-8 border-t border-gray-200">
              <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                Posted On
              </h2>
              <p className="text-gray-700 text-lg">
                {new Date(review.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewDetails;
