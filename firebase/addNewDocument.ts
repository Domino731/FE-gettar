import { db } from "./config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

/**
 * add new document for current logged user in the specific nested collection
 * @param {*} id - id of doc where you want to nest new collection
 * @param {*} name - name of nested collection - tasks, progress or notes
 * @param {*} data - data that you want to set
 */
export const addNewDocument = async (id: string, name: string, data: any) => {
  return addDoc(collection(db, "users", id, name), data);
};
