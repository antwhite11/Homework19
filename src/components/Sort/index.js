import React, { Component } from "react"


class Sort extends Component {
  // Setting the component's initial state
  state = {
    sorted: false
  }

  handleclick = () => {

    this.props.organizeEmployees()
  }
render() {
    return (
      <div className="sort">
      <button type="button" onClick={this.handleclick}> Toggle Sort(First,Last)</button>
      </div>
    )
  }
}
export default Sort