export const incrementAction = (increment) =>{
    return(dispatch)=>{
        dispatch({
            type:"increment"
        })
    }
}

export const decrementAction = (decrement)=>{
    return(dispatch)=>{
        dispatch({
            type:"decrement"
        })
    }
}

export const resetAction = (decrease) =>{
    return(dispatch)=>{
        dispatch({
            type:"reset"
        })
    }
}

export * as actionCreators from './actions'