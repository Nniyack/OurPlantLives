
import { doc, setDoc } from "firebase/firestore";
export default function () {

  const addToFirestore = async (): Promise<any> => {
    const { $firestore }: any = useNuxtApp()
    console.log('ok')
    return await setDoc(doc($firestore, "users", "test"), {
      email: "test",
      firstname: "dzd",
      lastname: "USA",
      localId: "&dzfezfez"
    }).then((response: any) => console.log(response))
      .catch((error: any) => {
        console.log(error)
      });
  }
  return {
    addToFirestore
  }
}