import * as types from './constants'

const initialState = {
    cars: [],
    err: {},
    oneCar: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CARS_PENDING:
            return state

        case types.CARS_SUCCESS:
            return {
                ...state,
                cars: action.payload.data
            }

        case types.CARS_FAILED:
            return {
                ...state,
                err: action.payload
            }
        case types.CAR_UPDATE_SUCCESS:
            return {
                ...state,
                cars: state.cars.map(car => {
                    if (car.id === action.carId) {
                        return action.payload.data
                    }
                    else return car;
                })
            }
        case types.CAR_DELETE_SUCCESS:
            return {
                ...state,
                cars: action.payload.data
            }

        case types.NEW_CAR_SUCCESS:
            return {
                ...state,
                cars: state.cars.concat([action.payload.data])
            }
        case types.ONE_CAR_SUCCESS:
            return {
                ...state,
                oneCar: action.payload.data
            }


        default:
            return state
    }
}