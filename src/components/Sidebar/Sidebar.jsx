import PropTypes from "prop-types";
import WantCook from "../WantCook/WantCook";

const Sidebar = ({ wantCookList, handlePreparing }) => {
   return (
      <div className="md:w-2/5 border rounded-2xl py-10">
         <WantCook
            handlePreparing={handlePreparing}
            wantCookList={wantCookList}
         ></WantCook>
      </div>
   );
};

Sidebar.propTypes = {
   wantCookList: PropTypes.array.isRequired,
   handlePreparing: PropTypes.func.isRequired,
};

export default Sidebar;
