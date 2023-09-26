import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth'

export default function (): { user: any, registerUser: any, signInUser: any } {

  const { $auth }: any = useNuxtApp()
  const user = useState<User | null>("fb_user", () => null)

  const registerUser = async (email: string, password: string): Promise<boolean> => {
    console.log('registerUser')
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

  const signInUser = async (email: string, password: string): Promise<boolean> => {
    console.log('signInUser')
    try {
      const userCreds = await signInWithEmailAndPassword($auth, email, password)
      console.log(userCreds)
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
  return {
    user,
    registerUser,
    signInUser
  }
}