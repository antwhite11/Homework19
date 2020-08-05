import React from "react";
import EmployeeCard from "../EmployeeCard";
class EmployeeList extends React.Component {
showEmployees = () => {
    if (this.props.employees.length > 0) {
     
      let employees = this.props.employees
    if (this.props.filtered === true && this.props.foundEmployee !== undefined) {
        employees = this.props.employees.filter(employee => {
          return employee.id === this.props.foundEmployee.id
        })
      }
      return employees.map(employee => {
        return <EmployeeCard employee={employee} />
      })
    }
  }
render() {
    return (
       <div className="EmployeeList">
        {this.showEmployees()}
      </div>
        
      
    )
  }
}
export default EmployeeList