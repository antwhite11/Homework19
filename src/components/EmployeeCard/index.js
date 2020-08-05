import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.employee.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>First name:</strong> {props.employee.Firstname}
          </li>
          <li>
            <strong>Last name:</strong> {props.employee.Lastname}
          </li>
          <li>
            <strong>Role:</strong> {props.employee.Role}
          </li>
          <li>
            <strong>Email</strong> {props.employee.email}
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;