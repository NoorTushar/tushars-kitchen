import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { SlFire } from "react-icons/sl";

const Recipe = ({ eachRecipe, handleWantCook }) => {
   const {
      calories,
      description,
      ingredients,
      preparing_time,
      recipe_image,
      recipe_name,
   } = eachRecipe;
   return (
      <div className="card bg-base-100 shadow-xl border">
         <figure className="px-8 pt-8">
            <img src={recipe_image} alt="Shoes" className="rounded-xl" />
         </figure>
         <div className="card-body">
            <h2 className="text-xl font-semibold text-our-secondary">
               {recipe_name}
            </h2>
            <p className="text-our-gray">{description}</p>
            <hr className="my-4" />
            <div>
               <h3 className="text-lg font-medium text-our-secondary mb-3">
                  Ingredients:{" "}
                  <span className="text-green-600">{ingredients.length}</span>
               </h3>
               <ul className="list-disc ml-5 space-y-1">
                  {ingredients.map((eachIngredient, index) => (
                     <li key={index} className="text-our-gray">
                        {eachIngredient}
                     </li>
                  ))}
               </ul>
            </div>
            <hr className="my-4" />

            {/* time and calories */}
            <div className="mb-4 text-our-gray flex gap-3 *:flex *:items-center *:gap-1">
               <div>
                  <IoTimeOutline />
                  <p className="text-sm">
                     <span>{preparing_time}</span> minutes
                  </p>
               </div>

               <div>
                  <SlFire />
                  <p className="text-sm">
                     <span>{calories}</span> calories
                  </p>
               </div>
            </div>

            {/* button */}
            <div className="card-actions">
               <button
                  className="btn bg-our-primary rounded-full text-our-black border border-[#0be58a] hover:bg-transparent hover:text-our-black hover:border-[#150b2b]"
                  onClick={() => handleWantCook(eachRecipe)}
               >
                  Want to Cook
               </button>
            </div>
         </div>
      </div>
   );
};

Recipe.propTypes = {
   eachRecipe: PropTypes.object.isRequired,
   handleWantCook: PropTypes.func.isRequired,
};

export default Recipe;
