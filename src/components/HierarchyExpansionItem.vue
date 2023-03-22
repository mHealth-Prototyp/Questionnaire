<script setup lang="ts">
import VueMd from 'vue-markdown-render';

export type HierarchyItem = {
  header: string;
  section: string;
  children?: HierarchyItem[];
};
export interface HierarchyExpansionItemProps {
  depth: number;
  hierarchyItem: HierarchyItem;
}
defineProps<HierarchyExpansionItemProps>();
</script>
<template>
  <q-expansion-item
    :class="'group-' + depth"
    :header-inset-level="depth * (1 / 5)"
    :group="'group-' + depth"
    expand-separator
    :default-opened="depth === 0">
    <template #header>
      <q-item-section class="text-body2 text-weight-bold"> {{ hierarchyItem.header }} </q-item-section>
    </template>
    <vue-md
      class="markdown-body"
      :source="hierarchyItem.section" />
    <HierarchyExpansionItem
      v-for="child in hierarchyItem.children"
      :key="child.header"
      :depth="depth + 1"
      :hierarchy-item="child" />
  </q-expansion-item>
</template>
<style scoped lang="scss">
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  margin: 0 auto;
  padding: 15px;
}
</style>
