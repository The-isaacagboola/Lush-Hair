import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  console.log(location.state);

  return <div>CheckOut</div>;
}

export default Checkout;
