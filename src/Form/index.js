import React from "react";
import "./index.css";
import Input from "./../Input";
import Button from "./../Button";

class Form extends React.PureComponent {
  state = {
    name: "",
    empId: "",
    dept: "",
    email: "",
    doj: "",
  };
  handleChange = (e) => {
    //to get the values of form inputs
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    //To submit form data
    let objData = {
      name: this.state.name,
      empId: this.state.empId,
      dept: this.state.dept,
      email: this.state.email,
      doj: this.state.doj,
    };
    if (objData) {
      this.props.onSubmit(objData, false);
    }
    this.setState({
      name: "",
      empId: "",
      dept: "",
      email: "",
      doj: "",
    });
  };
  handleFormData = () => {
    //To clear the form data
    this.setState({
      name: "",
      empId: "",
      dept: "",
      email: "",
      doj: "",
    });
  };
  enableButton = () => {
    //to enable buttons based on data entry or restrict user from submitting
    const { name, empId, dept, email, doj } = this.state;
    if (
      name !== "" &&
      empId !== "" &&
      dept !== "" &&
      email !== "" &&
      doj !== ""
    ) {
      return false;
    }
    return true;
  };
  render() {
    return (
      <div className="form-wrapper">
        <div className="inputs-wrapper">
          <div className="heading-wrapper">
            <div>ADD EMPLOYEE</div>
          </div>
          <div className="button_input-wrapper">
            <div className="input-alignment-wrapper">
              <label>Name : </label>
              <div className="text-wrapper">
                <Input
                  placeholder="Employee Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                ></Input>
              </div>
            </div>
            <div className="input-alignment-wrapper">
              <label>Employee ID : </label>
              <div className="text-wrapper">
                <Input
                  placeholder="Employee ID"
                  name="empId"
                  value={this.state.empId}
                  onChange={this.handleChange}
                ></Input>
              </div>
            </div>
            <div className="input-alignment-wrapper">
              <label>Department : </label>
              <div className="text-wrapper">
                <Input
                  placeholder="Department"
                  name="dept"
                  value={this.state.dept}
                  onChange={this.handleChange}
                ></Input>
              </div>
            </div>
            <div className="input-alignment-wrapper">
              <label>Email ID : </label>
              <div className="text-wrapper">
                <Input
                  placeholder="Email ID"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                ></Input>
              </div>
            </div>
            <div className="input-alignment-wrapper">
              <label>DOJ : </label>
              <div className="text-wrapper">
                <Input
                  placeholder="DOJ"
                  name="doj"
                  value={this.state.doj}
                  onChange={this.handleChange}
                ></Input>
              </div>
            </div>
            <div className="submit-wrapper">
              <Button
                onClick={this.handleSubmit}
                disabled={this.enableButton()}
              >
                Save
              </Button>
              <Button
                onClick={this.handleFormData}
                disabled={this.enableButton()}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
