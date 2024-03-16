import PropTypes from "prop-types";

const WantCookTable = ({ eachWantCookList, index }) => {
   const { recipe_name, preparing_time, calories } = eachWantCookList;
   return (
      <tbody>
         <tr>
            <th className="pl-6">{index}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td>
               <button className="btn btn-sm bg-our-primary rounded-full text-our-black border border-[#0be58a] hover:bg-transparent hover:text-our-black hover:border-[#150b2b]">
                  Preparing
               </button>
            </td>
         </tr>
      </tbody>
   );
};

WantCookTable.propTypes = {
   eachWantCookList: PropTypes.object.isRequired,
};

export default WantCookTable;
