import PropTypes from "prop-types";
import WantCook from "../WantCook/WantCook";

const Sidebar = ({ wantCookList }) => {
   return (
      <div className="md:w-2/5 border rounded-2xl py-10">
         <WantCook wantCookList={wantCookList}></WantCook>
      </div>
   );
};

Sidebar.propTypes = {
   wantCookList: PropTypes.array.isRequired,
};

export default Sidebar;
