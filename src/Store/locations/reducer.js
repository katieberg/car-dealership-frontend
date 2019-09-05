import * as types from './constants'

const initialState = {
    locations: [],
    err: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOCATIONS_PENDING:
            return state

        case types.LOCATIONS_SUCCESS:
            return {
                ...state,
                locations: action.payload.data
            }

        case types.LOCATIONS_FAILED:
            return {
                ...state,
                err: action.payload
            }
        case types.LOCATION_UPDATE_SUCCESS:
            return {
                ...state,
                locations: state.locations.map(location => {
                    if (location.id === action.locId) {
                        return action.payload.data
                    }
                    else return location;
                })
            }
        case types.LOCATION_DELETE_SUCCESS:
            return {
                ...state,
                locations: action.payload.data
            }

        case types.NEW_LOCATION_SUCCESS:
            return {
                ...state,
                locations: state.locations.push(action.payload.data)
            }

        default:
            return state
    }
}