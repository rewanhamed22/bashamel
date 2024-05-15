<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

// const schema = toTypedSchema(
//   yup.object({
//     email: yup.string().email().required(),
//     password: yup.string().min(8).required,
//   })
// );
const { errors, defineField } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
    })
  ),
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
</script>

<template>
  <div class="container mt-4">
    <label htmlFor="email">Email: </label>
    <input
      class="px-4 mb-4 rounded-xl text-[#272B51] w-1/2 h-8 input input-bordered leading-tight focus:outline-none focus:border-[#272B51] focus:text-[#272B51] bg-white border-[#705D9D]/30"
      v-model="email"
      v-bind="emailAttrs"
    />
    <div class="text-red-400 mt-4">errors: {{ errors.email }}</div>

    <br />
    <label htmlFor="password">password: </label>
    <input
      class="px-4 mb-4 rounded-xl text-[#272B51] w-1/2 h-8 input input-bordered leading-tight focus:outline-none focus:border-[#272B51] focus:text-[#272B51] bg-white border-[#705D9D]/30"
      v-model="password"
      v-bind="passwordAttrs"
    />
    <!-- <div>values: {{ values }}</div> -->
    <div class="text-red-400 mt-4">errors: {{ errors.password }}</div>
  </div>
</template>
