const products = [
  {
    id: 1,
    categoria: "hilos",
    nombre: "Bobinas",
    precio: 100,
    stock: 300,
    cantidad: 1,
    tipo: "Unidad",
    img: "../assets/catalogo1.jpg",
    altImg: "bobinas"
  },
  {
    id: 2,
    categoria: "cierres",
    nombre: "Cierre reforzado",
    precio: 150,
    stock: 100,
    cantidad: 1,
    tipo: "Unidad",
    img: "../assets/catalogo2.jpg",
    altImg: "cierres reforzados"
  },
  {
    id: 3,
    categoria: "cintas",
    nombre: "Bies angosto",
    precio: 180,
    stock: 25,
    cantidad: 1,
    tipo: "Metro",
    img: "../assets/catalogo3.jpg",
    altImg: "bies angosto"
  },
  {
    id: 4,
    categoria: "cintas",
    nombre: "Cinta mochila",
    precio: 220,
    stock: 10,
    cantidad: 1,
    tipo: "Metro",
    img: "../assets/catalogo4.jpg",
    altImg: "cinta mochila ancha"
  },
  {
    id: 5,
    categoria: "hilos",
    nombre: "Hilo encerado",
    precio: 300,
    stock: 40,
    cantidad: 1,
    tipo: "Unidad",
    img: "../assets/catalogo5.jpg",
    altImg: "hilo encerado"
  },
  {
    id: 6,
    categoria: "cierres",
    nombre: "Cierre metal",
    precio: 210,
    stock: 150,
    cantidad: 1,
    tipo: "Unidad",
    img: "../assets/catalogo6.jpg",
    altImg: "cierre metal"
  },
  {
    id: 7,
    categoria: "agujas",
    nombre: "Aguja plástica",
    precio: 25,
    stock: 25,
    cantidad: 1,
    tipo: "Unidad",
    img: "../assets/catalogo7.jpg",
    altImg: "agujas plásticas"
  },
  {
    id: 8,
    categoria: "pegamentos",
    nombre: "Pegamil",
    precio: 380,
    stock: 10,
    cantidad: 1,
    tipo: "Unidad",
    img: "../assets/catalogo8.jpg",
    altImg: "pegamento pegamil"
  },
  {
    id: 9,
    categoria: "hilos",
    nombre: "Cono de nylon",
    precio: 500,
    stock: 50,
    cantidad: 1,
    tipo: "Unidad",
    img: "../assets/catalogo9.jpg",
    altImg: "cono de nylon"
  },
  {
    id: 10,
    categoria: "manualidades",
    nombre: "Pompones",
    precio: 250,
    stock: 15,
    cantidad: 1,
    tipo: "Metro",
    img: "../assets/catalogo10.jpg",
    altImg: "cinta de pompones"
  },
  {
    id: 11,
    categoria: "hilos",
    nombre: "Cono MH",
    precio: 400,
    stock: 160,
    cantidad: 1,
    tipo: "Unidad",
    img: "../assets/catalogo11.jpg",
    altImg: "conos hilo polyester mh"
  },
  {
    id: 12,
    categoria: "puntilla",
    nombre: "Puntilla crudo",
    precio: 320,
    stock: 10,
    cantidad: 1,
    tipo: "Metro",
    img: "../assets/catalogo12.jpg",
    altImg: "puntilla color crudo"
  },
  {
    id: 13,
    categoria: "cintas",
    nombre: "Cinta raso motivo",
    precio: 110,
    stock: 40,
    cantidad: 1,
    tipo: "Metro",
    img: "../assets/catalogo13.jpg",
    altImg: "cinta razo con lunares"
  },
  {
    id: 14,
    categoria: "alfileres",
    nombre: "Rueda alfileres",
    precio: 160,
    stock: 12,
    cantidad: 1,
    tipo: "Unidad",
    img: "../assets/catalogo14.jpg",
    altImg: "rueda de alfileres"
  },
  {
    id: 15,
    categoria: "agujas",
    nombre: "Enhebradores",
    precio: 15,
    stock: 30,
    cantidad: 1,
    tipo: "Unidad",
    img: "../assets/catalogo15.jpg",
    altImg: "enhebradores plásticos y chapa"
  },
  {
    id: 16,
    categoria: "cintas",
    nombre: "Cinta raso arcoiris",
    precio: 100,
    stock: 25,
    cantidad: 1,
    tipo: "Metro",
    img: "../assets/catalogo16.jpg",
    altImg: "cinta raso de arcoiris"
  }
]

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

function getProductsbyCategory(reqCategory) {
  return new Promise((resolve, reject) => {
    const searchedCategory = products.filter((item) => { return (item.categoria === reqCategory.toLowerCase()) })

    setTimeout(() => {
      if (searchedCategory) {
        resolve(searchedCategory);
      } else {
        reject("No pudimos encontrar productos en la categoria ingresada.");
      }
    }, 1000);
  });
}

function getProduct(reqId) {
  return new Promise((resolve, reject) => {
    const searchedItem = products.find((item) => { return (item.id === Number(reqId)) })


    setTimeout(() => {
      if (searchedItem) {
        resolve(searchedItem);
      } else {
        reject("No se encuentra el producto seleccionado");
      }
    }, 1000);
  });
}

export default getProducts;
export { getProduct, getProductsbyCategory };