export const GET_BOOKS_BY_MIXEDCOLLECTION = "GET_BOOKS_BY_MIXEDCOLLECTION"
export const GET_BOOKS_BY_TODAYDEALS = "GET_BOOKS_BY_TODAYDEALS"
export const GET_BOOKS_BY_NEWRELEASE = "GET_BOOKS_BY_NEWRELEASE"
export const GET_BOOKS_BY_POPULAR = "GET_BOOKS_BY_POPULAR"
export const GET_BOOKS_BY_PRICE_LESSTHAN500 = "GET_BOOKS_BY_PRICE_LESSTHAN500"

const API = "http://localhost:4000"

export const fetchbooksbymixedcollections = () => {
    return dispatch => {
        return fetch(API+'/books', {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(data =>data.json())
            .then(res=>{
                dispatch({
                    type : GET_BOOKS_BY_MIXEDCOLLECTION,
                    payload : res.data
                })
            })
    }
}
export const fetchbooksbytodaydeals = () => {
    return dispatch => {
        return fetch(API+'/books?sort=-discount', {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(data =>data.json())
            .then(res=>{
                dispatch({
                    type : GET_BOOKS_BY_TODAYDEALS,
                    payload : res.data
                })
            })
    }
}

export const fetchbooksbynewrelease = () => {
    return dispatch => {
        return fetch(API+'/books?sort=-date', {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(data =>data.json())
            .then(res=>{
                dispatch({
                    type : GET_BOOKS_BY_NEWRELEASE,
                    payload : res.data
                })
            })
    }
}

export const fetchbooksbypopularbooks = () => {
    return dispatch => {
        return fetch(API+'/books?sort=-ratings', {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(data =>data.json())
            .then(res=>{
                dispatch({
                    type : GET_BOOKS_BY_POPULAR,
                    payload : res.data
                })
            })
    }
}
export const fetchbooksbypricebelow500 = () => {
    return dispatch => {
        return fetch(API+'/books?sort=-ratings&price[lt]=500', {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(data =>data.json())
            .then(res=>{
                dispatch({
                    type : GET_BOOKS_BY_PRICE_LESSTHAN500,
                    payload : res.data
                })
            })
    }
}

