import React from "react";

const AddTask = ({ closeModal }) => {
  return (
    <>
      <h2>Add a Task</h2>
      <form action="">
        <label htmlFor="title"> Title</label>
        <input type="text" id="title" />
        <label htmlFor="desciption"> Description</label>
        <input type="text" id="desciption" />
        <label htmlFor="status"> Status</label>
        <input type="checkbox" id="status" />
      </form>
    </>
  );
};

export default AddTask;
