import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Search from "./components/Search"
import EmployeeList from "./components/EmployeeList"
import Sort from "./components/Sort"


class App extends Component{

  state = {
    employees,
    filtered: false, //true
    foundEmployee: null, //deepika
    sorted: false
  }

  organizeEmployees = () =>{
 this.state.employees.sort((a,b) => {
       if(this.state.sorted === true){
        return a.Lastname.localeCompare(b.Lastname) 
       }
       else{
         return b.Lastname.localeCompare(a.Lastname)
       }
     
    })
    this.setState({sorted: !this.state.sorted})
  };

  showEmployees() {
    console.log(this.state.foundEmployee)
    return <EmployeeList employees={this.state.employees} 
    filtered={this.state.filtered} 
    foundEmployee={this.state.foundEmployee}></EmployeeList>
  }

  azEmployees = (input) => {
    console.log(input)
    let employee = this.state.employees.find( employee => {
        return employee.Lastname === input
    })
    console.log(employee)
    this.setState({ foundEmployee: employee, filtered: true})
  }

  

  render(){
    return(
      <Wrapper>
        <div class="container-fluid">
            
            
            
            <div class="row">
                
                
                <div class="col-sm-12" id="title">
                <Title>Employee Organizer</Title>
                </div>
            
            
            </div>
            <div class="row">
                
                
                
                <div class="col-sm-12" id="search">
                <Search filterEmployees={this.filterEmployees}/>
                </div>
                
                
                <div class="col-sm-12" id="sort">
                <Sort organizeEmployees={this.organizeEmployees}/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" id="render">
                {this.showEmployees()}
                </div>
            </div>
        </div>
      </Wrapper>
      
    )
  }
};



export default App;