
import { collection, addDoc, doc, getDocs, getDoc, where, query } from "firebase/firestore";
export default function () {



  const add = async (name: string, data: object): Promise<any> => {
    const { $firestore }: any = useNuxtApp();
    const newDoc = collection($firestore, name);
    return await addDoc(newDoc, data).then((response: any) => console.log(response))
      .catch((error: any) => {
        console.log(error)
      });
  }

  const getAll = async (name: string) => {
    const { $firestore }: any = useNuxtApp();
    try {
      const querySnapshot = await getDocs(collection($firestore, name));
      console.log('ALLDATA', querySnapshot)
      const allData: any = [];
      await querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        allData.push({ id: doc.id, ...doc.data() })
      });
      return allData;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  const getDocById = async (name: string, id: string) => {
    const { $firestore }: any = useNuxtApp();
    try {
      const docRef = doc($firestore, name, id);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  const getDocByField = async (name: string, field: string, value: string) => {
    try {
      const { $firestore }: any = useNuxtApp();
      const q = query(collection($firestore, name), where(field, "==", value));

      const querySnapshot = await getDocs(q);
      const allData: any = [];
      await querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        allData.push({ id: doc.id, ...doc.data() })
      });
      return allData;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return {
    getDocById,
    getDocByField,
    add,
    getAll
  }

}