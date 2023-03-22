<template>
  <q-card
    flat
    bordered>
    <q-card-section class="card-title">{{ t('questionnaire.selector.title') }}</q-card-section>
    <q-separator />
    <q-card-section>
      <q-input
        v-model="url"
        type="url"
        outlined
        :label="t('questionnaire.selector.descriptionURL')"
        clearable
        debounce="1000"
        :disable="file !== null || selectedQuestionnaire !== null"
        :error="url !== null && error">
        <template #prepend>
          <q-icon name="fa-solid fa-link" />
        </template>
      </q-input>
    </q-card-section>
    <q-card-section>
      <q-file
        v-model="file"
        outlined
        :label="t('questionnaire.selector.descriptionUpload')"
        clearable
        :disable="url !== null || selectedQuestionnaire !== null"
        :error="file !== null && error">
        <template #prepend>
          <q-icon name="fa-solid fa-hard-drive" />
        </template>
      </q-file>
    </q-card-section>
    <q-card-section>
      <q-select
        v-model="selectedQuestionnaire"
        :options="
          questionnaireList.map((q) => {
            return {label: q._title ? readI18N(q._title, locale) : q.title, value: q};
          })
        "
        emit-value
        map-options
        :label="t('questionnaire.selector.descriptionDefault')"
        clearable
        outlined
        :disable="url !== null || file !== null">
        <template #prepend>
          <q-icon name="fa-solid fa-list" />
        </template>
      </q-select>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import {Questionnaire, readI18N} from '@i4mi/fhir_r4';
import {useQuasar} from 'quasar';
import ORGAN_DONATION from 'src/assets/questionnaires/organ_donation.json';
import ADVANCE_DIRECTIVES from 'src/assets/questionnaires/Patientenverfuegung.json';
import {MessageLanguages, MessageSchema} from 'src/boot/i18n';
import {ref, watch} from 'vue';
import {useI18n} from 'vue-i18n';

const q = useQuasar();
const {t, locale} = useI18n<{message: MessageSchema}, MessageLanguages>();
const emits = defineEmits<{
  (e: 'questionnaireChanged', questionnaire: Questionnaire | null): void;
}>();

const questionnaireList = [ORGAN_DONATION as Questionnaire, ADVANCE_DIRECTIVES as Questionnaire];

const url = ref<string | null>(null);
const file = ref<File | null>(null);
const selectedQuestionnaire = ref<Questionnaire | null>(null);

const error = ref(false);

watch(url, (newUrl) => {
  error.value = false;
  if (newUrl) {
    fetch(newUrl)
      .then((value) => value.json())
      .then((value) => emits('questionnaireChanged', value))
      .catch((e) => {
        q.notify({
          message: t('common.error'),
          type: 'negative',
          position: 'top-right'
        });
        error.value = true;
        console.error(e);
      });
  } else {
    emits('questionnaireChanged', null);
  }
});
watch(file, (newFile) => {
  error.value = false;
  if (newFile) {
    file.value
      ?.text()
      .then((value) => emits('questionnaireChanged', JSON.parse(value)))
      .catch((e) => {
        q.notify({
          message: t('common.error'),
          type: 'negative',
          position: 'top-right'
        });
        error.value = true;
        console.error(e);
      });
  } else {
    emits('questionnaireChanged', null);
  }
});
watch(selectedQuestionnaire, (newSelectedQuestionnaire) => {
  if (newSelectedQuestionnaire) {
    emits('questionnaireChanged', newSelectedQuestionnaire);
  } else {
    emits('questionnaireChanged', null);
  }
});
</script>
<style scoped lang="scss"></style>
