import { USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_RESET, USER_UPDATE_SUCCESS } from "../constants/user";


const  updateUserReducer = (state= {},action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { isLoad: true };
        case USER_UPDATE_SUCCESS:
            return{isLoad:false,success:true,user:action.payload}
        case USER_UPDATE_FAIL:
            return{isLoad:false,errors:action.payload}
        case USER_UPDATE_RESET:
            return{user:{}};
            default:
                return state;
    }
}

export default updateUserReducer