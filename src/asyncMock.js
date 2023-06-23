// Array de productos que no se utiliza por el use de Firebase como base de datos, lo dejo a modo de back.

const products = [
    {
        id:1,
        name: 'Recibidor Curvas',
        price: 3000,
        category: 'Muebles',
        img:'/RecibidorCurvas.jpg',
        stock: 50,
        description: 'Recibidor 100% metálico de líneas curvas'
    },
    {
        id:2,
        name: 'Perchero Medio Punto',
        price: 5000,
        category: 'Muebles',
        img: '/PercheroMediopunto.jpg',
        stock: 50,
        description: 'Perchero recibidor metálico con arco de medio punto'
    },
    {
        id:3,
        name: 'Luz Desnuda',
        price: 1500,
        category: 'Iluminación',
        img: '/LuzDesnuda.jpg',
        stock: 50,
        description: 'Luminaria minimalista con tubo de luz color a elección'
    },
    {
        id:4,
        name: 'Luz Tubo',
        price: 2100,
        category: 'Iluminación',
        img: '/LuzTubo.jpg',
        stock: 50,
        description: 'Luminaria minimalista de caño metálico y bombilla opalina'
    },
    {
        id:5,
        name: 'Espejo Forma',
        price: 2500,
        category: 'Espejos',
        img: '/EspejoForma.jpg',
        stock: 50,
        description: 'Espejo con estructura metálica recortada con forma irregular'
    },
    {
        id:6,
        name: 'Espejo Rejilla',
        price: 1300,
        category: 'Espejos',
        img: '/EspejoRejilla.jpg',
        stock: 50,
        description: 'Espejo de canto pulido con soporte de rejilla metálica'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve (products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt (productId)))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.category === productCategory ))
        }, 500)
    })
}