import { useState } from "react";
import { editTicket } from "../services";


export const useForm = () => {
  const cloudName = import.meta.env.VITE_REACT_APP_CLOUDNAME;
  const uploadPreset = import.meta.env.VITE_REACT_APP_UPLOADPRESET;
  const [form, setForm] = useState({
    title: "",
    desciption: "",
    status: "Not Done",
    images: [
      {
        public_id: "",
        url: "",
      },
    ],
  });

  // Handle inputs

  const updateFormDetails = (ticket) => {
  };
  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    editTicket(form);
  };

  const handleOpenWidget = (event) => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          form.images.push({
            public_id: result.info.public_id,
            url: result.info.url,
          });
        }
      }
    );
    myWidget.open();
  };

  // Handle validations

  return {
    form,
    setForm,
    handleInputChange,
    handleSubmit,
    handleOpenWidget,
    updateFormDetails,
  };
};
