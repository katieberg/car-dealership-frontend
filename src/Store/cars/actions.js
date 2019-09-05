import * as types from './constants'
import axios from 'axios'

export const getCars = () => async dispatch => {
    dispatch({ type: types.CARS_PENDING })
    try {
        let response = await axios.get(types.BASE_URL)
        dispatch({
            type: types.CARS_SUCCESS,
            payload: response
        })
        //history.push('/dashboard')
    } catch (err) {
        dispatch({
            type: types.CARS_FAILED,
            payload: err
        })
    }
}

export const getCarsByLoc = (id) => async dispatch => {
    dispatch({ type: types.CARS_PENDING })
    try {
        let response = await axios.get(types.BASE_URL + `/${id}`)
        dispatch({
            type: types.CARS_SUCCESS,
            payload: response
        })
    }
    catch (err) {
        dispatch({
            type: types.CARS_FAILED,
            payload: err
        })
    }
}

export const getOneCar = (id) => async dispatch => {
    try {
        let response = await axios.get(types.BASE_URL + `/car/${id}`)
        dispatch({
            type: types.ONE_CAR_SUCCESS,
            payload: response
        })
    }
    catch (err) {
        dispatch({
            type: types.CARS_FAILED,
            payload: err
        })
    }
}

export const updateCar = (id, body) => async dispatch => {
    try {
        let response = await axios.patch(types.BASE_URL + `/${id}`, body)
        dispatch({
            type: types.CAR_UPDATE_SUCCESS,
            payload: response,
            carId: id
        })
    }
    catch (err) {
        dispatch({
            type: types.CARS_FAILED,
            payload: err
        })
    }
}

export const deleteCar = (id) => async dispatch => {
    try {
        await axios.delete(types.BASE_URL + `/${id}`)
        let response = await axios.get(types.BASE_URL)
        dispatch({
            type: types.CARS_SUCCESS,
            payload: response
        })
    }
    catch (err) {
        dispatch({
            type: types.CARS_FAILED,
            payload: err
        })
    }
}

export const newCar = (body) => async dispatch => {
    console.log(body)
    try {
        let response = await axios.post(types.BASE_URL, body)
        dispatch({
            type: types.NEW_CAR_SUCCESS,
            payload: response
        })
    }
    catch (err) {
        dispatch({
            type: types.CARS_FAILED,
            payload: err
        })
    }
}
