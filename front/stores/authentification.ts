// const { registerUser, signInUser }: any = useFirebaseAuth();

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { errors } from "../api/firebase/enum"

export const userStore = defineStore('auth', () => {
  const { $auth }: any = useNuxtApp()
  const { add }: any = useFirebaseHttps();
  const user = useState<User | null>("fb_user", () => null)
  const error: Ref<String | null> = ref(null)

  async function signInUser(email: string, password: string): Promise<any> {
    return await signInWithEmailAndPassword($auth, email, password)
      .then((response) => {
        user.value = response.user;
        return response
      })
      .catch((error) => { return [true, errors[error.code].message] }

      )
  }
  async function registerUser(userForm: any): Promise<any> {
    return await createUserWithEmailAndPassword($auth, userForm.email, userForm.password)
      .then((response) => {
        user.value = response.user;
        return add("users", {
          email: userForm.email,
          firstname: userForm.firstname,
          lastname: userForm.lastname,
          uid: response.user.uid,
        }).then((): [boolean, string] => {
          return [false, "Bienvenue sur OurLivesPlants"]
        });
      })
      .catch((error) => { return [true, errors[error.code].message] }

      )
    // );
  }

  function clearUser() {
    user.value = null;
  }

  async function fetchUser(): Promise<any> {
    $auth.onAuthStateChanged(async (userData: null) => {
      if (userData === null) {
        console.log('nouser', userData)
        clearUser()
      } else {
        user.value = userData
        console.log(user.value)
      }
    });
  }

  function signOutUser() {
    signOut($auth).then(() => {
      clearUser()
    }).catch((error) => {
      throw new Error('Sign out error', error);
    });
  }




  return { user, error, registerUser, signInUser, fetchUser, signOutUser }
})