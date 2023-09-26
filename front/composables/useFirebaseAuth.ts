import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth'
import { errors } from "../api/firebase/enum"
export default function (): { user: any, registerUser: any, signInUser: any } {

  const { $auth }: any = useNuxtApp()
  const user = useState<User | null>("fb_user", () => null)

  const registerUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const userCreds = await createUserWithEmailAndPassword($auth, email, password)
      if (userCreds) {
        user.value = userCreds.user
        return true
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
      }
      return false
    }
    return false
  }

  const signInUser = async (email: string, password: string): Promise<any> => {
    // try {
    //   const userCreds = await signInWithEmailAndPassword($auth, email, password)
    //   if (userCreds) {
    //     user.value = userCreds.user
    //     return true
    //   }
    // } catch (error: unknown) {
    //   if (error instanceof Error) {
    //     httpErrors(error);
    //   }
    //   return false
    // }
    return await signInWithEmailAndPassword($auth, email, password)
      .then((response) => { console.log('response', response); return response })
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