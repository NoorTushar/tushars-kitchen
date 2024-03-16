import PropTypes from "prop-types";

const CurrentlyCookingTable = ({ index, eachCurrentlyCooking }) => {
   const { recipe_name, preparing_time, calories } = eachCurrentlyCooking;
   return (
      <tbody>
         <tr>
            <th>{index}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
         </tr>
      </tbody>
   );
};

CurrentlyCookingTable.propTypes = {
   eachCurrentlyCooking: PropTypes.object.isRequired,
};

export default CurrentlyCookingTable;
