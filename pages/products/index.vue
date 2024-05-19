<template>
  <div>
    <div class="grid grid-cols-3 gap-10">
      <div v-for="p in products">
        <!-- <ProductCard :product="p" /> -->
        <Card :key="p.id" class="flex flex-col justify-center h-64">
          <CardHeader class="flex-row gap-4 items-center">
            <Avatar>
              <AvatarImage :src="p.image" />
              <AvatarFallback>{{ p.title.slice(0, 2) }}</AvatarFallback>
            </Avatar>
            <!-- <img :src="p.image" alt="thumb" class="thumb mb-3" /> -->
            <div>
              <CardTitle class="">{{ p.title }}</CardTitle>
              <CardDescription class="mt-2"
                ><Badge variant="destructive">{{ p.category }}</Badge></CardDescription
              >
            </div>
          </CardHeader>
          <CardContent
            ><p class="mt-4 truncate">{{ p.description }}</p></CardContent
          >
          <CardFooter>
            <NuxtLink :to="`/products/${p.id}`">
              <Button >View Details </Button>
            </NuxtLink>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import AvatarFallback from "~/components/ui/avatar/AvatarFallback.vue";
import CardContent from "~/components/ui/card/CardContent.vue";
import CardDescription from "~/components/ui/card/CardDescription.vue";
import CardFooter from "~/components/ui/card/CardFooter.vue";
import CardTitle from "~/components/ui/card/CardTitle.vue";

definePageMeta({
  layout: "products",
});
//fetch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
console.log(products);
useHead({
  title: "Nuxt | Merch",
  meta: [{ name: "description", content: "Nuxt 3 merch" }],
});
</script>

<style scoped>
.thumb {
  max-height: 200px;
  max-width: 200px;
  margin: 0 auto;
}
</style>
