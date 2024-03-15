import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ recipes }) => {
   return (
      <div className="md:w-3/5 grid md:grid-cols-2 gap-6 justify-around">
         {/* <Recipe></Recipe>
         <Recipe></Recipe>
         <Recipe></Recipe>
         <Recipe></Recipe>
         <Recipe></Recipe>
         <Recipe></Recipe> */}
         {recipes.map((eachRecipe) => {
            return (
               <Recipe
                  key={eachRecipe.recipe_id}
                  eachRecipe={eachRecipe}
               ></Recipe>
            );
         })}
      </div>
   );
};

Recipes.propTypes = {
   recipes: PropTypes.array.isRequired,
};

export default Recipes;
