import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(savedReviews.slice(0, 3));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name required";
    if (!formData.comment.trim()) newErrors.comment = "Comment required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newReview = {
      id: Date.now(),
      name: formData.name.trim(),
      comment: formData.comment.trim(),
      createdAt: new Date().toISOString(),
    };

    const allReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const updatedReviews = [...allReviews, newReview];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    setReviews(updatedReviews.slice(0, 3));
    setFormData({ name: "", comment: "" });
  };

  const avatarColors = ["bg-purple-400", "bg-pink-400", "bg-indigo-400"];

  return (
    <div className="min-h-[calc(100vh-80px)] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-bold text-[#f7cbc8] mb-8">Reviews</h2>

            <div className="bg-[#a26767] rounded-3xl p-8 shadow-xl mb-6 transition-transform duration-300 hover:scale-105">
              {reviews.length === 0 ? (
                <p className="text-[#ffffff] text-center py-3 mt-2.5 px-3 rounded-2xl bg-[#c13b31]">
                  No reviews yet
                </p>
              ) : (
                <div className="space-y-4 mb-6">
                  {reviews.map((review, i) => (
                    <Link
                      key={review.id}
                      to={`/reviews/${review.id}`}
                      className="flex items-start gap-4 bg-white/20 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/30 transition-transform duration-300 transform hover:scale-105"
                    >
                      <div
                        className={`w-12 h-12 rounded-full ${avatarColors[i]} flex items-center justify-center text-white font-bold flex-shrink-0 transition-transform duration-300 transform hover:rotate-12`}
                      >
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                      <p className="text-white text-sm flex-1 transition-all duration-300 transform hover:text-gray-300">
                        {review.comment}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <textarea
                  name="comment"
                  placeholder="Leave reviews here..."
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-2xl resize-none mb-3 focus:outline-none focus:ring-2 focus:ring-white border border-dashed transition-all duration-300 hover:ring-2 hover:ring-[#ffbb99]"
                  rows="3"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 rounded-2xl mb-3 focus:outline-none focus:ring-2 focus:ring-white border border-dashed transition-all duration-300 hover:ring-2 hover:ring-[#ffbb99]"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-[#b32a20] font-bold py-3 rounded-2xl hover:bg-[#542320] transition-all duration-500 transform active:scale-95"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#f0aaa5] mb-8">Contact</h2>

            <div className="space-y-6">
              <a
                href="tel:+639123456789"
                className="flex items-center gap-6 bg-[#e3bcb9] backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full border border-dashed border-black flex items-center justify-center shrink-0">
                  <span className="text-3xl">📞</span>
                </div>
                <span className="text-2xl font-semibold text-[#490c07]">
                  +639123456789
                </span>
              </a>

              <a
                href="mailto:eunice12rillon@gmail.com"
                className="flex items-center gap-6 bg-[#e3bcb9] backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full border border-dashed border-black flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">📧</span>
                </div>
                <span className="text-2xl font-semibold text-black">
                  eunice12rillon@gmail.com
                </span>
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 bg-[#e3bcb9] backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full border border-dashed border-black flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">✖️</span>
                </div>
                <span className="text-2xl font-semibold text-black">
                  @nesxis.wav
                </span>
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 bg-[#e3bcb9] backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full border border-dashed border-black flex items-center justify-center shrink-0">
                  <span className="text-3xl">💬</span>
                </div>
                <span className="text-2xl font-semibold text-black">
                  @nessi
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
