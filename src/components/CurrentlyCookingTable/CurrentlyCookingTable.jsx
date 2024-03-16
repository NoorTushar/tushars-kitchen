import PropTypes from "prop-types";

const CurrentlyCookingTable = ({ index, eachCurrentlyCooking }) => {
   const { recipe_name, preparing_time, calories } = eachCurrentlyCooking;
   return (
      <tbody>
         <tr>
            <th className="pl-6">{index}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
         </tr>
      </tbody>
   );
};

CurrentlyCookingTable.propTypes = {
   eachCurrentlyCooking: PropTypes.object.isRequired,
   index: PropTypes.number.isRequired,
};

export default CurrentlyCookingTable;
