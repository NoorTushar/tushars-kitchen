import PropTypes from "prop-types";
import CurrentlyCookingTable from "../CurrentlyCookingTable/CurrentlyCookingTable";

const CurrentlyCooking = ({ currentlyCookingList }) => {
   return (
      <div>
         <div className="px-16 mt-7">
            <h3 className="text-our-secondary text-xl text-center">
               Currently Cooking: {currentlyCookingList.length}
            </h3>
            <hr className="my-4" />
         </div>

         {/* table */}
         <div className="overflow-x-auto">
            <table className="table table-xs text-our-gray">
               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>Time</th>
                     <th>Calories</th>
                  </tr>
               </thead>
               {currentlyCookingList.map((eachCurrentlyCooking, index) => {
                  return (
                     <CurrentlyCookingTable
                        key={eachCurrentlyCooking.recipe_id}
                        index={index + 1}
                        eachCurrentlyCooking={eachCurrentlyCooking}
                     ></CurrentlyCookingTable>
                  );
               })}
               <tfoot>
                  <tr className="">
                     <th></th>
                     <th></th>
                     <th className="text-wrap">
                        Total time ={" "}
                        {currentlyCookingList.reduce(
                           (totalTime, currentItem) => {
                              return totalTime + currentItem.preparing_time;
                           },
                           0
                        )}{" "}
                        minutes
                     </th>
                     <th className="text-wrap">
                        Total Calories ={" "}
                        {currentlyCookingList.reduce(
                           (totalTime, currentItem) => {
                              return totalTime + currentItem.calories;
                           },
                           0
                        )}{" "}
                        calories
                     </th>
                  </tr>
               </tfoot>
            </table>
         </div>
      </div>
   );
};

CurrentlyCooking.propTypes = {
   currentlyCookingList: PropTypes.array.isRequired,
};

export default CurrentlyCooking;
