<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, NCard } from "naive-ui";
import useLoginForm from "./useLoginForm";
import { type PublicPathState } from "vee-validate";

const { isSubmitting, onSubmit, defineComponentBinds } = useLoginForm();

const textBoxConfig = (state: PublicPathState) => ({
  model: "value",
  props: {
    validationStatus: state.errors[0] ? ("error" as const) : undefined,
    feedback: state.errors[0],
  },
});

const name = defineComponentBinds("name", textBoxConfig),
  age = defineComponentBinds("age", textBoxConfig),
  phone = defineComponentBinds("phone", textBoxConfig);
</script>

<template>
  <NCard style="max-width: 420px; margin: auto; margin-top: 2rem">
    <NForm ref="formRef" @submit="onSubmit">
      <NFormItem label="姓名" path="user.name" v-bind="name">
        <NInput v-bind="name" placeholder="输入姓名" />
      </NFormItem>
      <NFormItem label="年龄" path="user.age" v-bind="age">
        <NInput v-bind="age" placeholder="输入年龄" />
      </NFormItem>
      <NFormItem label="电话号码" path="phone" v-bind="phone">
        <NInput v-bind="phone" placeholder="电话号码" />
      </NFormItem>
      <NFormItem>
        <NButton :loading="isSubmitting" attr-type="submit"> 验证 </NButton>
      </NFormItem>
    </NForm>
  </NCard>
</template>

<style scoped></style>
