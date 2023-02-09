import React, { useState } from "react";

const cloudName = import.meta.env.VITE_REACT_APP_CLOUDNAME;
const uploadPreset = import.meta.env.VITE_REACT_APP_UPLOADPRESET;

function FileSelector() {
  const [images, setImage] = useState([]);
  const [ImageToRemove, setImageToRemove] = useState(null);

  function handleOpenWidget() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImage((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
        }
      }
    );
    myWidget.open();
  }
  return (
    <>
      <div>
        <button onClick={() => handleOpenWidget()}> Upload file</button>
      </div>
    </>
  );
}

export default FileSelector;
