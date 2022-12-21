import { useState } from "react";
import { editTicket } from "../services/editTicket";
import { putTicket } from "../services/putTicket";

export const useForm = () => {
  const cloudName = import.meta.env.VITE_REACT_APP_CLOUDNAME;
  const uploadPreset = import.meta.env.VITE_REACT_APP_UPLOADPRESET;
  const [form, setForm] = useState({
    title: "",
    desciption: "",
    status: "Not Done",
    images:[{
      public_id:"cld-sample-5",
      url:"https://res.cloudinary.com/dyfyklgpd/image/upload/v1670937567/cld-sample-5.jpg"
    }]
  });

  // Handle inputs
  
  const updateFormDetails = (ticket) => {
    console.log(ticket,"hello");
    // setForm({...form,
    //   title: ticket.title,
    //   desciption: ticket.desciption,
    //   status: ticket.status,
    //   images:ticket.images
    // })
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
          console.log("Done! Here is the image info: ", result.info);
          form.images.push({
            public_id: result.info.public_id,
            url: result.info.url,
          });
          console.log(form);
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
