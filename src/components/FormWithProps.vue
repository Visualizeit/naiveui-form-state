<script setup lang="ts">
import { ref } from "vue";
import {
  type FormInst,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NCard,
  useMessage,
} from "naive-ui";

const formRef = ref<FormInst | null>(null);

const message = useMessage();

const formValue = ref({
  user: {
    name: "",
    age: "",
  },
  phone: "",
});

const rules = {
  user: {
    name: {
      required: true,
      message: "请输入姓名",
      trigger: "blur",
    },
    age: {
      required: true,
      message: "请输入年龄",
      trigger: ["input", "blur"],
    },
  },
  phone: {
    required: true,
    message: "请输入电话号码",
    trigger: ["input"],
  },
};

const handleValidateClick = (event: MouseEvent) => {
  event.preventDefault();

  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("Valid");
    } else {
      console.log(errors);
      message.error("Invalid");
    }
  });
};
</script>

<template>
  <NCard style="max-width: 420px; margin: auto; margin-top: 2rem">
    <NForm ref="formRef" :model="formValue" :rules="rules">
      <NFormItem label="姓名" path="user.name">
        <NInput v-model:value="formValue.user.name" placeholder="输入姓名" />
      </NFormItem>
      <NFormItem label="年龄" path="user.age">
        <NInput v-model:value="formValue.user.age" placeholder="输入年龄" />
      </NFormItem>
      <NFormItem label="电话号码" path="phone">
        <NInput v-model:value="formValue.phone" placeholder="电话号码" />
      </NFormItem>
      <NFormItem>
        <NButton attr-type="button" @click="handleValidateClick">
          验证
        </NButton>
      </NFormItem>
    </NForm>
  </NCard>
</template>

<style scoped></style>
