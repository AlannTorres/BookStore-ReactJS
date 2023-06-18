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

// -> Remover livro ao carrinho
export const removeBookInCartInitAction = async () => ({
    type: types.removeBookInCartInitType
})

export const removeBookInCartSuccessAction = async (books) => ({
    type: types.removeBookInCartSuccessType,
    payload: books   
})

export const removeBookInCartAction = async (dispatch, bookId) => {

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

