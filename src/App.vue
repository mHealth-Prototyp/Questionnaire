<template>
  <router-view />
</template>

<script setup lang="ts">
import {provide} from 'vue';
import {EpdPlaygroundUtils, FhirUtils} from '@i4mi/mhealth-proto-components';
import {utilsKey} from './services/keys';
import {useStore} from './stores/store';
import {defaultUserSettings} from './models/defaults';

const store = useStore();

const env = {
  FHIR_4_CONTENT_TYPE: process.env.FHIR_4_CONTENT_TYPE,
  BASE_URL: process.env.BASE_URL,
  MESSAGE_ENDPOINT: process.env.MESSAGE_ENDPOINT,
  DEFAULT_TIMEOUT: parseInt(process.env.DEFAULT_TIMEOUT),
  SOURCE_ENDPOINT: process.env.SOURCE_ENDPOINT,
  TARGET_ENDPOINT: process.env.TARGET_ENDPOINT,
  IS_2FA_ENABLED: process.env.IS_2FA_ENABLED
};

provide(utilsKey, {epdUtils: new EpdPlaygroundUtils(env, store.userSettings.OIDs), fhirUtils: new FhirUtils(env.BASE_URL, defaultUserSettings.OIDs)});
</script>

<style lang="scss">
html {
  background-color: $light-page;
}

.card-title {
  color: $primary;
  font-size: 1.2em;
  text-align: center;
  font-weight: bolder;
}

.q-card {
  margin: 1.5em;
}

.q-card p {
  margin-bottom: 0.4em;
  text-align: justify;
}

.q-drawer {
  background-color: $light-page;
  border-top: 1px solid $primary;
}

.q-drawer--left.q-drawer--bordered {
  border-right: 1px solid $primary;
}

a {
  text-decoration: none;
  color: $primary;
}

a:hover {
  text-decoration: none;
  color: $secondary;
}

a:visited {
  text-decoration: none;
  color: $dark;
}
</style>
