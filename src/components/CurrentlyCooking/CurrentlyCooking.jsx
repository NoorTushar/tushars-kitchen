import PropTypes from "prop-types";
import CurrentlyCookingTable from "../CurrentlyCookingTable/CurrentlyCookingTable";

const CurrentlyCooking = ({ currentlyCookingList }) => {
   return (
      <div>
         <div className="px-16 mt-7">
            <h3 className="text-our-secondary text-xl text-center">
               Currently Cooking:{" "}
               <span className="text-green-600">
                  {currentlyCookingList.length}
               </span>
            </h3>
            <hr className="my-4" />
         </div>

         {/* table */}
         <div className="overflow-x-auto">
            <table className="table table-xs text-our-gray">
               <thead>
                  <tr className="*:border bg-green-100 text-center text-our-black h-10">
                     <th>#</th>
                     <th>Name</th>
                     <th className="text-wrap">Time (mins)</th>
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
                  <tr className="*:border bg-green-100 text-center text-our-black min-h-10">
                     <th colSpan={2}></th>
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
