import Axios from 'axios';
import React, {useReducer, useEffect } from 'react';

const initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: "",
                post: action.payload
            }

        case "FETCH_ERROR": 
            return {
                loading: false,
                error: "something went wrong",
                post: {}
            }

        default:
            return state
    }
}


function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            dispatch({type: "FETCH_SUCCESS", payload: response.data})
        })
        .catch(error => {
            dispatch({type: "FETCH_ERROR"})
        })
    }, [])
    return (
        <div>
            {state.loading ? "loading..." : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo



/*
//fetching data with useReducer and useEffect
import Axios from 'axios'
import React, {useReducer, useEffect} from 'react'

const initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS":
            return {
                loadig: false,
                error: "",
                post: action.payload
            }

        case "FETCH_ERROR":
            return {
                loading: false,
                error: "something went wrong",
                post: {}
            }

        default:
            return state
    }
}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            dispatch({type: "FETCH_SUCCESS", payload: response.data})
        })
        .catch(error => {
            dispatch({type: "FETCH_ERROR"})
        })
    }, [])
    return (
        <div>
            {state.loading ? "loading..." : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo
*/
