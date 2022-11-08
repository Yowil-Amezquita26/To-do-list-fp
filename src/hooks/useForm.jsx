import  { useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState({
    title: "hello",
    desciption: "",
    status: "",
  });
  const updateForm = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    })
  }
  const updateFormCharacter = (e) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z ]/, "");
    setForm({
        ...form,
        [e.target.name]: e.target.value,

    })}
  console.log(form)
  return {form,updateForm, updateFormCharacter};
};

export default useForm;
