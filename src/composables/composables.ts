import {utilsKey} from 'src/services/keys';
import {inject} from 'vue';

export function useUtilsInject() {
  const resolved = inject(utilsKey);
  if (!resolved) {
    throw new Error(`${utilsKey} was not provided.`);
  }

  return resolved;
}
