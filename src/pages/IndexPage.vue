<template>
  <q-page class="full-width row justify-center content-start">
    <template v-if="$q.platform.is.desktop">
      <div class="col-12 col-lg-4">
        <QuestionnaireSelector @questionnaire-changed="questionnaireChanged" />
      </div>
      <div class="col-12 col-lg-8">
        <q-card
          v-if="questionnaireData"
          class="q-pb-xs"
          flat
          bordered>
          <q-card-section class="card-title">{{ questionnaireData.getQuestionnaireTitle(locale) }}</q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <FQRenderer
              :questionnaire-data="questionnaireData"
              :language="locale"
              :translation-strings="{
                save: t('questionnaire.save'),
                reset: t('questionnaire.reset'),
                end: t('questionnaire.end'),
                close: t('common.close')
              }"
              :disable-save="disableSave"
              @save="save"
              @reset="reset" />
          </q-card-section>
        </q-card>
      </div>
    </template>
    <template v-if="$q.platform.is.mobile">
      <div class="col-12">
        <template v-if="questionnaireData === undefined">
          <QuestionnaireSelector @questionnaire-changed="questionnaireChanged" />
        </template>
        <template v-else>
          <q-btn
            flat
            color="primary"
            @click="questionnaireData = undefined">
            {{ t('common.back') }}
          </q-btn>
        </template>
      </div>
      <div class="col-12">
        <FQRenderer
          v-if="questionnaireData"
          :key="randomKey"
          :questionnaire-data="questionnaireData"
          :language="locale"
          :translation-strings="{
            save: t('questionnaire.save'),
            reset: t('questionnaire.reset'),
            end: t('questionnaire.end'),
            close: t('common.close')
          }"
          :disable-save="disableSave"
          @save="save"
          @reset="reset" />
      </div>
    </template>
  </q-page>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {getFullName, Questionnaire, selectName} from '@i4mi/fhir_r4';
import {APP_LANGUAGES, MessageLanguages, MessageSchema} from 'src/boot/i18n';
import QuestionnaireSelector from 'src/components/QuestionnaireSelector.vue';
import {useUtilsInject} from 'src/composables/composables';
import {uploadToEPDPlayground} from 'src/services/utils';
import {ITI_65_AUTHOR_ROLE} from '@i4mi/mhealth-proto-components';
import {uid, useQuasar} from 'quasar';
import {ref} from 'vue';
import {QuestionnaireData} from '@i4mi/fhir_questionnaire';
import {useStore} from 'src/stores/store';
import {FQRenderer} from '@i4mi/fhir-questionnaire-renderer';

const $q = useQuasar();
const {t, locale} = useI18n<{message: MessageSchema}, MessageLanguages>();
const store = useStore();
const utils = useUtilsInject();

const questionnaireData = ref<QuestionnaireData | undefined>();

const disableSave = ref(false);

const randomKey = ref(-1);

function questionnaireChanged(questionnaire: Questionnaire | null) {
  if (questionnaire) {
    questionnaireData.value = new QuestionnaireData(questionnaire, APP_LANGUAGES);
    questionnaireData.value.populateAnswers([store.userResource]);
  } else {
    questionnaireData.value = undefined;
  }
}

function save() {
  if (questionnaireData.value && questionnaireData.value.isResponseComplete(true, true)) {
    disableSave.value = true;
    uploadToEPDPlayground(
      questionnaireData.value.getQuestionnaireResponse(locale.value, {
        reset: false,
        includeID: true,
        patient: {
          reference: process.env.BASE_URL + store.userResource.resourceType + '/' + store.userResource.id,
          display: store.userResource.name ? getFullName(selectName(store.userResource.name)) : ''
        }
      }),
      store.userResource,
      {
        title: questionnaireData.value.getQuestionnaireTitle(locale.value) ?? uid(),
        isFhir: true,
        description: questionnaireData.value.getQuestionnaireTitle(locale.value) ?? uid(),
        contentLanguage: locale.value,
        sourceIdentifier: store.userSettings.OIDs.app,
        categoryCoding: {
          system: 'http://snomed.info/sct',
          code: '184216000',
          display: 'Patient record type'
        },
        typeCoding: {system: 'http://snomed.info/sct', code: '419891008', display: 'Record artifact (record artifact)'},
        facilityCoding: store.userSettings.facilityType,
        practiceSettingCoding: store.userSettings.practiceSetting,
        authorRole: ITI_65_AUTHOR_ROLE.PAT
      },
      utils
    )
      .then(() => {
        $q.notify({
          message: t('questionnaire.saved'),
          position: 'top-right'
        });
        reset();
        disableSave.value = false;
        randomKey.value *= -1;
      })
      .catch((error) => {
        $q.notify({
          message: t('common.error'),
          type: 'negative',
          position: 'top-right'
        });
        console.error(error);
        disableSave.value = false;
      });
  }
}

function reset() {
  if (questionnaireData.value) {
    questionnaireData.value.resetResponse();
    questionnaireData.value.populateAnswers([store.userResource]);
  }
}
</script>
<style scoped lang="scss"></style>
