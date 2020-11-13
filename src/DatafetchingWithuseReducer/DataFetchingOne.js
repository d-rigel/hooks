import Axios from 'axios'
import React, {useState, useEffect } from 'react'

function DataFetchingOne() {

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            setPost(res.data)
            setLoading(false)
            setError("")
        })
        .catch(err => {
            setPost({})
            setLoading(false)
            setError("something went wrong")
        })
    }, [])
    return (
        <div>
            {loading ? "loading..." : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne


/*
//dataFetching with useEffect and useState
import Axios from 'axios'
import React, { useState, useEffect} from 'react'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [post, setPost] = useState({})

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError("")
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError("something went wrong")

        } )
    }, [])
    return (
        <div>
            { loading ? "loading..." : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
*/
