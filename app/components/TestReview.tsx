'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for a review object
type Review = {
  id: number;
  title: string;
  // Add other properties if present in your review objects
};

const TestReview = () => {
  const [reviews, setReviews] = useState<Review[]>([]); // Initialize as an empty array of Review objects

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get('http://localhost:8000/review');
      setReviews(res.data.review as Review[]);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <h2>All Reviews using get /review</h2>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <h3>{review.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TestReview;