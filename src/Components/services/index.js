import React from 'react';
import { Row, Col, Card } from 'antd';  
import axios from 'axios';
import './style.css';

class Services extends React.Component {
  state = {
    portfolio : []
}
componentDidMount() {
  axios.get('js/data.json').then(res => {this.setState({portfolio : res.data.portfolio})})
}

  renderServices = () =>{
    return(
      <div className="services-text">
         <h4>Marcedes Benz Featuers</h4>
         <p>Exclusive reports and current films: experience a broad range of topics from the fascinating world of Mercedes-Benz. To find out about offers in your location, please go to the local Mercedes-Benz website.</p>
      </div>
    )
  }
  
  render() {

    const {portfolio} = this.state;
    const allPortfolio = portfolio.map((portItem) => {
        return(
              <div className="card-item">
                <Card className="card-body-item">
                    <i className="fa fa-instagram"></i>
                    <h2>{portItem.title}</h2>
                    <p> { portItem.body } </p>
                </Card>
              </div>
        )
    })

    return (
      <div className="Services-continer">
        <div className="first-services-text">
          {this.renderServices()}
        </div>
        <div className="card-services main-wrapper">
            {allPortfolio}
        </div>
      </div>
    );
  }
}

export default Services;
