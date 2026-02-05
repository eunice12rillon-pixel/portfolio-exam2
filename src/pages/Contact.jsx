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

            <div className="bg-[#793b3b] rounded-3xl p-8 shadow-xl mb-6 transition-transform duration-300 hover:scale-105">
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
                        className={`w-12 h-12 rounded-full ${avatarColors[i]} flex items-center justify-center text-white font-bold shrink transition-transform duration-300 transform hover:rotate-12`}
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
                href="https://www.facebook.com/euruss.iu/"
                className="flex items-center gap-6 bg-[#e3bcb9] backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="w-15 h-15 rounded-full border border-dashed bg-black border-black flex items-center justify-center shrink-0">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                  </svg>{" "}
                </div>
                <span className="text-2xl font-semibold text-[#490c07]">
                  Facebook
                </span>
              </a>

              <a
                href="mailto:eunice12rillon@gmail.com"
                className="flex items-center gap-6 bg-[#b6342b] backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full border border-dashed bg-black border-black flex items-center justify-center shrink">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>{" "}
                </div>
                <span className="text-2xl font-semibold text-black">
                  eunice12rillon@gmail.com
                </span>
              </a>

              <a
                href="https://www.instagram.com/euruss.iu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 bg-[#e3bcb9] backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full border border-dashed border-black flex items-center justify-center shrink-0 bg-black">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="text-2xl font-semibold text-black">
                  @nesxis.wav
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
