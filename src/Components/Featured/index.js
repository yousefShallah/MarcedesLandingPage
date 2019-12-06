import React from 'react';
import './style.css';
import videoImg from '../../images/marcedes2.jpg';
import { Row, Col, Button } from 'antd';

 
class Featured extends React.Component {

  renderVideoFeatuerBody = () =>{
    return(
      <div className="video-featuer">
        <img src={videoImg} />
      </div>
    )
  }

  renderFeatuer = () =>{
    return(
      <div className="featuer-text">
         <h4>Marcedes Benz Featuers</h4>
         <p>Exclusive reports and current films: experience a broad range of topics from the fascinating world of Mercedes-Benz. To find out about offers in your location, please go to the local Mercedes-Benz website.</p>
      </div>
    )
  }

  renderFeatuerBody = () =>{
    return(
      <div>
        <Row className="desc-body-continer">
          <Col span={12} className="desc-body">
            <h4>Marcedes Benz Featuers</h4>
            <p>Exclusive reports and current films: experience a broad range of topics from the fascinating world of Mercedes-Benz. To find out about offers in your location, please go to the local Mercedes-Benz website.</p>
            <Button type="primary" className="login-form-button">view our Projects</Button>
          </Col>
          <Col span={12} className="img-body1">
          </Col>
        </Row>
        <Row className="desc-body-continer">
        <Col span={12} className="img-body2">
          </Col>
          <Col span={12} className="desc-body">
            <h4>Marcedes Benz Featuers</h4>
            <p>Exclusive reports and current films: experience a broad range of topics from the fascinating world of Mercedes-Benz. To find out about offers in your location, please go to the local Mercedes-Benz website.</p>
            <Button type="primary" className="login-form-button"> view our Projects</Button>
          </Col>
        </Row>
        <Row className="desc-body-continer">
          <Col span={12} className="desc-body">
            <h4>Marcedes Benz Featuers</h4>
            <p>Exclusive reports and current films: experience a broad range of topics from the fascinating world of Mercedes-Benz. To find out about offers in your location, please go to the local Mercedes-Benz website.</p>
            <Button type="primary" className="login-form-button"> view our Projects</Button>          </Col>
          <Col span={12} className="img-body3">
          </Col>
        </Row> 
      </div>
    )
  }



  render() {
    return (
      <div className="Featuer-continer main-wrapper">
        <Row>
          <Col span={24}>
            {this.renderVideoFeatuerBody()}
          </Col>
          <Col span={24}>
            {this.renderFeatuer()}
          </Col> 
          <Col span={24}>
            {this.renderFeatuerBody()}

          </Col> 
        </Row>
      </div>
    );
  }
}

export default Featured;
