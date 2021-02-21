import React, { useState } from 'react';

class TabList extends React.Component {

  constructor(props) {
    super(props);



  }

  render() {
    return (
      <div>
        <p>I am TabList {this.props.currentTabID}</p>
        <button onClick={this.props.onChangeTabButton}>TabListButton</button>
      </div>
    );
  }
}

export default TabList;