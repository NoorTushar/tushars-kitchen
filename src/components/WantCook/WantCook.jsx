import PropTypes from "prop-types";
import WantCookTable from "../WantCookTable/WantCookTable";

const WantCook = ({ wantCookList, handlePreparing }) => {
   return (
      <div>
         <div className="px-16">
            <h3 className="text-our-secondary text-xl text-center">
               Want to Cook:{" "}
               <span className="our-primary">{wantCookList.length}</span>
            </h3>
            <hr className="my-4" />
         </div>

         {/* table */}
         <div className="overflow-x-auto">
            <table className="table table-xs text-our-gray">
               <thead className="">
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>Time (mins)</th>
                     <th>Calories</th>
                     <th></th>
                  </tr>
               </thead>

               {/* List Body Dynamic Loop Start*/}
               {wantCookList.map((eachWantCookList, index) => {
                  return (
                     <WantCookTable
                        key={eachWantCookList.recipe_id}
                        eachWantCookList={eachWantCookList}
                        index={index + 1}
                        handlePreparing={handlePreparing}
                     ></WantCookTable>
                  );
               })}
               {/* List Body Dynamic Loop End*/}
               <tfoot>
                  <tr></tr>
               </tfoot>
            </table>
         </div>
      </div>
   );
};

WantCook.propTypes = {
   wantCookList: PropTypes.array.isRequired,
   handlePreparing: PropTypes.func.isRequired,
};

export default WantCook;
