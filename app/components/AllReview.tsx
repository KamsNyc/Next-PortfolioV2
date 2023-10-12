'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Review {
  id: number;
  title: string;
  date: string;
  name: string;
  body: string;
}

const AllReview = () => {
  const [reviews, setReviews] = useState<Review[]>([]); // Initialize as an empty array

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get('http://localhost:8000/reviews');
      setReviews(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex items-center justify-center w-full py-2 px-4'>
      <div className="max-h-[400px]">
        {reviews &&
          reviews.map(review => (
            <section className="w-full rounded-xl px-0 xl:px-6" key={review.id}>
              {/* TOPSIDE */}
              <div className="flex justify-between px-2 pt-2 pb-4">
                {/* LEFT SIDE */}
                <div className="flex gap-4 items-center">
                  <Avatar className="">
                    <AvatarImage className="" src="" />
                    <AvatarFallback className="bg-[#4D5BCE]">
                      {review.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div id="wrapper" className="text-left">
                    <h1 className="text-[14px] tracking-wide">{review.title}</h1>

                    <p className="text-[12px]">{`created ${review.date.slice(0, 10)}`}</p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4">
                  {/* CONTAINER */}
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

                  {/* CONTAINER */}
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

              {/* BOTTOMSIDE */}
              <ScrollArea className="bg-[#011221] flex justify-center px-5 md:px-20 tracking-tight py-6 text-[14px] border border-color rounded-xl mb-4 link-color">
                <div className="max-h-[150px]">{review.body}</div>
              </ScrollArea>
            </section>
          ))}
      </div>
    </div>
  );
};

export default AllReview;



// title,
// body,
// name,
// date,