import {LOGIN_SUCCESS,LOGIN_FAIL} from '../actions/types';

const INITIAL_STATE={
    user:''
}



export default (state=INITIAL_STATE,actions)=>{
    switch(actions.type){
        case LOGIN_SUCCESS:
            return {...state,user:actions.payload.user};
        case LOGIN_FAIL:
            return {...state,user:''}
        default:
            return state;
    }
}