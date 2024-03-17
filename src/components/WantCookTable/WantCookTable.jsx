import PropTypes from "prop-types";

const WantCookTable = ({ eachWantCookList, index, handlePreparing }) => {
   const { recipe_id, recipe_name, preparing_time, calories } =
      eachWantCookList;
   return (
      <tbody>
         <tr className="bg-green-50 *:border *:min-h-1 *:py-2">
            <th className="text-center">{index}</th>
            <td className="text-wrap">{recipe_name}</td>
            <td className="text-center">{preparing_time}</td>
            <td className="text-center">{calories}</td>
            <td className="text-center">
               <button
                  className="btn btn-sm bg-our-primary rounded-full text-our-black border border-[#0be58a] hover:bg-transparent hover:text-our-black hover:border-[#150b2b]"
                  onClick={() => handlePreparing(recipe_id, eachWantCookList)}
               >
                  Preparing
               </button>
            </td>
         </tr>
      </tbody>
   );
};

WantCookTable.propTypes = {
   eachWantCookList: PropTypes.object.isRequired,
   index: PropTypes.number.isRequired,
   handlePreparing: PropTypes.func.isRequired,
};

export default WantCookTable;
