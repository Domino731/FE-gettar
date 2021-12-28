import { db } from "./config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const today = new Date().toLocaleDateString();

/**
 * create initial user data in firestore database in 'users' collection
 * @param {*} uid - uid of new created user
 */
export const createUserDatabase = (uid: string) => {
  setDoc(doc(db, "users", uid), {
    created: today,
  }).then(() => {
    addSubcollection(uid, "tasks");
    addSubcollection(uid, "progress");
  });
};

/**
 * create new subcollection in 'users' collection
 * @param {*} id - id of doc where you want to nest new collection
 * @param {*} name - name of new collection
 */
const addSubcollection = (id: string, name: string) => {
  setDoc(doc(db, "users", id, name, "initial"), {
    created: today,
  });
};
