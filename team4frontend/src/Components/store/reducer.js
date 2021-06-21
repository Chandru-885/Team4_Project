import * as actions from '../action/action';

let initialState = {
    books : []
}

const BookReducer = (state = initialState, action) =>{
    console.log('Action recieved at reducer***  ', action);
    switch(action.type){
        
        case actions.GET_BOOKS_BY_MIXEDCOLLECTION : return {...state, books: action.payload }
        case actions.GET_BOOKS_BY_TODAYDEALS : return {...state, books: action.payload }  
        case actions.GET_BOOKS_BY_NEWRELEASE : return {...state, books: action.payload }  
        case actions.GET_BOOKS_BY_POPULAR : return {...state, books: action.payload }  
        case actions.GET_BOOKS_BY_PRICE_LESSTHAN500 : return {...state, books: action.payload }  

        default : return {...state}
    }
}

export default BookReducer;
