import * as types from "./types"

export function reducer(state, action) {
    switch (action.type) {
        // Carregar livros
        case types.fetchBookInitType:
            return {   
                ...state,
                type: types.fetchBookInitType,
            }
        case types.fetchBookSuccessType:
            return {   
                ...state,
                type: types.fetchBookSuccessType,
                books: action.payload
            }
        
        // Salvar no carrinho
        case types.saveBookInCartInitType:
            return {   
                ...state,
                type: types.saveBookInCartInitType,

            }
        case types.saveBookInCartSuccessType:
            return {   
                ...state,
                type: types.saveBookInCartSuccessType,
                cart: action.payload
            }

        // default
        default:
            return { 
                ...state,
                type: action.type
            } 
    }
}