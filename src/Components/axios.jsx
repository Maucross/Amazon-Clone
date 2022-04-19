import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-fe323/us-central1/api'
    //el link de arriba es el link para hacer las pruebas

    //para tener el otro link donde va a estar lo de produccion, primero tenho que actualuzar mi servicio de firestore a BLAZE,
    //ahi me sale el link d emi app que es algo asi: https://us-centrl-challenge-4b2b2..... cuando pongoe en el terminal firebase deploy --only functions
});

export default instance;