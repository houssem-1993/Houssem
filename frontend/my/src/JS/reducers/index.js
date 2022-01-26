import { combineReducers } from "redux";
import userReducer from "./user";
import studentListReducer from './students';
import studentDetailsReducer from "./studentdetails";
import studentCreateReducer from'./studentCreate';
import studentDeleteReducer from './studentDelete';
import studentUpdateReducer from './studentUpdate';
import userDetailsReducer  from "./userDetails";
import updateUserReducer from './userUpdate'
import userListReducer from './users'
const rootReducer= combineReducers({userReducer,studentListReducer,studentDetailsReducer,studentCreateReducer,studentDeleteReducer,studentUpdateReducer,userListReducer,updateUserReducer,userDetailsReducer})

export default rootReducer