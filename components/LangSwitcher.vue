<template>
  <div>Switch Language</div>
  <select
    class="mt-2 btn i items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#12b488] hover:bg-[#12b489d7] focus:outline-none focus:border-[#12b489d7] focus:shadow-outline-indigo active:bg-[#12b489d7] transition ease-in-out duration-150"
    v-model="language"
  >
    <option 
      v-for="l in locales"
      :key="typeof l === 'object' ? l.code : l"
      :value="typeof l === 'object' ? l.code : l"
    >
      {{ typeof l === "object" ? l.name : l }}
    </option>
  </select>
</template>

<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
});
</script>

<style scoped></style>
