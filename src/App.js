import React from 'react';
import Header from './Components/Header/index';
import Body from './Components/Body/index';
import Footer from './Components/Footer/index';
import './base.css'
import 'antd/dist/antd.css';
import Content from './Components/Content/index';


class App extends React.Component {

  render() {  
     //  console.log(Serv.services[0]);
    return (
      <div className="App">
        <Header />
        <Body />
        <Content />

        <Footer />
      </div>
    );
  }
}

export default App;
