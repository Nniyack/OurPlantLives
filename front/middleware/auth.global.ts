import { userStore } from '~/stores/authentification';
import { storeToRefs } from 'pinia'
export default defineNuxtRouteMiddleware(async (to, from) => {
  const app = useNuxtApp();
  const Store = await userStore();
  const authenticated = computed(() => Store)
  Store.fetchUser();
  let user;
  try {
    user = await authenticated;
  } catch (e) {
    user = null;
  }
  if (!user) {
    return navigateTo('/');
  }

  console.log('watching route', authenticated.value.$state)
});