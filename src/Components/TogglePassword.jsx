import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function TogglePassword() {
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleIcon = () => {
    setShowpassword(!showpassword);
  };
  return (
    <div className="main_container">
      <form className="form_container">
        <label htmlFor="">Entre Password</label>
        <div className="input_container">
        <input
          type={showpassword ? "text" : "password"}
          placeholder="Entre Password"
          onChange={handleChange}
        />
        <div className="eyecontainer">
          {showpassword ? (
            <FaEye onClick={handleIcon} />
          ) : (
            <FaEyeSlash onClick={handleIcon} />
          )}
        </div>
        </div>
       
      </form>
    </div>
  );
}

export default TogglePassword;
