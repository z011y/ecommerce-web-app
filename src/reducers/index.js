import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import headerNavbar from "./header-navbar-reducer";
import user from "./user-reducer";

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user
});

export default rootReducer;
