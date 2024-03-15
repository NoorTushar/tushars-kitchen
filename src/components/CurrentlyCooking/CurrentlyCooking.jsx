import PropTypes from "prop-types";

const CurrentlyCooking = (props) => {
   return (
      <div>
         <div className="px-16 mt-7">
            <h3 className="text-our-secondary text-xl text-center">
               Currently Cooking: 03
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
               <tbody>
                  <tr>
                     <th>1</th>
                     <td>Cy Ganderton</td>
                     <td>Quality Control Specialist</td>
                     <td>Littel, Schaden and Vandervort</td>
                  </tr>

                  <tr>
                     <th>1</th>
                     <td>Cy Ganderton</td>
                     <td>Quality Control Specialist</td>
                     <td>Littel, Schaden and Vandervort</td>
                  </tr>

                  <tr>
                     <th>1</th>
                     <td>Cy Ganderton</td>
                     <td>Quality Control Specialist</td>
                     <td>Littel, Schaden and Vandervort</td>
                  </tr>
               </tbody>
               <tfoot>
                  <tr className="">
                     <th></th>
                     <th></th>
                     <th className="text-wrap">Total time = 45 minutes</th>
                     <th className="text-wrap">
                        Total Calories = 1050 calories
                     </th>
                  </tr>
               </tfoot>
            </table>
         </div>
      </div>
   );
};

CurrentlyCooking.propTypes = {};

export default CurrentlyCooking;
