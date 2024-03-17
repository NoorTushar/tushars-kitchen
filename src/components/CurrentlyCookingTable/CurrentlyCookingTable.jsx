import PropTypes from "prop-types";

const CurrentlyCookingTable = ({ index, eachCurrentlyCooking }) => {
   const { recipe_name, preparing_time, calories } = eachCurrentlyCooking;
   return (
      <tbody>
         <tr className="bg-green-50 *:border *:py-1">
            <th className="text-center">{index}</th>
            <td className="text-wrap">{recipe_name}</td>
            <td className="text-center">{preparing_time}</td>
            <td className="text-center">{calories}</td>
         </tr>
      </tbody>
   );
};

CurrentlyCookingTable.propTypes = {
   eachCurrentlyCooking: PropTypes.object.isRequired,
   index: PropTypes.number.isRequired,
};

export default CurrentlyCookingTable;
