import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
//import "./loginInput.css";

class LoginInput extends React.Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
    console.log("input value: ", e.target.value);
  };

  render() {
    return (
      <>
        <style type="text/css">
          {`.inputGroupStyle = {
              width: 311,
              height: 53,
            };
          
            .fromControlStyle = {
              width: 311,
            height: 53,
            background-color: #ffff, 
            color: #d6d6d6, 
            border: 2px solid #00d9cc, 
            border-radius: 25,
            font-family: Roboto, 
            letter-spacing: 0.0357143em,
            padding: 10px 18px 0px 25px, 
            }`}
        </style>
        <InputGroup className="inputGroupStyle">
          <div>
            <FormControl
              className="formControlStyle"
              placeholder="contact@email.com"
              onChange={this.handleChange}
            />
          </div>
        </InputGroup>
      </>
    );
  }
}

export default LoginInput;
