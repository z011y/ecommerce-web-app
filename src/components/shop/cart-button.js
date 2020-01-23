import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartButton({ className, icon, onClick }) {
  return (
    <a onClick={onClick} className={`${className} cart-button`}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default CartButton;
