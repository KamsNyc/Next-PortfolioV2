import React, { useState } from 'react';

interface ReviewFormProps {
  onCreateReview: (formData: any) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onCreateReview }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    name: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateReview(formData);
    // Clear the form fields or reset them as needed
    setFormData({
      title: '',
      body: '',
      name: '',
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        placeholder="Body"
        value={formData.body}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit">Create Review</button>
    </form>
  );
};

export default ReviewForm;
