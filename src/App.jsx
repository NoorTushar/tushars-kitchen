import "./App.css";
import { Banner } from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";

function App() {
   return (
      <>
         <header className="mx-auto max-w-[1320px] w-[90%] lg:w-[85%] py-3  md:py-4">
            <Navbar></Navbar>
         </header>

         <main>
            <Banner></Banner>

            <section className="py-[40px] md:py-[100px] mx-auto max-w-[1320px] w-[90%] lg:w-[85%]">
               {/* title */}
               <div className="text-our-black text-center mb-12 px-6">
                  <h2 className="font-semibold text-3xl md:text-[40px] mb-4 md:mb-6">
                     Our Recipes
                  </h2>
                  <p className="opacity-60  md:text-lg max-w-[800px] mx-auto">
                     Lorem ipsum dolor sit amet consectetur. Proin et feugiat
                     senectus vulputate netus pharetra rhoncus. Eget urna
                     volutpat curabitur elementum mauris aenean neque.
                  </p>
               </div>

               <div className="md:flex space-y-6 md:space-y-0 md:gap-6">
                  <Recipes></Recipes>
                  <Cart></Cart>
               </div>
            </section>
         </main>
      </>
   );
}

export default App;
