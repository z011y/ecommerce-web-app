import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMinus,
  faPlus,
  faTimes,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(faSearch, faMinus, faPlus, faTimes, faShoppingCart);
};

export default Icons;
