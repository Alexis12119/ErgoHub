import React, { useState, useEffect } from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  tags: string[];
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 0,
    title: '',
    content: ''
  });
  const [activeFilter, setActiveFilter] = useState('All');

  // Prevent body scrolling when modals are open
  useEffect(() => {
    if (isReviewModalOpen || isReviewsModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isReviewModalOpen, isReviewsModalOpen]);

  const INITIAL_REVIEW_COUNT = 6;

  // Get all unique tags from reviews
  const allTags = Array.from(new Set(reviews.flatMap(review => review.tags)));

  // Filter reviews based on active filter
  const filteredReviews = reviews.filter(review => {
    if (activeFilter === 'All') return true;
    if (activeFilter === '5 Stars') return review.rating === 5;
    if (activeFilter === '4 Stars') return review.rating === 4;
    if (activeFilter === '3 Stars') return review.rating === 3;
    if (activeFilter === 'Recent') {
      const reviewDate = new Date(review.date);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return reviewDate >= thirtyDaysAgo;
    }
    return review.tags.includes(activeFilter);
  });

  // Get reviews to display (always limited on main page)
  const displayedReviews = filteredReviews.slice(0, INITIAL_REVIEW_COUNT);

  const handleOpenModal = () => {
    setIsReviewModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsReviewModalOpen(false);
    setIsReviewSubmitted(false);
    setReviewForm({ name: '', rating: 0, title: '', content: '' });
  };

  const handleRatingClick = (rating: number) => {
    setReviewForm({ ...reviewForm, rating });
  };

  const handleSubmit = () => {
    setIsReviewSubmitted(true);
    setTimeout(() => {
      handleCloseModal();
    }, 4000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Customer Reviews ({filteredReviews.length})
        </h2>
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Write a Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">{review.name}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      {i < review.rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">{review.title}</h3>
            <p className="text-gray-600 mb-3">{review.content}</p>
            <div className="flex flex-wrap gap-1">
              {review.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {filteredReviews.length > INITIAL_REVIEW_COUNT && (
        <div className="text-center">
          <button
            onClick={() => setIsReviewsModalOpen(true)}
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            See More Reviews ({filteredReviews.length - INITIAL_REVIEW_COUNT} remaining)
          </button>
        </div>
      )}

      {/* Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-xl font-bold text-gray-900">
                {isReviewSubmitted ? "Review Submitted" : "Write a Review"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              {isReviewSubmitted ? (
                <div className="p-6 space-y-6 text-center">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-4xl text-green-600">✓</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 animate-pulse">
                    Review Submitted!
                  </h3>
                  <p className="text-gray-600">Thank you for your feedback!</p>
                </div>
              ) : (
                <div className="p-6 space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Rating
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => handleRatingClick(star)}
                          className="text-2xl focus:outline-none"
                        >
                          <span className={star <= reviewForm.rating ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Review Title
                    </label>
                    <input
                      type="text"
                      value={reviewForm.title}
                      onChange={(e) => setReviewForm({ ...reviewForm, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Summarize your review"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Review
                    </label>
                    <textarea
                      value={reviewForm.content}
                      onChange={(e) => setReviewForm({ ...reviewForm, content: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      placeholder="Share your experience with this product"
                    ></textarea>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            {!isReviewSubmitted && (
              <div className="flex space-x-3 p-6 border-t border-gray-200 bg-white flex-shrink-0">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit Review
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reviews Modal */}
      {isReviewsModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-xl font-bold text-gray-900">
                All Customer Reviews ({filteredReviews.length})
              </h2>
              <button
                onClick={() => setIsReviewsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-6">
                 {/* Filter Tags - Sticky */}
                 <div className="sticky top-0 bg-white pb-6 border-b border-gray-100 mb-6 -mx-6 px-6">
                   <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                     {['All', '5 Stars', '4 Stars', '3 Stars', 'Recent', ...allTags].map((filter) => (
                       <button
                         key={filter}
                         onClick={() => setActiveFilter(filter)}
                         className={`px-3 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                           activeFilter === filter
                             ? 'bg-blue-600 text-white'
                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                         }`}
                       >
                         {filter}
                       </button>
                     ))}
                   </div>
                 </div>

                {/* All Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredReviews.map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{review.name}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-400">
                                {i < review.rating ? '★' : '☆'}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">{review.title}</h3>
                      <p className="text-gray-600 mb-3">{review.content}</p>
                      <div className="flex flex-wrap gap-1">
                        {review.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;