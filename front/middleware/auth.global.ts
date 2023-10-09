import { userStore } from "../stores/authentification";
const { getAll, getDocByField }: any = useFirebaseHttps();
export default defineNuxtRouteMiddleware((to, from) => {
  const store = userStore();
  getAll("users");

  console.log(store.user)
})