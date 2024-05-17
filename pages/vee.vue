<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

const isRegisterSuccess = ref(false);

const { t } = useI18n();

const schema = yup.object().shape({
  email: yup
    .string()
    .email(t("email_invalid"))
    .required(t("email_required"))
    .matches(/^[\w.%+-]+@bashamel\.com$/, t("email_format")),
  password: yup
    .string()
    .required(t("password_required"))
    .min(6, t("password_length"))
    .matches(/^(?=.*[a-zA-Z])(?=.*\d).+$/, t("password_format")),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], t("password_mismatch"))
    .required(t("confirm_required")),
});

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const [confirmPassword, conPasswordAttrs] = defineField("confirmPassword");

const failValidation = () => {
  alert("Register failed");
};

const handleCreateAccount = handleSubmit((values) => {
  alert("Register success");
  isRegisterSuccess.value = true;
}, failValidation);
</script>

<template>
  <form class="space-y-4 md:space-y-6" action="#">
    <div>
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-[#12b488]"
      >
        {{ $t("email") }}<span class="text-red-500">*</span>
      </label>
      <input
        type="email"
        v-model="email"
        v-bind="emailAttrs"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#12b488] dark:focus:ring-green-500 dark:focus:border-green-500"
        placeholder="name@company.com"
        required="true"
      />
      <span v-if="errors.email" class="text-red-500 text-sm">
        {{ errors.email }}
      </span>
    </div>
    <div>
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-[#12b488]"
      >
        {{ $t("password") }}<span class="text-red-500">*</span>
      </label>
      <input
        type="password"
        v-model="password"
        v-bind="passwordAttrs"
        placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#12b488] dark:focus:ring-green-500 dark:focus:border-green-500"
        required="true"
      />
      <span v-if="errors.password" class="text-red-500 text-sm">
        {{ errors.password }}
      </span>
    </div>
    <div>
      <label
        for="confirm-password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-[#12b488]"
      >
        {{ $t("confirmPassword") }}<span class="text-red-500">*</span>
      </label>
      <input
        type="password"
        v-model="confirmPassword"
        v-bind="conPasswordAttrs"
        placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#12b488] dark:focus:ring-green-500 dark:focus:border-green-500"
        required="true"
      />
      <span v-if="errors.confirmPassword" class="text-red-500 text-sm">
        {{ errors.confirmPassword }}
      </span>
    </div>
    <button
      type="submit"
      class="w-full btn bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      @click="handleCreateAccount"
    >
      {{ $t("submit") }}
    </button>
    <div
      v-if="isRegisterSuccess"
      class="block bg-green-500 rounded-lg w-1/4 px-2 py-3 text-white text-medium"
    >
      Your account was created successfully!
    </div>
  </form>
  <LangSwitcher />
</template>
