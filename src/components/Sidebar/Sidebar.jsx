import PropTypes from "prop-types";
import WantCook from "../WantCook/WantCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const Sidebar = ({ wantCookList, handlePreparing, currentlyCookingList }) => {
   return (
      <div className="md:w-2/5 border rounded-2xl py-10">
         <WantCook
            handlePreparing={handlePreparing}
            wantCookList={wantCookList}
         ></WantCook>
         <CurrentlyCooking
            currentlyCookingList={currentlyCookingList}
         ></CurrentlyCooking>
      </div>
   );
};

Sidebar.propTypes = {
   wantCookList: PropTypes.array.isRequired,
   currentlyCookingList: PropTypes.array.isRequired,
   handlePreparing: PropTypes.func.isRequired,
};

export default Sidebar;
