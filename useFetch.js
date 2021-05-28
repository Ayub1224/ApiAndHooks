import {  useReducer } from 'react'

const initialState = {
    loading: true,
    error: '',
    data: []
}

const Reducer = (state, Action) => {
    switch (Action.type) {
        case 'Fetch_sucess':
            return { loading: false, data: Action.payload, error: "" }
        case 'error':
            return { loading: false, error: 'someThing Went Wrong', data: [] }
        case 'Delete':
            return { ...state, data: state.data.filter(state => state.id !== Action.payload.id) };
        default:
            return state
    }
}

export function UseFetch() {

    const [state, dispatch] = useReducer(Reducer, { data: [] })
    const FetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            'mode': "cors",
            "credentials": "omit"
        }).then(data => data.json()).then(res => {
            dispatch({ type: "Fetch_sucess", loading: false, error: "", payload: res })
        }).catch(e => {
            dispatch({ type: 'error', loading: false })
        })
    }
 
    return [state, dispatch, FetchData]
}


