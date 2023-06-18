export const getBooks = async () => {
    return [
        {
            bookId: '001',
            title: 'Terro da noite',
            author: 'Alan',
            price: '34',
            image: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '002',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '003',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '004',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '005',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '006',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '007',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '008',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '009',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '010',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '011',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: '0'
        },
        {
            bookId: '012',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: ''
        },
        {
            bookId: '013',
            title: 'A vinda',
            author: 'Mari',
            price: '12',
            capa: '',
            category: '',
            isPromotion: false,
            discount: ''
        },
        {
            bookId: '014',
            title: 'A garota do lago ',
            author: 'Charlie Donlea',
            price: '11.99',
            capa: 'https://m.media-amazon.com/images/I/516VOgxwg2L._SY344_BO1,204,203,200_QL70_ML2_.jpg',
            category: 'Ficção',
            isPromotion: true,
            discount: 30
        },
        {
            bookId: '015',
            title: 'A revolução dos bichos: Um conto de fadas',
            author: 'George Orwell',
            price: '9.90',
            capa: 'https://m.media-amazon.com/images/I/61owA5ey3iL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
            category: 'Ficção',
            isPromotion: false,
            discount: 0
        },
    ]
}

export const getCart = async () => {
    return JSON.parse(localStorage.getItem('cart')) || []
}

export const saveCart = async (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const saveBookInCart = async (book) => {
    const cart = await getCart();
    cart.push(book);
    await saveCart(cart)
    return cart;
}