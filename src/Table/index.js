import React, { Fragment } from "react";
import "./index.css";

function Table(props) {
  const tableData = props.data;
  const listItems = tableData.map((item, index) => (
    <tr key={item.empId}>
      <td className="name-wrapper">{item.name}</td>
      <td className="empId-wrapper">{item.empId}</td>
      <td className="dept-wrapper">{item.dept}</td>
      <td className="email-wrapper">{item.email}</td>
      <td className="doj-wrapper">{item.doj}</td>
      <td className="delete-icon" onClick={() => props.onClick(index)}>
        X
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <div className="table-header">New Hiring Details</div>
      <div>
        <table>
          <thead>
            <tr>
              <th className="width-ten">Name</th>
              <th className="width-seven">EmployeeID</th>
              <th className="width-ten">Department</th>
              <th className="width-thirty">Email Id</th>
              <th className="width-ten">DOJ</th>
              <th className="delete-icon">Delete</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
      </div>
    </Fragment>
  );
}
export default React.memo(Table);
