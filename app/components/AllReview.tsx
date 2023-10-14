"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface Review {
  id: number;
  title: string;
  date: number;
  name: string;
  body: string;
  slice: number;
}

const AllReview = () => {
  const [showReviewBox, setShowReviewBox] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [createReviewForm, setCreateReviewForm] = useState({
    title: "",
    body: "",
    name: "",
    date: "",
  });

  const fetchReview = async () => {
    const res = await axios.get("https://kams-review-api.onrender.com/review");
    setReviews(res.data);
  };

  const updateCreateFormField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCreateReviewForm({
      ...createReviewForm,
      [name]: value,
    });
  };

  const updateCreateTextareaField = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setCreateReviewForm({
      ...createReviewForm,
      [name]: value,
    });
  };

  const createReview = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await axios.post(
      "https://kams-review-api.onrender.com/review",
      createReviewForm
    );

    setReviews([...reviews, res.data]);

    setCreateReviewForm({ title: "", body: "", name: "", date: "" });

    setShowReviewBox(false);
  };

  useEffect(() => {
    fetchReview();
  }, []);

  return (
    <div className="flex items-center justify-center w-full py-2 px-4">
      <div className="max-h-[400px]  ">
        {reviews.length === 0 ? (
          <div className=''>
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
              <Skeleton className="w-[100px] h-[20px] rounded-full" />

          </div>
         
        ) : (
          reviews.map((review) => (
            <section className="w-full rounded-xl px-0 xl:px-6" key={review.id}>
              <div className="flex justify-between px-2 pt-2 pb-4 gap-4">
                <div className="flex gap-2 items-center">
                  <Avatar className="">
                    <AvatarImage className="" src="" />
                    <AvatarFallback className="bg-[#4D5BCE] text-white border-2 border-color font-bold">
                      {review.name.toString().slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <div id="wrapper" className="">
                    <div className="">
                      <h1 className="text-[14px] tracking-wide" key={review.id}>
                        {review.name}
                      </h1>
                    </div>
                    <div className="">
                      <p className="text-[12px]" key={review.id}>
                        {review.date.toString().slice(0, 10)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                      src="/DetailsIcon.png"
                      width={15}
                      height={15}
                      alt="Details Icon"
                    />
                    <span className="text-[14px] link-color hover:text-white">
                      details
                    </span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                      src="/StarIcon.png"
                      width={16}
                      height={16}
                      alt="Details Icon"
                    />
                    <span className="text-[14px] link-color hover-text-white">
                      star
                    </span>
                  </div>
                </div>
              </div>
              <ScrollArea className="bg-[#011221] flex justify-center px-5 md:px-20 tracking-tight py-6 text-[14px] border border-color rounded-xl mb-4 link-color">
                <div className="">
                  <h3 className="text-center font-bold uppercase" key={review.id}>
                    {review.title}
                  </h3>
                </div>
                <div className="max-h-full md:max-h-[150px] text-[#41B673]">
                  <p key={review.id}>{review.body}</p>
                </div>
              </ScrollArea>
            </section>
          ))
        )}
      </div>
      <div
        onClick={() => {
          setShowReviewBox(true);
        }}
        className="w-60 h-8 rounded-xl absolute bg-white/10 hover:bg-black/70 text-white/30 hover:text-white bottom-5 left-[50%] translate-x-[-50%] translate -y-[-50%] flex items-center justify-center cursor-pointer hover:scale-110 duration-300 ease-in z-20"
      >
        Write Review
      </div>
      <section className="relative">
        {showReviewBox && (
          <div className="fixed top-1/2 left-1/2 transform w-[400px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-[2px] p-2 rounded-md shadow-lg">
            <section id="open__main__container" className="h-full w-full bg-[#011627] rounded-lg">
              <form className="p-4 w-full text-left h-full" onSubmit={createReview}>
                <h1 className="py-2 pl-1 link-color">_name:</h1>
                <input
                  type="text"
                  name="name"
                  value={createReviewForm.name}
                  onChange={updateCreateFormField}
                  required
                  className="rounded-lg outline-[#607B96]border-none py-1 w-full bg-[#011221] text-[#465E77] pl-3"
                />
                <h1 className="py-2 pl-1 link-color">_date:</h1>
                <input
                  type="date"
                  name="date"
                  onChange={updateCreateFormField}
                  value={createReviewForm.date}
                  className="rounded-lg outline-[#607B96] border-none py-1 w-full bg-[#011221] text-[#465E77] pl-3"
                  required
                />
                <h1 className="py-2 pl-1 link-color">_review-title:</h1>
                <input
                  type="text"
                  name="title"
                  value={createReviewForm.title}
                  onChange={updateCreateFormField}
                  placeholder="please keep this short"
                  required
                  className="rounded-lg outline-[#607B96] border-none py-1 w-full uppercase bg-[#011221] text-[#1F6048] font-medium pl-3 placeholder:text-[#465E77]/70 placeholder:text-[14px] placeholder:lowercase"
                />
                <h1 className="py-2 pl-1 link-color">_message:</h1>
                <textarea
                  name="body"
                  value={createReviewForm.body}
                  onChange={updateCreateTextareaField}  // Use the new event handler for the textarea
                  className="rounded-lg outline-[#607B96] w-full max-h-[200px] border-none py-1 min-h-[100px] pl-3 bg-[#011221] text-[#1F6048]"
                />
                <div className="pt-5">
                  <button
                    type="submit"
                    className="py-2 px-2 bg-[#1C2B3A] hover:bg-[#1F6048] hover:scale-105 duration-500 ease-in-out rounded-lg text-center w-full"
                  >
                    submit-message
                  </button>
                </div>
              </form>
            </section>
            <button
              className="absolute top-4 left-4 z-20 translate-x-[-50%] translate-y-[-50%] hover:scale-105 duration-500 ease-in-out"
              onClick={() => {
                setShowReviewBox(false);
              }}
            >
              <AiFillCloseCircle size={40} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default AllReview;


// title,
// body,
// name,
// date,
