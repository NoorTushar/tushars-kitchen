import { useEffect, useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner/Banner";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   const [recipes, setRecipes] = useState([]);
   const [wantCookList, setWantCookList] = useState([]);
   const [currentlyCookingList, setCurrentlyCookingList] = useState([]);

   useEffect(() => {
      fetch("recipes.json")
         .then((res) => res.json())
         .then((data) => setRecipes(data));
   }, []);

   const handleWantCook = (recipe) => {
      const alreadyExist = wantCookList.find(
         (item) => item.recipe_id === recipe.recipe_id
      );

      alreadyExist && toast.info("You have already selected this recipe.");

      if (!alreadyExist) {
         const newWantCookList = [...wantCookList, recipe];
         setWantCookList(newWantCookList);
      }
   };

   const handlePreparing = (recipeId, eachWantCookList) => {
      console.log(`i am preparing now`, recipeId);
      console.log(`the recipe selected is `, eachWantCookList);

      const newCurrentlyCookingList = [
         ...currentlyCookingList,
         eachWantCookList,
      ];

      setCurrentlyCookingList(newCurrentlyCookingList);

      const newWantCookList = wantCookList.filter(
         (eachWantCookList) => eachWantCookList.recipe_id !== recipeId
      );

      setWantCookList(newWantCookList);
      console.log(wantCookList);
   };

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
                  <h2 className="font-semibold text-3xl md:text-[40px] mb-4 md:mb-6 ">
                     Our <span className="our-primary">R</span>ecipes
                  </h2>
                  <p className="opacity-60  md:text-lg max-w-[800px] mx-auto">
                     Lorem ipsum dolor sit amet consectetur. Proin et feugiat
                     senectus vulputate netus pharetra rhoncus. Eget urna
                     volutpat curabitur elementum mauris aenean neque.
                  </p>
               </div>

               <div className="md:flex space-y-6 md:space-y-0 md:gap-6">
                  <Recipes
                     handleWantCook={handleWantCook}
                     recipes={recipes}
                  ></Recipes>
                  <Sidebar
                     handlePreparing={handlePreparing}
                     wantCookList={wantCookList}
                     currentlyCookingList={currentlyCookingList}
                  ></Sidebar>
               </div>
            </section>
         </main>
         <ToastContainer />
      </>
   );
}

export default App;
