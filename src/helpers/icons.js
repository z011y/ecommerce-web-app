import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(faSearch, faMinus, faPlus);
};

export default Icons;
