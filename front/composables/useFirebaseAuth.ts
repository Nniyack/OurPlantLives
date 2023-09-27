import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth'
import { errors } from "../api/firebase/enum"
export default function (): { user: any, registerUser: any, signInUser: any } {

  const { $auth }: any = useNuxtApp()
  const user = useState<User | null>("fb_user", () => null)

  const registerUser = async (email: string, password: string): Promise<any> => {
    await createUserWithEmailAndPassword($auth, email, password)
      .then((response) => {
        user.value = response.user;
        return response
      })
      .catch((error) => { console.log(error); throw new Error(errors[error.code].message); }

      )
  }

  const signInUser = async (email: string, password: string): Promise<any> => {
    return await signInWithEmailAndPassword($auth, email, password)
      .then((response) => {
        user.value = response.user;
        return response
      })
      .catch((error) => { throw new Error(errors[error.code].message); }

      )
    // return false
  }
  return {
    user,
    registerUser,
    signInUser
  }
}