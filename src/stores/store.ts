import {computed} from 'vue';
import {defineStore} from 'pinia';
import {useLocalStorage, useSessionStorage} from '@vueuse/core';
import {defaultUserResource, defaultUserSettings, defaultUser} from 'src/models/defaults';

const storageKey = 'mhealth-proto-fhir-questionnaire';

export const useStore = defineStore('store', () => {
  const user =
    process.env.IS_2FA_ENABLED === 'TRUE' ? useSessionStorage(storageKey + '-user', defaultUser) : useLocalStorage(storageKey + '-user', defaultUser);
  const userIsLogged = computed(() => user.value.emailAddress !== defaultUser.emailAddress);
  const userResource =
    process.env.IS_2FA_ENABLED === 'TRUE'
      ? useSessionStorage(storageKey + '-userResource', defaultUserResource)
      : useLocalStorage(storageKey + '-userResource', defaultUserResource);
  const userSettings = computed(() => {
    if (userIsLogged.value) {
      return useLocalStorage(storageKey + '-userSettings-' + user.value.emailAddress, defaultUserSettings).value;
    } else {
      return defaultUserSettings;
    }
  });

  function logout() {
    user.value = defaultUser;
    userResource.value = defaultUserResource;
  }

  return {user, userIsLogged, userResource, userSettings, logout};
});
