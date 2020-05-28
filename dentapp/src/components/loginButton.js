import React from "react";

function LoginButton() {
  const handleClick = () => {
    console.log("The button was clicked");
  };

  return (
    <>
      <button onClick={handleClick}>Click here</button>
    </>
  );
}

export default LoginButton;
