import React from 'react';
import { Row, Col, Menu } from 'antd';
import LogoImg from '../../images/logo.png'
import './style.css';

class NavBar extends React.Component {

  renderLogoNavBar = () =>{
    return(
      <div className="logo-continer">
        <img className="logo-img" src={LogoImg} />
      </div>
    )
  }

  renderLinksNavBar = () =>{
    return(
      <div className="Links-continer">
        <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        >
            <Menu.Item>Work</Menu.Item>
            <Menu.Item>Featuer</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
            <Menu.Item>Content Us</Menu.Item>
        </Menu>
      </div>
    )
  }

  render() {
    return (
      <div className="NavBar-continer">
        <Row type="flex">
          <Col span={12}>{this.renderLogoNavBar()}</Col>
          <Col span={12}>{this.renderLinksNavBar()}</Col>
       </Row>
      </div>

    );
  }
}

export default NavBar;
