import PropTypes from "prop-types";
import WantCook from "../WantCook/WantCook";

const Cart = (props) => {
   return (
      <div className="md:w-2/5 border rounded-2xl py-10">
         <WantCook></WantCook>
      </div>
   );
};

Cart.propTypes = {};

export default Cart;
