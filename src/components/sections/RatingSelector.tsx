import React, { useState } from "react";

const stars = [
  { id: 1, label: "like" },
  { id: 2, label: "love" },
  { id: 3, label: "haha" },
  { id: 4, label: "wow" },
  { id: 5, label: "sad" },
];

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-8 w-8 transition-transform duration-300 ${
      filled ? "text-yellow-400" : "text-gray-400"
    }`}
    fill={filled ? "url(#grad1)" : "none"}
    viewBox="0 0 24 24"
    stroke={filled ? "none" : "currentColor"}
    strokeWidth={2}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#facc15", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

const RatingSelector: React.FC = () => {
  const [selected, setSelected] = useState(1);

  const handleChange = (id: number) => {
    setSelected(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`You rated: ${selected} star${selected > 1 ? "s" : ""}`);
    // Here you can add further submit logic, e.g., API call
  };

  return (
    <div className="flex justify-center items-center p-6 rounded-lg max-w-md mx-auto relative min-h-[150px]">
      <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-center">
        <div className="flex justify-center space-x-8 mb-6">
          {stars.map((star) => (
            <React.Fragment key={star.id}>
              <input
                type="radio"
                id={star.label}
                name="rating"
                checked={selected === star.id}
                onChange={() => handleChange(star.id)}
                className="hidden"
              />
              <label
                htmlFor={star.label}
                className="cursor-pointer"
                title={star.label}
              >
                <StarIcon filled={star.id <= selected} />
              </label>
            </React.Fragment>
          ))}
        </div>
        <button
          type="submit"
          className="self-center px-6 py-1 bg-tertiary text-yellow-400 font-semibold rounded hover:bg-tertiary/80 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RatingSelector;
