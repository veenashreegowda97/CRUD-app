import React from "react";
import Table from "./../Table";
import "./index.css";
import Form from "./../Form";
import ReactModal from "react-modal";
import Button from "./../Button";
ReactModal.setAppElement("#root");

class Main extends React.PureComponent {
  state = {
    employeeInfo: [],
    showModal: false,
  };
  handleOpenModal = () => {
    //function to open modal
    this.setState({ showModal: true });
  };
  handleCloseModal = () => {
    //function to close modal
    this.setState({ showModal: false });
  };
  getData = (postedData, data) => {
    let employeeInfo = [...this.state.employeeInfo]; //form submitted data to render the table
    employeeInfo.push(postedData);
    this.setState({
      employeeInfo: employeeInfo,
      showModal: data,
    });
  };
  removeRecord = (arrIndex) => {
    let employeeInfo = [...this.state.employeeInfo]; //remove data from an array to render table
    employeeInfo.splice(arrIndex, 1);
    this.setState({
      employeeInfo: employeeInfo,
    });
  };
  render() {
    return (
      <div className="create-body">
        <div className="mainForm-wrapper">
          <Button onClick={this.handleOpenModal}>+ New Employee</Button>
          <div className="react-wrapper">
            <ReactModal
              isOpen={this.state.showModal}
              className="Modal"
              overlayClassName="Overlay"
              onRequestClose={this.handleCloseModal}
            >
              <Form onSubmit={this.getData} />
            </ReactModal>
          </div>
        </div>
        <div className="table-wrapper">
          {this.state.employeeInfo.length > 0 && (
            <Table
              data={this.state.employeeInfo}
              onClick={this.removeRecord}
            ></Table>
          )}
        </div>
      </div>
    );
  }
}
export default Main;
