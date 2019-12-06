import React from 'react';
import NavBar from "../NavBar/index";
import { Row , Col} from 'antd';
import './style.css';
import { Button } from 'antd';

class Header extends React.Component {
  renderHeaderBackground = () =>{
    return(
      <div className="background-header">
        <NavBar />
        <Row>
          <Col span={24}>
            <div className="body-header">
              <h3> Marcedes Benz </h3>
              <p>Exclusive reports and current films: experience a broad range of topics from the fascinating world of Mercedes-Benz. To find out about offers in your location, please go to the local Mercedes-Benz website.</p>
              <Button type="primary" className="login-form-button">view our Projects</Button>

            </div>
          </Col>
        </Row>
      </div>
    )
  }


  render() {
    return (
      <div className="header-continer">
        { this.renderHeaderBackground() }
      </div>
    );
  }
}

export default Header;
