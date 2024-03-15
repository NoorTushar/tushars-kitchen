import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";

const Recipes = (props) => {
   return (
      <div className="md:w-2/3 grid md:grid-cols-2 gap-6 justify-around">
         <Recipe></Recipe>
         <Recipe></Recipe>
         <Recipe></Recipe>
         <Recipe></Recipe>
         <Recipe></Recipe>
         <Recipe></Recipe>
      </div>
   );
};

Recipes.propTypes = {};

export default Recipes;
