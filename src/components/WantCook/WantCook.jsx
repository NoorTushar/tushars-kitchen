import PropTypes from "prop-types";

const WantCook = (props) => {
   return (
      <div>
         <div className="px-16">
            <h3 className="text-our-secondary text-xl text-center">
               Want to Cook: 01
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
                     <th>Time</th>
                     <th>Calories</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th>1</th>
                     <td>Cy Ganderton</td>
                     <td>Quality Control Specialist</td>
                     <td>Quality Control Specialist</td>
                     <td>
                        <button className="btn btn-sm bg-our-primary rounded-full text-our-black border border-[#0be58a] hover:bg-transparent hover:text-our-black hover:border-[#150b2b]">
                           Preparing
                        </button>
                     </td>
                  </tr>
               </tbody>
               <tfoot>
                  <tr></tr>
               </tfoot>
            </table>
         </div>
      </div>
   );
};

WantCook.propTypes = {};

export default WantCook;
