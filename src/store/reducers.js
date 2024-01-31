import { combineReducers } from "redux";
import { userSlice } from "./usersSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});