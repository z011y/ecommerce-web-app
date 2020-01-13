import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import headerNavbar from "./header-navbar-reducer";

const rootReducer = combineReducers({
  form,
  headerNavbar
});

export default rootReducer;
