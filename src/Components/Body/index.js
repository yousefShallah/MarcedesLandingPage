import React from 'react';
import Featured from '../Featured/index';
import Services from '../services/index';

class Body extends React.Component {

            

  render() {
    return (
      <div className="body-continer">
        <Services />
        <Featured />
      </div>
    );
  }
}

export default Body;
