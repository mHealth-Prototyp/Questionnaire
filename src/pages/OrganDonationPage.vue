<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {getFullName, Questionnaire, selectName} from '@i4mi/fhir_r4';
import {APP_LANGUAGES, MessageLanguages, MessageSchema} from 'src/boot/i18n';
import ORGAN_DONATION from 'src/assets/questionnaires/organ_donation.json';
import {ITI_65_AUTHOR_ROLE} from '@i4mi/mhealth-proto-components';
import {uploadToEPDPlayground} from 'src/services/utils';
import {uid, useQuasar} from 'quasar';
import {useUtilsInject} from 'src/composables/composables';
import {QuestionnaireData} from '@i4mi/fhir_questionnaire';
import {useStore} from 'src/stores/store';
import {FQRenderer} from '@i4mi/fhir-questionnaire-renderer';
import {ref} from 'vue';

const $q = useQuasar();
const {t, locale} = useI18n<{message: MessageSchema}, MessageLanguages>();
const store = useStore();
const utils = useUtilsInject();

const disableSave = ref(false);

const randomKey = ref(-1);

const questionnaireData = ref<QuestionnaireData | undefined>();
questionnaireData.value = new QuestionnaireData(ORGAN_DONATION as Questionnaire, APP_LANGUAGES);
questionnaireData.value.populateAnswers([store.userResource]);

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
<template>
  <q-page class="full-width row justify-center content-start">
    <template v-if="$q.platform.is.desktop">
      <div class="col-12 col-lg-8">
        <q-card
          v-if="questionnaireData"
          class="q-pb-xs questionnaire-card">
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
<style scoped lang="scss">
.q-card {
  background-color: #f0e9e7;
  box-shadow: none;
  font-family: 'Helvetica';
}
.q-card > .card-title {
  color: #000000;
}
.q-card > hr {
  display: none;
}

:deep() .fq-intro {
  background-color: unset;
  border-width: 0;
}

:deep() #fq-item-Dgroup {
  margin-bottom: 0 !important;
}

:deep() #fq-item-Q1 {
  margin-top: 0 !important;
}

:deep() #fq-item-Q1,
:deep() #fq-item-Dgroup {
  background-color: white;
  box-shadow: 3px 3px 6px -4px rgba(0, 0, 0, 0.5);
  margin: 1em;
  border-radius: 2em;
  padding: 1em;
  .q-card {
    border-width: 0;
  }
}

:deep() .fq-item-display > .q-card,
:deep() .fq-actions {
  background-color: unset;
  border-width: 0;
  .fq-end-text {
    display: none;
  }
  .q-btn--flat {
    background-color: #f2e5ea !important;
    color: #bb2765 !important;
  }
  .q-btn--standard {
    background-color: #bb2765 !important;
  }
}

:deep() #fq-item-Q1 label {
  color: #bb2765;
  font-weight: bolder;
  font-size: 1.1em;
}

:deep() .fq-item-string label {
  color: unset !important;
  font-weight: normal !important;
}

:deep() .fq-item-choice {
  svg {
    color: #bb2765;
    transform: scale(1.5);
  }
  .q-radio__label {
    font-size: 1.1em;
    margin-left: 1em;
  }
  .q-checkbox__label {
    font-size: 1.1em;
    color: #bb2765;
    margin-left: 0.5em;
  }
  .fq-choice {
    margin-bottom: 0.5em;
  }
  .q-checkbox__inner--truthy {
    color: #f2e5ea !important;
  }
}
:deep() .fq-item-string,
:deep() .fq-item-date {
  .q-card__section {
    padding-top: 0;
  }
  .fq-label {
    padding-top: 16px;
  }
}
:deep() .fq-error {
  background-color: #dd92b2 !important;
}
:deep() .fq-checkbox {
  margin-bottom: 0 !important;
  .q-checkbox__inner {
    margin-left: 0.5em;
    color: #bb2765;
  }
}

.questionnaire-card {
  max-width: 700px;
  padding: 1em 3em;
}
</style>
