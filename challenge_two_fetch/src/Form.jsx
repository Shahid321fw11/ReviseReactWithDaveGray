import React from "react";

const Form = ({ reqType, setReqType }) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
        <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
        <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      </form>
    </>
  );
};

export default Form;