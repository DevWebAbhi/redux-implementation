const initialState = {
    todo:[]
}



const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case "ADD_TODO":
            return {
                ...state,todo:payload
            }

        default:
            return state;
        }
}

export default reducer;