import {LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE} from './photo.actionTypes'

export const PHOTO_KEY = 'photoStore'

let initialState = {
    data: [],
    isLoading: false,
    errrorMessage: ''
}

export const photoReducer = (state = initialState, action) =>{
    let {type, payload} = action
    switch(type){
        case LOAD_DATA_REQUEST:
            return{
                ...state,
                isLoading: true
            }
            case LOAD_DATA_SUCCESS:
                return{
                    ...state,
                    isLoading: false,
                    data: payload
                }
                case LOAD_DATA_FAILURE:
                    return{
                        ...state,
                        errrorMessage: payload
                    }
                    default: return state
    }

}







