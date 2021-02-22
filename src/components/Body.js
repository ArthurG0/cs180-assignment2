import React, { useState } from 'react';
import Text from './Text'
import Image from './Image'
import Video from './Video'
import Email from './Email'
import Table from './Table'

class Body extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let selectedComponent;
    if(this.props.currentTabID == 1){
      selectedComponent = <Text></Text>
    }
    else if(this.props.currentTabID == 2){
      selectedComponent = <Image></Image>
    }
    else if(this.props.currentTabID == 3){
      selectedComponent = <Video></Video>
    }
    else if(this.props.currentTabID == 4){
      selectedComponent = <Table></Table>
    }
    else if(this.props.currentTabID == 5){
      selectedComponent = <Email></Email>
    }
    else {
      selectedComponent = <p>Error in Body.js: correct Component now found</p>
    }

    return (
      <div>
        I am body Component

        {selectedComponent}

        End of body Component
      </div>
    )
    
  }
}

export default Body;