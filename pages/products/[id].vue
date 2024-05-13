<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
      repellat saepe! Sequi totam velit aut dolorum, fugiat repellendus
      voluptatibus voluptas.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style scoped></style>
