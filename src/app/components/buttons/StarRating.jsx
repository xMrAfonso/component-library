import { useState } from 'react';

export default function StarRating({ totalStars = 5, initialRating = 0, onRatingChange }) {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const handleClick = (index) => {
        setRating(index);
        if (onRatingChange) {
            onRatingChange(index);
        }
    };

    return (
        <div className="flex items-center gap-1">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                const isFilled = starValue <= (hover || rating);
                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleClick(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                        className="transition-all duration-200 ease-in-out transform hover:scale-110 focus:outline-none"
                        aria-label={`Rate ${starValue} out of ${totalStars}`}
                    >
                        <svg
                            className={`w-8 h-8 transition-colors ${
                                isFilled
                                    ? 'fill-yellow-400 stroke-yellow-400'
                                    : 'fill-none stroke-gray-400'
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </button>
                );
            })}
            <span className="ml-2 text-gray-600 font-medium">{rating} / {totalStars}</span>
        </div>
    );
}
