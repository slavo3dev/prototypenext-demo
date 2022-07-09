import React from "react";
import { Collapse } from "react-collapse";

class DropdownItem extends React.Component {
  //   state = {
  //     isDropdownOpen: false,
  //     dropdownToggleIcon: "+",
  //   };

  //   onDropdownClicked = () => {
  //     this.setState((prevState) => ({
  //       isDropdownOpen: !prevState.isDropdownOpen,
  //       dropdownToggleIcon:
  //         prevState.dropdownToggleIcon === "+" ? "-" : "+",
  //     }));
  //   };

  render() {
    return <h1>Drop Down Item</h1>;
    //return (
    //   <div id={this.props.id}>
    //     <div>
    //       <div>{this.props.title}</div>
    //       <button onClick={this.onDropdownClicked}>
    //         {this.state.dropdownToggleIcon}
    //       </button>
    //     </div>
    //     <Collapse isOpened={this.state.isDropdownOpen}>
    //       <div className={displayText}>{this.props.children}</div>
    //     </Collapse>
    //   </div>
    // );
  }
}

export default DropdownItem;
