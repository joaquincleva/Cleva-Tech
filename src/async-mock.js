const products = [
    {
        id: "1",
        title: "Samsung Galaxy S23",
        description: "Esta bestia tiene un apartado fotográfico sencillamente espectacular, la mejor autonomía de la gama alta y ahora, de la mano de Qualcomm, un rendimiento brutal.",
        price:  200000,
        stock:  8,
        category: "Celulares",
        pictureUrl: "https://cdn.shopify.com/s/files/1/0707/3609/products/UAG_HS_SAMSUNG_GALAXY-S23-2023-JUPITER_PLYO_ICE_PRM_01.png?v=1675521628"
    },
    {
        id: "2",
        title: "iPhone 14 Pro",
        description: "Es, en términos generales, de lo más completo que hay en el mercado, con un gran equilibrio entre batería, potencia, pantalla y cámara.",
        price:  500000,
        stock:  4,
        category: "Celulares",
        pictureUrl: "https://cdn.shopify.com/s/files/1/0596/0364/8691/products/ArcPulseForIPhone14ProMax-Purple-AluminumMirrorPolishGold_x650.png?v=1680842082"
    },
    {
        id: "3",
        title: "Google Pixel 7",
        description: "Buena cámara, buena pantalla, rendimiento envidiable y una relación calidad-precio de derribo. Es uno de los móviles del año, aunque siga con algunos puntos débiles a resolver.",
        price:  150000,
        stock:  5,
        category: "Celulares",
        pictureUrl: "https://lh3.googleusercontent.com/BYuLvIoBcvpvx2wj6ZN9fhKm7H8UwBo_4euwM9rJSzvulDwKHbm8v5YFfwBv-2jBbqSLMn2uUr_QW-NLJkZEaaCbJHYg58VDF5Qi"
    },
    {
        id: "4",
        title: "Dell XPS 13",
        description: "Ninguna laptop en años recientes ha tenido un impacto mayor que la XPS 13. Esta fue la que comenzó la carrera por los biseles delgados en 2015, cosa que influyó sobre absolutamente todos los dispositivos que cuentan con pantalla.",
        price:  300000,
        stock:  6,
        category: "Notebooks",
        pictureUrl: "https://cdn.eftm.com/wp-content/uploads/2021/06/xps-13-2-in-1-9310.png"
    },
    {
        id: "5",
        title: "Apple MacBook Air M1",
        description: "A pesar de tener el mismo costo, este procesador M1 aporta ventajas importantes a la MacBook Air, convirtiéndola en la portátil perfecta para los estudiantes.",
        price:  600000,
        stock:  5,
        category: "Notebooks",
        pictureUrl: "https://cbafederal.net/wp-content/uploads/2021/08/mbp-spacegray-select-202011.png"
    },
    {
        id: "6",
        title: "Lenovo Chromebook Duet 3",
        description: "la Lenovo Chromebook Duet 3 logra brindar una excelente experiencia de computadora portátil, aunque en un dispositivo muy pequeño. Su pequeña pantalla de 10.9 pulgadas es perfecta para estudiantes o cualquier persona que solo necesite un dispositivo compacto para llevar de un lado a otro.",
        price:  200000,
        stock:  5,
        category: "Notebooks",
        pictureUrl: "https://p2-ofp.static.pub/ShareResource/na/subseries/hero/lenovo-thinkpad-t14-gen3-amd-thunder-black.png"
    },
    {
        id: "7",
        title: "Amazon Fire HD 10",
        description: "Su sistema operativo basado en Android proporciona una experiencia intuitiva con un rendimiento mejorable por lo limitado de sus recursos. Eso sí, no tiene un stock de apps tan amplio como otras opciones.",
        price:  150000,
        stock:  1,
        category: "Tablets",
        pictureUrl: "https://smartec.store/wp-content/uploads/2022/06/Fire-HD-10.png"
    }
]

export const getProducts = () => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((res) => {
        setTimeout(()=> {
            res(products.find(producto => producto.id === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products.filter(producto => producto.category === category))
        }, 500)
    })
}