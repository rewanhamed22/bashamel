<template>
  <div>
    <h2>{{ $t("home") }}</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dicta
      numquam voluptatem quo aliquam perspiciatis consequuntur debitis nulla
      consectetur voluptate.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dicta
      numquam voluptatem quo aliquam perspiciatis consequuntur debitis nulla
      consectetur voluptate.
    </p>
  </div>
  <NuxtLink :to="localPath('/about')"
    ><Button class="btn my-4">{{ $t("about_btn") }}</Button></NuxtLink
  >
  <LangSwitcher class="mt-4" />
  
</template>

<script setup>
const localPath = useLocalePath();
</script>

<style scoped>
h2 {
  margin-bottom: 20x;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
