<script setup lang="ts">
import { NMessageProvider } from "naive-ui";
import FormWithProps from "./components/FormWithProps.vue";
import FormWithHook from "./components/FormWithHook.vue";
</script>

<template>
  <NMessageProvider>
    <FormWithProps />
    <FormWithHook />
  </NMessageProvider>
</template>

<style scoped></style>
