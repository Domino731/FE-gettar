import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export const fetchData = async (
  uid: string,
  col: "notes" | "tasks" | "progress",
  saveDataCallback: (data: any) => void
) => {
  const data: any[] = [];
  const querySnapshot = await getDocs(collection(db, "users", uid, col));
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  saveDataCallback(data);
};
