import { useState } from "react";
import { editTicket } from "../services/editTicket";
import { putTicket } from "../services/putTicket";

export const useForm = () => {
  // Handle form
  const [form, setForm] = useState({
    title: "",
    desciption: "",
    status: "Not Done",
  });

  // Handle inputs
  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    editTicket(form);
  };

  // Handle validations

  return {
    form,
    handleInputChange,
    handleSubmit,
  };
};
