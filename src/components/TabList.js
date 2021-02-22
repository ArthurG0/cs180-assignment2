import React, { useState } from 'react';
import Tab from './Tab'

class TabList extends React.Component {

  constructor(props) {
    super(props);

    this.listOfTabs = [
      {id: 1, name: "Text"},
      {id: 2, name: "Image"},
      {id: 3, name: "Video"},
      {id: 4, name: "Table"},
      {id: 5, name: "Email"},
    ]
  }


  render() {


    return (
      <div>
        {
          this.listOfTabs.map( (tab) =>

            <Tab
              name={tab.name}
              id={tab.id}
              selectedId={this.props.currentTabID}
              onPressed={this.props.onChangeTab}></Tab>
          )
        }

        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default TabList;