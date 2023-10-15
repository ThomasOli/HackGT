import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

let db = false;

export const getDb = () => {
    if(!db){
        const firebaseConfig = {
            apiKey: "AIzaSyCfWqZOclJLqO4av0AXPLBiL_uwIouT-UM",
            authDomain: "hoot-a6b97.firebaseapp.com",
            databaseURL: "https://hoot-a6b97-default-rtdb.firebaseio.com",
            projectId: "hoot-a6b97",
            storageBucket: "hoot-a6b97.appspot.com",
            messagingSenderId: "202400040194",
            appId: "1:202400040194:web:873d8fd396e610a826ae1b",
            measurementId: "G-Z1P7VV0XKY"
          };

        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}