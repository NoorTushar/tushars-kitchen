import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ recipes, handleWantCook }) => {
   return (
      <div className="md:w-3/5 lg:w-3/5 grid lg:grid-cols-2 gap-6 justify-around">
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
                  handleWantCook={handleWantCook}
                  eachRecipe={eachRecipe}
               ></Recipe>
            );
         })}
      </div>
   );
};

Recipes.propTypes = {
   recipes: PropTypes.array.isRequired,
   handleWantCook: PropTypes.func.isRequired,
};

export default Recipes;
