<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink :to="localPath('/')">Home</NuxtLink></li>
          <li><NuxtLink :to="localPath('/about')">About</NuxtLink></li>
          <li><NuxtLink :to="localPath('/products')">Products</NuxtLink></li>
        </ul>
        <NuxtLink :to="localPath('/vee')" class="btn">Sign up</NuxtLink>
      </nav>
    </header>
    <!-- output the page content  -->
    <div class="container content mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
<style scoped>
[dir="rtl"] .content {
  direction: rtl; /* Right-to-Left text direction for Arabic */
}

[dir="ltr"] .content {
  direction: ltr; /* Left-to-Right text direction for English */
}
</style>
<script setup>
const localPath = useLocalePath();
</script>
