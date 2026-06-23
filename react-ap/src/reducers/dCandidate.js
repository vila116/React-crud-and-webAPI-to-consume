import {ACTION_TYPES} from "../actions/dCandidate";
const intialsate ={
    list:[]
}
export default function dCandidate(state=intialsate,action){

    switch(action.type){
        case ACTION_TYPES.FETCH_ALL:
            return{
                ...state,
                list:[...action.payload]
            }
            default:
                return state;
    }
};