import React from "react";

export const Banner = () => {
   return (
      <section className="mx-auto max-w-[1320px] w-[100%] lg:w-[85%] py-3  md:py-4 ">
         <div
            className="hero min-h-[500px] md:min-h-screen rounded-3xl"
            style={{
               backgroundImage: "url(https://i.ibb.co/wdBZ35b/banner.png)",
            }}
         >
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-center text-white py-9 md:py-16 px-5 md:px-10 ">
               <div className="max-w-[850px] ">
                  <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                     Discover an exceptional cooking class tailored for you!
                  </h1>

                  <p className="my-6 md:my-10">
                     Learn and Master Basic Programming, Data Structures,
                     Algorithm, OOP, Database and solve 500+ coding problems to
                     become an exceptionally well world-class Programmer.
                  </p>

                  <button className="btn btn-lg bg-our-primary border-none rounded-full text-base md:text-lg text-our-black w-[190px] mx-2 mb-5 md:mb-none">
                     Explore Now
                  </button>

                  <button className="btn btn-lg bg-our-primary border-none rounded-full text-base md:text-lg text-our-black w-[190px] mx-2">
                     Your Feedback
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};
