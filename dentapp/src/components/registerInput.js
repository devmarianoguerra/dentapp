import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class RegisterInput extends React.Component {
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
        <InputGroup className="inputGroupStyle">
          <div>
            <FormControl
              style={{
                width: 311,
                height: 53,
                fontSize: 18,
                color: "#929292",
                borderColor: "#00D9CC",
                borderWidth: 1.5,
                borderRadius: 60,
                fontFamily: "Roboto",
              }}
              placeholder="contact@email.com"
              onChange={this.handleChange}
            />
          </div>
        </InputGroup>
      </>
    );
  }
}

export default RegisterInput;
