import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import './style.css'

class Content extends React.Component {
    render(){
        return(
            <div className="main-wrapper">
                <Row>
                    <Form className="login-form">
                        <Form.Item>
                            <Col span={12} className="name">
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Your Name"
                                />
                            </Col>
                            <Col span={11} className="name email">
                            <Input
                            prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="email"
                            placeholder="Enter your Email"
                            />
                            </Col>
                            <Col span={24}>
                            <textarea className="text-area"
                            placeholder="Enter your Messege"
                            />
                            </Col>
                        </Form.Item>
                        <Form.Item className="btn-continer">
                            <Button type="primary" className="login-form-button">
                                Send
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>

            </div>
        )
    }
}

export default Content;