import {autologin} from "./auth-reducer";

const INITIALIZED_SUCCESS ="INITIALIZED_SUCCESS"

const initial ={
    initialized :false,
}

const AppReducer =(state=initial,action)=>{
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,initialized:true
            }
        default:
            return state
    }
}

export const initializedSuccess = ()=>({type:INITIALIZED_SUCCESS});
export const initializedApp=()=>(dispatch)=>{
    let promise = dispatch(autologin())
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess())
    })


}

export default AppReducer