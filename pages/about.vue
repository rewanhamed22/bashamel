<template>
  <div>
    <h2>{{ $t("about") }}</h2>
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
    <!-- <div>{{ data }}</div> -->
    <NuxtLink :to="localPath('/')"
      ><p class="btn my-4 ">{{ $t("home_btn") }}</p></NuxtLink
    >
    <LangSwitcher class="mt-4" />
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/ninja?name=mario", {
//   method: "post",
//   body: { age: 30 },
// });
const localPath = useLocalePath();

const { data } = await useFetch("/api/currency/GBP");
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
