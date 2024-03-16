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
            <div className="hero-overlay bg-black bg-opacity-30 rounded-3xl"></div>
            <div className="hero-content text-center text-white py-10 md:py-16 px-5 md:px-10 ">
               <div className="max-w-[850px] ">
                  <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                     Discover the{" "}
                     <span className="text-our-primary">Art of Cooking</span>.
                     Your Gateway to Delicious{" "}
                     <span className="text-our-primary">Creations</span>
                  </h1>

                  <p className="my-6 md:my-10">
                     Welcome to{" "}
                     <span className="text-our-primary font-bold">
                        Tushar's Kitchen
                     </span>
                     , where cooking is more than a chore—it's a celebration.
                     Explore our wide range of{" "}
                     <span className="text-our-primary font-bold">
                        recipes, cooking tips,
                     </span>{" "}
                     and culinary adventures to elevate your kitchen skills and
                     delight your taste buds.
                  </p>

                  <button className="btn btn-lg bg-our-primary rounded-full text-base md:text-lg text-our-black w-[190px] mx-2 mb-5 md:mb-none border border-[#0be58a] hover:bg-transparent hover:text-white hover:border-white mt-4">
                     Explore Now
                  </button>

                  <button className="btn btn-lg bg-our-primary rounded-full text-base md:text-lg text-our-black w-[190px] mx-2 border border-[#0be58a] hover:bg-transparent hover:text-white hover:border-white">
                     Your Feedback
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};
