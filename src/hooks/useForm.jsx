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
  return {form,updateForm};
};

export default useForm;
