export const getBooks = async () => {
    return [
        {
            bookId: '001',
            title: 'O Encanamento que Geme',
            author: 'Junji Ito',
            price: '60.80',
            capa: 'https://m.media-amazon.com/images/I/61jWDjrtGOL._SX354_BO1,204,203,200_.jpg',
            category: 'Mangá ',
            isPromotion: false,
            discount: 1
        },
        {
            bookId: '002',
            title: 'O que eu gostaria que as pessoas soubessem sobre demência: De alguém que convive com o diagnóstico',
            author: 'MaWendy Mitchell, Anna Warton',
            price: '44.90',
            capa: 'https://m.media-amazon.com/images/I/41mBw26xGPL._SX327_BO1,204,203,200_.jpg',
            category: 'Paternidade e Relacionamentos',
            isPromotion: false,
            discount: 1
        },
        {
            bookId: '003',
            title: 'Marcada com sangue',
            author: 'Tracy Deonn',
            price: '74.90',
            capa: 'https://m.media-amazon.com/images/I/51IJ4kawIvL._SX339_BO1,204,203,200_.jpg',
            category: '',
            isPromotion: false,
            discount: 1
        },
        {
            bookId: '004',
            title: 'Atlas: A história de Pa Salt',
            author: 'Lucinda Riley ',
            price: '71.91',
            capa: 'https://m.media-amazon.com/images/I/51wzY6h1PPL._SX346_BO1,204,203,200_.jpg',
            category: '',
            isPromotion: false,
            discount: 1
        },
        {
            bookId: '005',
            title: 'O princípio do coração: 3',
            author: 'Helen Hoang',
            price: '45.00',
            capa: 'https://m.media-amazon.com/images/I/51E693WcZfL._SX346_BO1,204,203,200_.jpg',
            category: '',
            isPromotion: true,
            discount: 0.8
        },
        {
            bookId: '006',
            title: 'Rainha Charlotte: A história de amor que veio antes dos Bridgertons e que mudou a alta sociedade...',
            author: 'Julia Quinn',
            price: '59.90',
            capa: 'https://m.media-amazon.com/images/I/51iEhqi4O2L._SX448_BO1,204,203,200_.jpg',
            category: '',
            isPromotion: false,
            discount: 1
        },
        {
            bookId: '007',
            title: 'Match perfeito ',
            author: 'Lauren Forsythe',
            price: '39.90',
            capa: 'https://m.media-amazon.com/images/I/41AnPD6xGLL._SX331_BO1,204,203,200_.jpg',
            category: '',
            isPromotion: false,
            discount: 1
        },
        {
            bookId: '008',
            title: 'Anatomia: Uma história de amor',
            author: 'Dana Schwartz',
            price: '39.27',
            capa: 'https://m.media-amazon.com/images/I/51XxqlHEs6L._SX324_BO1,204,203,200_.jpg',
            category: '',
            isPromotion: true,
            discount: 0.5
        },
        {
            bookId: '009',
            title: 'Empatia: Eu sei como você se sente',
            author: 'Monika Hein',
            price: '57.34',
            capa: 'https://m.media-amazon.com/images/I/41kSZ1FKtnL._SX331_BO1,204,203,200_.jpg',
            category: '',
            isPromotion: false,
            discount: 1
        },
        {
            bookId: '010',
            title: 'O mínimo sobre relacionamentos',
            author: 'Mila Marsili',
            price: '17.93',
            capa: 'https://m.media-amazon.com/images/I/51WYWJ6jeGL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
            category: '',
            isPromotion: true,
            discount: 0.5
        },
        {
            bookId: '011',
            title: 'Melhor do que nos filmes',
            author: 'Lynn Painter ',
            price: '39.90',
            capa: 'https://m.media-amazon.com/images/I/41pWbbQWPeL._SX331_BO1,204,203,200_.jpg',
            category: '',
            isPromotion: true,
            discount: 0.9
        },
        {
            bookId: '012',
            title: 'Salvar o fogo',
            author: 'Itamar Vieira Junior',
            price: '56.90',
            capa: 'https://m.media-amazon.com/images/I/41eLYXfOOKL._SX324_BO1,204,203,200_.jpg',
            category: '',
            isPromotion: false,
            discount: 1
        },
        {
            bookId: '013',
            title: 'Frankenstein',
            author: 'Mary Shelley',
            price: '44.95',
            capa: 'https://m.media-amazon.com/images/I/61NdHMd1PYL._SX331_BO1,204,203,200_.jpg',
            category: '',
            isPromotion: false,
            discount: 1
        },
        {
            bookId: '014',
            title: 'A garota do lago ',
            author: 'Charlie Donlea',
            price: '11.99',
            capa: 'https://m.media-amazon.com/images/I/516VOgxwg2L._SY344_BO1,204,203,200_QL70_ML2_.jpg',
            category: 'Ficção',
            isPromotion: true,
            discount: 1
        },
        {
            bookId: '015',
            title: 'A revolução dos bichos: Um conto de fadas',
            author: 'George Orwell',
            price: '9.90',
            capa: 'https://m.media-amazon.com/images/I/61owA5ey3iL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
            category: 'Ficção',
            isPromotion: false,
            discount: 1
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
    const saleBook = {
        ...book,
        price: (parseFloat(book.discount)*book.price).toFixed(2)
    }
    const cart = await getCart();
    cart.push(saleBook);
    await saveCart(cart)
    return cart;
}