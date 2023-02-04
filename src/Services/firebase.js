// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKtHKJ2ud-mBdrv63JxvZioybD_lHZlDs",
  authDomain: "elisa-merceria-cae33.firebaseapp.com",
  projectId: "elisa-merceria-cae33",
  storageBucket: "elisa-merceria-cae33.appspot.com",
  messagingSenderId: "880433337737",
  appId: "1:880433337737:web:427606a46b0a51a0a97d58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const productsRef = collection(database, "products");

/* Funciones del antiguo mock service */
export async function getProducts(){
    const snapshot = await getDocs(productsRef)
    const products = snapshot.docs.map((elem) => ({...elem.data(), id: elem.id}))
    return products;
}

export async function getProductsbyCategory(reqCategory){
    const search = reqCategory.toLowerCase();
    const q = query(productsRef, where("category", "==", search));
    const snapshot = await getDocs(q);

    const products = snapshot.docs.map((elem) => ({...elem.data(), id: elem.id}))
    
    return products;
}


export async function getProduct(reqId){
    const docRef = doc(productsRef, reqId);
    const snapshot = await getDoc(docRef);

    if (!snapshot.data()) {
        throw new Error('Producto no encontrado');
    } else {
        return {...snapshot.data(), id: snapshot.id};
    }
}

export async function createOrder(order){
    const orderRef = collection(database, "order");
    
    let response = await addDoc(orderRef, order);
    return response.id;
}

/* export async function exportArray(){
    const products = []

    for (let item of products) {
        addDoc(collection(database, "products"), item).then(
            response => console.log("item creado correctamente: ", response.id)
        )
    }
} */


export default database;