import {ADD_MOVIES,SEARCH_MOVIES,RATE_MOVIES,DELETE_MOVIES, EDIT_MOVIES} from '../Constants/actions-types'

export const addMovies = movies => {
    return {
        type:ADD_MOVIES,
        payload:movies
    }
}
export const searchMovie = payload => {
    return {
        type:SEARCH_MOVIES,
        payload
    }
}
export const ratingMovie = payload => {
    return {
        type:RATE_MOVIES,
        payload
    }
}
export const deleteMovie = payload => {
    return {
        type:DELETE_MOVIES,
        payload
    }
}
export const editMovie = movies => {
    return {
        type: EDIT_MOVIES,
        payload:movies
    }
}