
import { collection, addDoc } from "firebase/firestore";
export default function () {

  const addToFirestore = async (name: string, data: object): Promise<any> => {
    const { $firestore }: any = useNuxtApp()
    const newDoc = collection($firestore, name);
    return await addDoc(newDoc, data).then((response: any) => console.log(response))
      .catch((error: any) => {
        console.log(error)
      });
  }
  return {
    addToFirestore
  }
}