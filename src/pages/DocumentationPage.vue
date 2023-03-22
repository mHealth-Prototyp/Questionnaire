<script setup lang="ts">
import QuestionnaireDocumentationMd from 'src/assets/documentation/questionnaire-101.md?raw';
import 'src/assets/documentation/github-markdown.css';
import {ref} from 'vue';
import HierarchyExpansionItem, {HierarchyItem} from 'src/components/HierarchyExpansionItem.vue';

const hierarchyItems = ref(getHierarchyRecursion(QuestionnaireDocumentationMd, 1));

function getHierarchyRecursion(md: string, depth: number): HierarchyItem[] {
  const regex = new RegExp(`^(#{${depth}}[\\s\\w-]+)$`, 'gm');
  const splitValues = md.split(regex);
  const hiArray: HierarchyItem[] = [];
  for (let i = 1; i < splitValues.length - 1; i += 2) {
    const regexIn = new RegExp(`^(#{${depth + 1}}[\\s\\w-]+)$`, 'gm');
    const splitValuesIn = splitValues[i + 1].split(regexIn);
    const children = getHierarchyRecursion(splitValues[i + 1], depth + 1);
    const hi: HierarchyItem = {header: splitValues[i].slice(depth), section: splitValuesIn[0], children: children};
    hiArray.push(hi);
  }
  return hiArray;
}
</script>
<template>
  <q-page class="full-width row justify-center content-start">
    <div class="col-12 col-lg-8">
      <q-card
        flat
        bordered>
        <q-list
          class="rounded-borders"
          bordered>
          <HierarchyExpansionItem
            v-for="hierarchyItem in hierarchyItems"
            :key="hierarchyItem.header"
            :hierarchy-item="hierarchyItem"
            :depth="0" />
        </q-list>
      </q-card>
    </div>
  </q-page>
</template>
<style scoped lang="scss">
.q-list {
  background-color: white;
}
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  margin: 0 auto;
  padding: 15px;
}
</style>
