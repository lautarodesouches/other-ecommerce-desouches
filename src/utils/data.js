const data = [
    {
        "id": 1,
        "name": "Notebook Exo Smart P33 Intel N4020",
        "brand": "Exo Smart",
        "category": "Notebooks",
        "price": 48999,
        "amountAvailable": 2,
        "freeShipping": false,
        "availableImages": 5,
        "availableColors": [
            "red",
            "grey",
            "dark"
        ],
        "description": "La notebook Exo Smart P33 Intel N4020 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.        "
    },
    {
        "id": 2,
        "name": "Notebook Lenovo IdeaPad 15IIL05 almond 15.6",
        "brand": "Lenovo",
        "category": "Notebooks",
        "price": 83990,
        "amountAvailable": 79,
        "freeShipping": true,
        "availableImages": 3,
        "availableColors": [
            "red",
            "white",
            "dark"
        ],
        "description": "La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento."
    },
    {
        "id": 3,
        "name": "Notebook EXO Smart XL4-S3542",
        "brand": "Exo Smart",
        "category": "Notebooks",
        "price": 76999,
        "amountAvailable": 35,
        "freeShipping": true,
        "availableImages": 3,
        "availableColors": [
            "dark",
            "blue",
            "grey"
        ],
        "description": "La notebook EXO Smart XL4-S3542 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina."
    },
    {
        "id": 4,
        "name": "Notebook Banghó Max L4 i1",
        "brand": "Bangho",
        "category": "Notebooks",
        "price": 45999,
        "amountAvailable": 41,
        "freeShipping": true,
        "availableImages": 4,
        "availableColors": [
            "dark",
            "blue",
            "green"
        ],
        "description": "La notebook Banghó Max L4 i1 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina."
    },
    {
        "id": 5,
        "name": "Apple Macbook Air",
        "brand": "Apple",
        "category": "Notebooks",
        "price": 199999,
        "amountAvailable": 7,
        "freeShipping": true,
        "availableImages": 4,
        "availableColors": [
            "dark",
            "blue",
            "white"
        ],
        "description": "La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos. Además, el Neural Engine de 16 núcleos se encarga de acelerar todos los procesos de aprendizaje automático. Todo en un diseño silencioso sin ventilador que te ofrece la mayor duración de batería en una MacBook Air: hasta 18 horas. (1) Portátil como siempre, más poderosa que nunca."
    },
    {
        "id": 6,
        "name": "Notebook Noblex 14.1",
        "brand": "Noblex",
        "category": "Notebooks",
        "price": 46999,
        "amountAvailable": 71,
        "freeShipping": false,
        "availableImages": 4,
        "availableColors": [
            "grey",
            "red",
            "dark"
        ],
        "description": "La notebook Noblex N14WCE128 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina."
    },
    {
        "id": 7,
        "name": "Notebook Lenovo IdeaPad 15IML05 abyss blue táctil 15.6",
        "brand": "Lenovo",
        "category": "Notebooks",
        "price": 90000,
        "amountAvailable": 43,
        "freeShipping": true,
        "availableImages": 2,
        "availableColors": [
            "dark",
            "red",
            "blue"
        ],
        "description": "La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento."
    },
    {
        "id": 8,
        "name": "Sony PlayStation 5 825GB Standard color blanco y negro",
        "brand": "Sony",
        "category": "Consolas",
        "price": 246999,
        "amountAvailable": 81,
        "freeShipping": true,
        "availableImages": 3,
        "availableColors": [
            "dark",
            "red",
            "blue"
        ],
        "description": "La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento."
    },
    {
        "id": 9,
        "name": "Consola Xbox Series S 512gb Microsoft",
        "brand": "Microsoft",
        "category": "Consolas",
        "price": 95000,
        "amountAvailable": 93,
        "freeShipping": true,
        "availableImages": 2,
        "availableColors": [
            "white",
            "red",
            "blue"
        ],
        "description": "Rendimiento de nueva generación en la Xbox más pequeña de la historia"
    },
    {
        "id": 10,
        "name": "Nintendo Switch OLED 64GB Standard",
        "brand": "Nintendo",
        "category": "Consolas",
        "price": 94999,
        "amountAvailable": 21,
        "freeShipping": false,
        "availableImages": 3,
        "availableColors": [
            "red",
            "blue",
            "dark"
        ],
        "description": "Con tu consola Switch tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos."
    },
    {
        "id": 11,
        "name": "Samsung Galaxy S20 FE 128 GB cloud navy 6 GB RAM",
        "brand": "Samsung",
        "category": "Celulares",
        "price": 85999,
        "amountAvailable": 48,
        "freeShipping": false,
        "availableImages": 4,
        "availableColors": [
            "white",
            "dark",
            "blue"
        ],
        "description": "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados."
    },
    {
        "id": 12,
        "name": "Samsung Galaxy A12 64 GB negro 4 GB RAM",
        "brand": "Samsung",
        "category": "Celulares",
        "price": 34900,
        "amountAvailable": 25,
        "freeShipping": true,
        "availableImages": 2,
        "availableColors": [
            "grey",
            "green",
            "red"
        ],
        "description": "Mayor rendimiento. Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar."
    },
    {
        "id": 13,
        "name": "Motorola Edge 20 Lite 128 GB gris 6 GB RAM",
        "brand": "Motorola",
        "category": "Celulares",
        "price": 70000,
        "amountAvailable": 55,
        "freeShipping": true,
        "availableImages": 4,
        "availableColors": [
            "white",
            "green",
            "blue"
        ],
        "description": "Con su potente procesador y memoria RAM de 6 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras."
    },
    {
        "id": 14,
        "name": "Xiaomi Mi 11T Dual SIM 128 GB gris meteorito 8 GB RAM",
        "brand": "Xiaomi",
        "category": "Celulares",
        "price": 104970,
        "amountAvailable": 81,
        "freeShipping": true,
        "availableImages": 2,
        "availableColors": [
            "green",
            "dark",
            "blue"
        ],
        "description": "¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas."
    },
    {
        "id": 15,
        "name": "Xiaomi Redmi 9A Dual SIM 32 GB verde majestuoso 2 GB RAM",
        "brand": "Xiaomi",
        "category": "Celulares",
        "price": 28999,
        "amountAvailable": 23,
        "freeShipping": false,
        "availableImages": 2,
        "availableColors": [
            "red",
            "dark",
            "grey"
        ],
        "description": "Su memoria RAM de 2 GB es justo lo que necesitás para utilizar las funciones más importantes como llamar, enviar mensajes, navegar y ejecutar aplicaciones de uso frecuente como redes sociales o multimedia."
    },
    {
        "id": 16,
        "name": "Moto G60s 128 GB azul 6 GB RAM",
        "brand": "Motorola",
        "category": "Celulares",
        "price": 52999,
        "amountAvailable": 74,
        "freeShipping": true,
        "availableImages": 3,
        "availableColors": [
            "blue",
            "white",
            "dark"
        ],
        "description": "Máxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido."
    },
    {
        "id": 17,
        "name": "Xiaomi Mi Smart Band 5",
        "brand": "Xiaomi",
        "category": "Smart Watch",
        "price": 6415,
        "amountAvailable": 13,
        "freeShipping": true,
        "availableImages": 3,
        "availableColors": [
            "white",
            "dark",
            "blue"
        ],
        "description": "La Mi Band 5 es un salto de evolución respecto a sus predecesoras. Sin perder su versatilidad, la nueva pulsera inteligente de Xiaomi presenta mejoras que la hacen mucho más cómoda y funcional."
    },
    {
        "id": 18,
        "name": "Smart TV Samsung Series 7 UN50AU7000GCZB",
        "brand": "Samsung",
        "category": "Smart Tv",
        "price": 80000,
        "amountAvailable": 31,
        "freeShipping": true,
        "availableImages": 4,
        "availableColors": [
            "dark",
            "red",
            "green"
        ],
        "description": "Con el Smart TV UN50AU7000G vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos."
    },
    {
        "id": 19,
        "name": "Smart TV Philips 6800 Series",
        "brand": "Philips",
        "category": "Smart Tv",
        "price": 49999,
        "amountAvailable": 49,
        "freeShipping": false,
        "availableImages": 3,
        "availableColors": [
            "blue",
            "white",
            "grey"
        ],
        "description": "Con el Smart TV UN50AU7000G vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos."
    },
    {
        "id": 20,
        "name": "Auriculares in-ear inalámbricos Soundpeats",
        "brand": "Soundpeats",
        "category": "Auriculares",
        "price": 5591,
        "amountAvailable": 95,
        "freeShipping": false,
        "availableImages": 3,
        "availableColors": [
            "dark",
            "green",
            "white"
        ],
        "description": "Con el Smart TV UN50AU7000G vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos."
    }
]

let condition = true;

export const getData = (time) => {
    return new Promise( (res, rej) => {
        setTimeout(() => {
            if (condition) {
                return res(data);
            } else {
                return rej('Algo salio mal');
            }
        }, time);
    })
}