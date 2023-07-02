import * as types from "./types"
import * as services from "../services/Service"

const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time)
    })
)

// -> Renderizar livros na pagina
export const fetchBookInitAction = () => ({
    type: types.fetchBookInitType
})

export const fetchBookSuccessAction = (books) => ({
    type: types.fetchBookSuccessType,
    payload: books   
})

export const fetchBookAction = async (dispatch) => {
    dispatch(fetchBookInitAction());
    const booksData = await services.getBooks();
    dispatch(fetchBookSuccessAction(booksData))
}

// -> Renderizar livros na pagina
export const fetchCartInitAction = () => ({
    type: types.fetchCartInitType
})

export const fetchCartSuccessAction = (cartBooks) => ({
    type: types.fetchCartSuccessType,
    payload: cartBooks   
})

// -> Renderizar itens do carrinho
export const fetchCartAction = async (dispatch) => {
    dispatch(fetchCartInitAction());
    const cartBooksData = await services.getCart();
    dispatch(fetchCartSuccessAction(cartBooksData))
    return cartBooksData
}

// -> Remover livro ao carrinho
export const removeBookCartInitAction = async () => ({
    type: types.removeBookCartInitType
})

export const removeBookCartSuccessAction = async (cart) => ({
    type: types.removeBookCartSuccessType,
    payload: cart   
})

export const removeBookCartAction = async (dispatch, removeBookId) => {
    dispatch(removeBookCartInitAction())
    await sleep(2000)
    const cart = await services.removeBookCart(removeBookId)
    dispatch(removeBookCartSuccessAction(cart))
}

// -> Adicionar livro ao carrinho
export const saveBookInCartInitAction = () => ({
    type: types.saveBookInCartInitType
})

export const saveBookInCartSuccessAction = (cart) => ({
    type: types.saveBookInCartSuccessType,
    payload: cart   
})

export const saveBookInCartAction = async (dispatch, book) => {
    dispatch(saveBookInCartInitAction())
    await sleep(2000)
    const cart = await services.saveBookInCart(book)
    dispatch(saveBookInCartSuccessAction(cart))
}

