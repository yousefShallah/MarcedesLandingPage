import React from 'react';
import './style.css';

class Footer extends React.Component {

  renderFooter = () =>{
    return(
      <div className="footer">
        <p>Welcome .. We hope visit us again <span> DEV : Yousef </span></p>
      </div>
    )
  }


  render() {
    return (
      <div className="App">
        {this.renderFooter()}
      </div>
    );
  }
}

export default Footer;
