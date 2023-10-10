import { object, string } from "zod";
import { useMessage } from "naive-ui";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

const loginFormSchema = object({
  name: string().min(1, "请输入姓名"),
  age: string().min(1, "请输入年龄"),
  phone: string().min(1, "请输入电话号码"),
});

const useLoginForm = () => {
  const { values, handleSubmit, isSubmitting, defineComponentBinds } = useForm({
    initialValues: {
      name: "",
      age: "",
      phone: "",
    },
    validationSchema: toTypedSchema(loginFormSchema),
  });

  const message = useMessage();

  const onSubmit = handleSubmit(
    (values) => {
      console.log(values);
      message.success("Valid");
    },
    (context) => {
      message.error("Invalid");
    }
  );

  return { isSubmitting, onSubmit, defineComponentBinds };
};

export default useLoginForm;
