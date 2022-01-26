import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_RESET, USER_LIST_SUCCESS } from "../constants/user"

const userListReducer = (state = {users:[]},action) => {
    switch(action.type){
        case USER_LIST_REQUEST:
            return{isLoad:true}
        case USER_LIST_SUCCESS:
            return{isLoad:false,users:action.payload}
        case USER_LIST_FAIL:
            return {isLoad:false,errors:action.payload}
        case USER_LIST_RESET:
            return {users:[]}
        default:
            return state
        
    }
}
export default userListReducer