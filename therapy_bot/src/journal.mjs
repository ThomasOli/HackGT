import { getDocs, collection } from "firebase/firestore";
import { getDb } from "./db.mjs"

const collection_name = "zzzzzzzzzzzzzzzzzzzx";

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = []

    doc_refs.forEach(zzzzzzzzzzzzzzzzzzzx => {
        res.push({
            id: zzzzzzzzzzzzzzzzzzzx.id, 
            ...zzzzzzzzzzzzzzzzzzzx.data()
        })
    })

    return res
}