'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AiFillCloseCircle } from 'react-icons/ai';
import Card from './Card';

interface Review {
  id: number;
  title: string;
  date: number;
  name: string;
  body: string;
}

const AllReview = () => {
  const [showReviewBox, setShowReviewBox] = useState(false);
  const [reviews, setReviews] = useState<Review[] | null>(null); // Specify the type

  const fetchNotes = async () => {
    //fetch the notes
    const res = await axios.get('http://localhost:8000/review');
    //set the state
    setReviews(res.data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className='flex items-center justify-center w-full py-2 px-4'>
      <div className="max-h-[400px]">
        {reviews &&
          reviews.map((review) => (
            <Card
              key={review.id}
              title={review.title}
              body={review.body}
              name={review.name}
              date={review.date}
            />
          ))}
      </div>

      
             {/* WRITE REVIEW CONTAINER */}
             <div
              onClick={() => {
                setShowReviewBox(true);
              }}
              className="w-60 h-8 rounded-xl absolute bg-white/10 hover:bg-black/70 text-white/30 hover:text-white bottom-5 left-[50%] translate-x-[-50%] translate -y-[-50%] flex items-center justify-center cursor-pointer hover:scale-110 duration-300 ease-in"
            >
              Write Review
            </div>

          {/* WRITE REVIEW OPEN */}
          <section className="relative">
            {showReviewBox && (
              <div className="fixed top-1/2 left-1/2 transform w-[400px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-[2px] p-2 rounded-md shadow-lg">
                {/* OPEN CONTAINER CONTENT */}
                <section
                  id="open__main__container"
                  className="h-full w-full bg-[#011627] rounded-lg"
                >
                  {/* CONTAINER TOP MENU
                      <div id="topmenu">
                      <AboutItem />
                      </div> */}
                  {/* CONTAINER BOTTOM */}

                  {/* title,
                      body,
                      name,
                       date, */}

                  <form className="p-4 w-full text-left h-full">
                    {/* NAME */}
                    <h1 className="py-2 pl-1 link-color">_name:</h1>
                    <input
                      type="text"
                      name="name"
                      required
                      className="rounded-lg outline-[#607B96]border-none py-1 w-full bg-[#011221] text-[#465E77] pl-3"
                    />

                    {/* DATE */}
                    <h1 className="py-2 pl-1 link-color">_date:</h1>
                    <input
                      type="date"
                      name="date"
                      className="rounded-lg outline-[#607B96] border-none py-1 w-full bg-[#011221] text-[#465E77] pl-3"
                      required
                    />

                    {/* TITLE */}

                    <h1 className="py-2 pl-1 link-color">_review-title:</h1>
                    <input
                      type="text"
                      name="title"
                      placeholder="please keep this short"
                      required
                      className="rounded-lg outline-[#607B96] border-none py-1 w-full uppercase bg-[#011221] text-[#1F6048] font-medium pl-3 placeholder:text-[#465E77]/70 placeholder:text-[14px] placeholder:lowercase"
                    />

                    {/* MESSAGE */}

                    <h1 className="py-2 pl-1 link-color">_message:</h1>
                    <textarea
                      name="message"
                      className="rounded-lg outline-[#607B96] w-full max-h-[200px] border-none py-1 min-h-[100px] pl-3 bg-[#011221] text-[#1F6048]"
                    />

                    {/* SUBMIT BUTTON */}
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
                {/* CLOSE BUTTON */}
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