import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form,  Row } from 'reactstrap';
import SSOService from '../../../services/SSOService';
import { Redirect } from 'react-router-dom'

class Login extends Component {

  constructor(props) {
    super(props);
    this.ssoService = new SSOService();
  }

  login = () => {
    this.ssoService.login();
  }

  render() {
    if (this.ssoService.isLoggedIn())
    {
      return <Redirect to='/' />
    }
    else
    {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h6>Insight Security Welcomes you to Continous Compliance</h6>
                      <p className="text-muted">Sign In to your account</p>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.login}>Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );}
  }
}

export default Login;
