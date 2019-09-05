import * as types from './constants'
import axios from 'axios'

export const getLocations = () => async dispatch => {
    dispatch({ type: types.LOCATIONS_PENDING })
    try {
        let response = await axios.get(types.BASE_URL)
        dispatch({
            type: types.LOCATIONS_SUCCESS,
            payload: response
        })
        //history.push('/dashboard')
    } catch (err) {
        dispatch({
            type: types.LOCATIONS_FAILED,
            payload: err
        })
    }
}

export const updateLocation = (id, body) => async dispatch => {
    try {
        let response = await axios.patch(types.BASE_URL + `/${id}`, body)
        dispatch({
            type: types.LOCATION_UPDATE_SUCCESS,
            payload: response,
            locId: id
        })
    }
    catch (err) {
        dispatch({
            type: types.LOCATIONS_FAILED,
            payload: err
        })
    }
}

export const deleteLocation = (id) => async dispatch => {
    try {
        await axios.delete(types.BASE_URL + `/${id}`)
        let response = await axios.get(types.BASE_URL)
        dispatch({
            type: types.LOCATIONS_SUCCESS,
            payload: response
        })
    }
    catch (err) {
        dispatch({
            type: types.LOCATIONS_FAILED,
            payload: err
        })
    }
}

export const newLoc = (body) => async dispatch => {
    try {
        let response = await axios.post(types.BASE_URL)
        dispatch({
            type: types.NEW_LOCATION_SUCCESS,
            payload: response
        })
    }
    catch (err) {
        dispatch({
            type: types.LOCATIONS_FAILED,
            payload: err
        })
    }
}
