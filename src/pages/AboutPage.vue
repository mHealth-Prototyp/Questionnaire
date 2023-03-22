<template>
  <q-page class="full-width row justify-center content-start">
    <div class="col-12 col-lg-8">
      <q-card
        flat
        bordered>
        <q-card-section class="card-title">{{ $t('about.title') }} ({{ $t('about.version') }} 1.0.0)</q-card-section>
        <q-separator />
        <q-card-section>
          <p class="text-body2">
            {{ $t('about.aboutText') }}
          </p>
          <p class="text-body2">
            {{ $t('about.readMore') }}
          </p>
          <ul class="text-body2">
            <li
              v-for="link in ABOUT_LINKS"
              :key="link.url">
              <a
                :href="link.url"
                target="_blank">
                {{ getLocalisedLinkLabel(link, $i18n.locale) }}
              </a>
            </li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ABOUT_LINKS from 'src/assets/aboutLinks.json';

/**
 * Helper for getting the correct localised link label
 */
function getLocalisedLinkLabel(link: {label: {[l: string]: string}}, locale: string): string {
  return link.label[locale];
}
</script>
