import React from 'react';

interface ReviewsSummaryProps {
  rating: number;
  reviewCount: number;
}

const ReviewsSummary: React.FC<ReviewsSummaryProps> = ({ rating, reviewCount }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        {/* Stars */}
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            {i < fullStars ? '★' : i === fullStars && hasHalfStar ? '☆' : '☆'}
          </span>
        ))}
      </div>
      <span className="text-lg font-medium text-gray-900">{rating}</span>
      <span className="text-gray-600">({reviewCount} reviews)</span>
    </div>
  );
};

export default ReviewsSummary;