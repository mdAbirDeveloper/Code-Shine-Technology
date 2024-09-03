/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Head from 'next/head';

const reviews = [
  {
    name: 'Jhone Deo',
    location: 'London/England',
    img: 'review.png',
    review: 'Siam transformed our outdated site into a modern, responsive, and mobile-friendly platform. The process was smooth, and the results speak for themselves. We’ve seen a significant increase in user engagement since the launch.'
  },
  {
    name: 'Usama Mir',
    location: 'Lahore/Pakistan',
    img: 'review-1.png',
    review: 'I’ve worked with several developers before, but Shah_Jalal stands out for their ability to solve complex problems quickly and efficiently. The custom web application they developed for us is a game-changer for our business.'
  },
  {
    name: 'Abdullah',
    location: 'Dubai/Saudi Arabia',
    img: 'review-2.png',
    review: 'From the initial concept to the final launch, Shah_Jalal was with us every step of the way. Their expertise in both front-end and back-end technologies ensured that our new website was not only visually stunning but also highly functional.'
  },
  {
    name: 'Saikat Islam',
    location: 'Cumilla/Bangladesh',
    img: 'review (3).png',
    review: 'Working with Shah Jalal was an absolute pleasure. They took our vision and turned it into a fully functional, beautiful website that exceeded our expectations. Their expertise in both front-end and back-end development was evident throughout the project. Highly recommended for any web development needs!'
  },
  {
    name: 'Rajib Islam',
    location: 'Dubai/Arabic',
    img: 'reviews.jpeg',
    review: 'The website that Siam built for us is nothing short of amazing. The attention to detail and the seamless user experience have taken our online presence to the next level. Their technical skills and creativity made this project a success.'
  },
  {
    name: 'Rakib',
    location: 'Uhang/China',
    img: 'review (2).png',
    review: 'We needed a robust e-commerce platform, and Shah Jalal delivered beyond our expectations. The site is fast, secure, and visually appealing. They were professional, communicative, and really understood our business needs.'
  }
];

const Review = () => {
  return (
    <>
      <Head>
        <title>Client Reviews | Code Shine Technology</title>
        <meta name="description" content="Read what our clients have to say about our services. Our reviews highlight the satisfaction and success stories from our valued customers." />
        <meta name="keywords" content="client reviews, customer feedback, testimonials, web development reviews, design reviews" />
        <meta property="og:title" content="Client Reviews | Code Shine Technology" />
        <meta property="og:description" content="Read what our clients have to say about our services. Our reviews highlight the satisfaction and success stories from our valued customers." />
        <meta property="og:image" content="URL_to_image_for_social_media_preview" />
        <meta property="og:url" content="https://codeShineTechnology.com/components/review" />
        <meta property="og:type" content="website" />
      </Head>
      <section className="max-w-[1500px] mx-auto mt-20 shadow-lg hover:shadow-2xl shadow-blue-400 hover:shadow-blue-800 md:p-10">
        <h1 className="text-center my-5 font-serif uppercase font-bold md:text-6xl text-3xl">What Our Clients Say</h1>
        <div className="carousel carousel-center bg-green-400 rounded-box w-full space-x-4 p-4">
          {reviews.map((review, index) => (
            <div key={index} className="carousel-item w-5/6 md:w-auto">
              <div className="max-w-sm mx-auto p-6 bg-white shadow-xl shadow-green-400 rounded-lg hover:shadow-2xl hover:shadow-green-800 transition-shadow duration-300 ease-in-out">
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-md"
                    src={review.img}
                    alt={`Profile picture of ${review.name}`}
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-gray-800">{review.name}</h2>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">{review.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
